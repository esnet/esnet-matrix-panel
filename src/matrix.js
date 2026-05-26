import { useD3 } from './useD3.js';
import * as d3 from './d3.min.js';
import { css } from '@emotion/css';
import { GrafanaTheme2 } from '@grafana/data';
import { useStyles2, useTheme2 } from '@grafana/ui';
import sanitizeHtml from 'sanitize-html';
import { Heading } from './types';

/** Create the matrix diagram using d3.
 * @param {SvgInHtml} elem The parent svg element that will house this diagram
 * @param {number} id The panel id
 * @param {any[]} rowNames Row names
 * @param {any[]} colNames Column names
 * @param {DataMatrixCell[][]} matrix The data that will populate the diagram
 * @param {MatrixOptions} options Panel configuration
 * @param {GrafanaTheme} theme Grafana theme
 * @param {LegendData[]} legend Legend data
 * @param {CSSReturnValue} styles CSS styles
 * @param {Category[]} column categories
 * @param {Category[]} row categories
 */
function createViz(elem, id, rowNames, colNames, matrix, options, theme, legend, styles, colCategories, rowCategories) {
  const srcText = sanitizeHtml(options.sourceText),
    targetText = sanitizeHtml(options.targetText),
    valText = sanitizeHtml(options.valueText),
    cellSize = options.cellSize,
    cellPadding = options.cellPadding / 100, // convert the cellPadding integer to a float that can be used by d3
    txtLength = options.txtLength,
    txtSize = options.txtSize / 10, //convert this val to EM scaling 90 = .9em 100 = 1em ... etc
    linkURL = options.url,
    urlVar1 = options.urlVar1,
    urlVar2 = options.urlVar2,
    defaultColor = theme.visualization.getColorByName(options.defaultColor);

  // urlOther = options.urlOther,
  // urlOtherText = options.urlOtherText;

  // do a bit of work to setup the visual layout of the wiget --------
  if (elem === null) {
    console.error('bailing after failing to find parent element');
    return;
  }

  // find the length of the longest name. this will inform the margin and name truncation
  const longestColName = colNames.reduce((a, b) => {
    return a.length > b.length ? a : b;
  });
  const longestRowName = rowNames.reduce((a, b) => {
    return a.length > b.length ? a : b;
  });

  // txtLength is passed in. but names may be much smaller than this value.
  // since this informs the margin we want to set it to whichever is longer
  // this prevents a huge white space if txtlength is considerably bigger
  // than the longest name. add 3 characters to account for ellipsis (...)
  const maxColTxtLength = longestColName.length < txtLength ? longestColName.length : txtLength + 3;
  const maxRowTxtLength = longestRowName.length < txtLength ? longestRowName.length : txtLength + 3;

  // Calculate the margins needed
  const colTxtOffset = maxColTxtLength * txtSize * 5 + 25;
  const rowTxtOffset = maxRowTxtLength * txtSize * 5 + 25;

  // Category header configuration
  const colCategoryHeaderHeight = options.enableColGrouping && colCategories && colCategories.length > 0
    ? (options.colCategoryHeaderHeight !== undefined ? options.colCategoryHeaderHeight : 40)
    : 0;
  const colCategoryGap = options.enableColGrouping && colCategories && colCategories.length > 0
    ? (options.colCategoryGap !== undefined ? options.colCategoryGap : 4)
    : 0;

  // Calculate column positions with gaps between colCategories
  const columnPositions: Heading[] = [];
  let totalWidth = 0;

  if (options.enableColGrouping && colCategories && colCategories.length > 0) {
    // Calculate positions with category gaps
    colCategories.forEach((category, catIndex) => {
      const numCols = category.items.length;
      const groupWidth = numCols * cellSize;

      category.items.forEach((colName, indexInCat) => {
        columnPositions.push({
          name: colName,
          x: totalWidth + (indexInCat * cellSize),
          width: cellSize,
          category: category.name,
          categoryIndex: catIndex
        });
      });

      totalWidth += groupWidth;
      if (catIndex < colCategories.length - 1) {
        totalWidth += colCategoryGap;
      }
    });
  } else {
    // No grouping: standard layout
    colNames.forEach((colName, idx) => {
      columnPositions.push({
        name: colName,
        x: idx * cellSize,
        width: cellSize,
        category: '',
        categoryIndex: 0
      });
    });
    totalWidth = colNames.length * cellSize;
  }

  // Row category configuration
  const rowCategoryHeaderWidth = options.enableRowGrouping && rowCategories && rowCategories.length > 0
    ? (options.rowCategoryHeaderWidth !== undefined ? options.rowCategoryHeaderWidth : 100)
    : 0;
  const rowCategoryGap = options.enableRowGrouping && rowCategories && rowCategories.length > 0
    ? (options.rowCategoryGap !== undefined ? options.rowCategoryGap : 4)
    : 0;

  // Calculate row positions with gaps between colCategories
  const rowPositions: Heading[] = [];
  let totalHeight = 0;

  if (options.enableRowGrouping && rowCategories && rowCategories.length > 0) {
    rowCategories.forEach((category, catIndex) => {
      const numRows = category.items.length;
      const groupHeight = numRows * cellSize;

      category.items.forEach((rowName, indexInCat) => {
        rowPositions.push({
          name: rowName,
          y: totalHeight + (indexInCat * cellSize),
          height: cellSize,
          category: category.name,
          categoryIndex: catIndex
        });
      });

      totalHeight += groupHeight;
      if (catIndex < rowCategories.length - 1) {
        totalHeight += rowCategoryGap;
      }
    });
  } else {
    rowNames.forEach((rowName, idx) => {
      rowPositions.push({
        name: rowName,
        y: idx * cellSize,
        height: cellSize,
        category: '',
        categoryIndex: 0
      });
    });
    totalHeight = rowNames.length * cellSize;
  }

  // set the dimensions and margins of the graph
  const margin = { top: colTxtOffset + colCategoryHeaderHeight, right: 0, bottom: 0, left: rowTxtOffset + rowCategoryHeaderWidth },
    width = totalWidth,
    height = totalHeight;

  if (elem !== undefined) {
    // clear out old contents
    elem.replaceChildren();
  }

  const tooltip = d3
    .select(elem)
    .append('div')
    .attr('class', `${styles.tooltip} matrix-tooltip-${id}`)
    .style('opacity', 0);

  // append the svg object to the body of the page
  const svgClass = `svg-${id}`;
  const svgMatrix = d3
    .select(elem)
    .append('svg')
    .attr('id', svgClass)
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

  // Build X scales and axis:
  // Index-based scale to support duplicate column names across categories
  const x = function(colIndex) {
    return columnPositions[colIndex] ? columnPositions[colIndex].x : 0;
  };
  x.bandwidth = function() {
    return cellSize * (1 - cellPadding);
  };

  // Create axis manually with proper styling
  const xAxisGroup = svgMatrix.append('g').attr('class', 'x-axis').attr('font-size', '10');
  columnPositions.forEach(pos => {
    const label = xAxisGroup.append('text')
      .attr('transform', `translate(${pos.x + cellSize / 2},-12)rotate(-90)`)
      .attr('text-anchor', 'start')
      .attr('font-size', txtSize + 'em')
      .style('font-family', theme.typography.fontFamily)
      .attr('fill', theme.colors.text.primary)
      .text(pos.name);

    // Apply truncation and tooltips
    label.call(truncateLabel, txtLength);
    label.on('mouseover', function (event, d) {
      tooltip
        .html(sanitizeHtml(pos.name))
        .transition()
        .duration(150)
        .style('opacity', 1);
    })
    .on('mousemove', function (event) {
      moveTooltip(event, elem, tooltip);
    })
    .on('mouseout', function () {
      tooltip
        .transition()
        .delay(100)
        .duration(150)
        .style('opacity', 0);
    });
  });

  // Build Y scales and axis:
  // Index-based scale to support duplicate row names across categories
  const y = function(rowIndex) {
    return rowPositions[rowIndex] ? rowPositions[rowIndex].y : 0;
  };
  y.bandwidth = function() {
    return cellSize * (1 - cellPadding);
  };

  // Create Y-axis manually with proper styling
  const yAxisGroup = svgMatrix.append('g').attr('class', 'y-axis').attr('font-size', '10');
  rowPositions.forEach(pos => {
    const label = yAxisGroup.append('text')
      .attr('x', -10)
      .attr('y', pos.y + cellSize / 2)
      .attr('text-anchor', 'end')
      .attr('dominant-baseline', 'middle')
      .attr('font-size', txtSize + 'em')
      .style('font-family', theme.typography.fontFamily)
      .attr('fill', theme.colors.text.primary)
      .text(pos.name);

    label.call(truncateLabel, txtLength);
    label.on('mouseover', function (event, d) {
      tooltip
        .html(sanitizeHtml(pos.name))
        .transition()
        .duration(150)
        .style('opacity', 1);
    })
    .on('mousemove', function (event) {
      moveTooltip(event, elem, tooltip);
    })
    .on('mouseout', function () {
      tooltip
        .transition()
        .delay(100)
        .duration(150)
        .style('opacity', 0);
    });
  });

  // Render category headers
  if (options.enableColGrouping && colCategories && colCategories.length > 0) {
    const categoryHeaderGroup = svgMatrix.append('g')
      .attr('class', `category-headers-${id}`)
      .attr('font-size', '10')
      .attr('transform', `translate(0, ${-colTxtOffset - colCategoryHeaderHeight})`);

    colCategories.forEach((category, catIndex) => {
      // find first and last column heading for this category
      let startPos = undefined;
      let endPos = undefined;
      for (let i = 0; i < columnPositions.length; i++) {
        if (columnPositions[i].category === category.name) {
          if (startPos === undefined) {
            // first column heading for the category
            startPos = columnPositions[i];
            endPos = columnPositions[i];
          } else {
            endPos = columnPositions[i];
          }
        } else if (startPos !== undefined) {
          // no more column headings for this category
          break;
        }
      }

      if (startPos && endPos) {
        const groupX = startPos.x;
        const groupWidth = (endPos.x + cellSize) - startPos.x;

        // Category label rotated vertically; truncated to fit colCategoryHeaderHeight.
        const colGroupLabelMaxChars = Math.max(3, Math.floor((colCategoryHeaderHeight - 12) / (txtSize * 1.2 * 8)));
        categoryHeaderGroup.append('text')
          .attr('transform', `translate(${groupX + cellSize / 2}, ${colCategoryHeaderHeight - 12})rotate(-90)`)
          .attr('text-anchor', 'start')
          .attr('font-size', (txtSize * 1.2) + 'em')
          .attr('font-weight', 'bold')
          .attr('fill', theme.colors.text.primary)
          .style('font-family', theme.typography.fontFamily)
          .text(category.name)
          .call(truncateLabel, colGroupLabelMaxChars)
          .on('mouseover', function (event, d) {
            tooltip
              .html(sanitizeHtml(category.name))
              .transition()
              .duration(150)
              .style('opacity', 1);
          })
          .on('mousemove', function (event) {
            moveTooltip(event, elem, tooltip);
          })
          .on('mouseout', function () {
            tooltip
              .transition()
              .delay(100)
              .duration(150)
              .style('opacity', 0);
          });
      }
    });
  }

  // Render row category headers
  if (options.enableRowGrouping && rowCategories && rowCategories.length > 0) {
    const rowCategoryHeaderGroup = svgMatrix.append('g')
      .attr('class', `row-category-headers-${id}`)
      .attr('font-size', '10')
      .attr('transform', `translate(${-rowTxtOffset - rowCategoryHeaderWidth}, 0)`);

    rowCategories.forEach((category, catIndex) => {
      // find first and last row heading for this category
      let startPos = undefined;
      let endPos = undefined;
      for (let i = 0; i < rowPositions.length; i++) {
        if (rowPositions[i].category === category.name) {
          if (startPos === undefined) {
            // first row heading for the category
            startPos = rowPositions[i];
            endPos = rowPositions[i];
          } else {
            endPos = rowPositions[i];
          }
        } else if (startPos !== undefined) {
          // no more row headings for this category
          break;
        }
      }

      if (startPos && endPos) {
        const groupY = startPos.y;
        const groupHeight = (endPos.y + cellSize) - startPos.y;

        // Group label: right-aligned so text grows leftward into rowCategoryHeaderWidth.
        // Truncated when wider than the allocated area; tooltip shows full name.
        const groupLabelMaxChars = Math.max(3, Math.floor((rowCategoryHeaderWidth - 10) / (txtSize * 1.2 * 8)));
        rowCategoryHeaderGroup.append('text')
          .attr('x', rowCategoryHeaderWidth - 5)
          .attr('y', groupY + cellSize / 2)
          .attr('text-anchor', 'end')
          .attr('dominant-baseline', 'middle')
          .attr('font-size', (txtSize * 1.2) + 'em')
          .attr('font-weight', 'bold')
          .attr('fill', theme.colors.text.primary)
          .style('font-family', theme.typography.fontFamily)
          .text(category.name)
          .call(truncateLabel, groupLabelMaxChars)
          .on('mouseover', function (event, d) {
            tooltip
              .html(sanitizeHtml(category.name))
              .transition()
              .duration(150)
              .style('opacity', 1);
          })
          .on('mousemove', function (event) {
            moveTooltip(event, elem, tooltip);
          })
          .on('mouseout', function () {
            tooltip
              .transition()
              .delay(100)
              .duration(150)
              .style('opacity', 0);
          });
      }
    });
  }

  //build the matrix /////////////////////////////////////////

  //use d3's local stuff to record where we are in the outer loop
  const outer = d3.local();

  const svg_g = d3.select('#' + svgClass).selectAll('svg > g');

  //create the area where we will put all the boxes
  const rectClass = `rectArea-${id}`;
  const rectArea = svg_g.append('g').attr('class', rectClass);

  //this selection breaks the data down to the row level. This is
  //needed because the underlying datastructure is a 2d array
  const rows = rectArea.selectAll('g').data(matrix).enter().append('g').attr('class', 'row');

  const rects = rows
    .selectAll('rect')
    .data(function (d, i) {
      outer.set(this, i);
      return d;
    })
    .enter()
    .append('a')
    .attr('xlink:href', (d) => {
      if (linkURL) {
        let thisURL = linkURL;
        if (urlVar1) {
          thisURL = thisURL.concat(`&var-${urlVar1}=${d.row}`);
        }
        if (urlVar2) {
          thisURL = thisURL.concat(`&var-${urlVar2}=${d.col}`);
        }
        return thisURL;
      }
    })
    .append('rect')
    .attr('id', `rect-${id}`)
    .attr('x', function (d, i, j) {
      return x(i);
    })
    .attr('y', function (d, i, j) {
      const outer_counter = outer.get(this);
      return y(outer_counter);
    })
    .attr('width', x.bandwidth())
    .attr('height', y.bandwidth())
    //this places a 'data' attribute into the HTML to make debugging easier. Allows you to see the inner/outer loop counts and the datum used
    .attr('data', function (d, i) {
      const outer_counter = outer.get(this);
      const str = '' + outer_counter + ':' + i + ' ' + rowNames[outer_counter] + ':' + colNames[i] + ' ' + d;
      return str;
    })
    .attr('fill', (d) => {
      if (d.color) {
        return d.color;
      } else {
        return defaultColor;
      }
    })
    // the tooltip for boxes
    .on('mouseover', function (event, d) {
      if (d !== -1) {
        //turn down the opacity slightly to show the hover
        d3.select(this)
          // .attr('opacity', '.75')
          .attr('width', x.bandwidth() + 5)
          .attr('height', y.bandwidth() + 5)
          .attr('transform', 'translate(-1, -1)');

        tooltip
          .html(() => {
            const thisRow = sanitizeHtml(d.row);
            const thisColumn =sanitizeHtml(d.col);
            const thisText = sanitizeHtml(d.display.text);
            const thisSuffix = sanitizeHtml(d.display.suffix);
            const text = `<div class="${styles.tooltipTable}">
  <div class="${styles.tooltipTableCell}">
    <div class="${styles.tooltipTableRowLabel}">${srcText}</div>
  </div>
  <div class="${styles.tooltipTableCell}">
    <div class="${styles.tooltipTableRowValue}">${thisRow}</div>
  </div>
  <div class="${styles.tooltipTableCell}">
    <div class="${styles.tooltipTableRowLabel}">${targetText}</div>
  </div>
  <div class="${styles.tooltipTableCell}">
    <div class="${styles.tooltipTableRowValue}">${thisColumn}</div>
  </div>
  <div class="${styles.tooltipTableCell}">
    <div class="${styles.tooltipTableRowLabel}">${valText}</div>
  </div>
  <div class="${styles.tooltipTableCell}">
    <div class="${styles.tooltipTableRowValue}">${thisText} ${thisSuffix ? thisSuffix : ''}</div>
  </div>
</div>`;
            return text;
          })
          .transition()
          .duration(150)
          .style('opacity', 1);
      }
    })
    .on('mousemove', function (event) {
      moveTooltip(event, elem, tooltip);
    })
    .on('mouseout', function () {
      //reset the opacity and move the tooltip out of the way. If we dont move it it will prevent hovering over other boxes.
      d3.select(this)
        // .attr('opacity', '1')
        .attr('transform', 'translate(0, 0)')
        .attr('width', x.bandwidth())
        .attr('height', y.bandwidth());

      tooltip
        .transition()
        .delay(100)
        .duration(150)
        .style('opacity', 0)
    })
    .on('click', function (d) {
      if(linkURL) {
        tooltip.remove();
      }
    });

  ////// LEGEND ////////////
  if (options.showLegend) {
    const legendClass = `legend-${id}`;

    d3
      .select(elem)
      .append('div')
      .attr('class', `matrix-legend-${id}`)
      .append('svg')
      .attr('id', legendClass);

////////////// range - bar //////////////////////
    if (options.legendType === 'range') {
      const svgLegend = d3.select(`#${legendClass}`);
      svgLegend
        // legend bar starts at x=25, legend squares are 10x10, allow 9px per label character
        .attr('width', 25 + (legend.length - 1) * 10 + legend[legend.length - 1].label.length * 9)
        // legend label starts at y=50, allow 16px per label character
        .attr('height', 50 + 16)
        .append('g')
        .selectAll('legendBars')
        .data(legend)
        .enter()
        .append('rect')
        .attr('class', `legend-bar-${id}`)
        .attr('width', 10)
        .attr('height', 10)
        .attr('fill', function (d) {
          return d.color;
        })
        .attr('x', function (d, i) {
          return 25 + i * 10;
        })
        .attr('y', 20);
      svgLegend
        .append('g')
        .selectAll('legendLabels')
        .data(legend)
        .enter()
        .append('text')
        .attr('x', function (d, i) {
          return 20 + i * 10;
        })
        .attr('y', 50)
        .text(function (d, i) {
          if ((i === 0) | (i === legend.length - 1)) {
            return d.label;
          } else {
            return;
          }
        })
        .attr('fill', theme.colors.text.primary);
    } else {
/////////// categorical - circles ////////////////////////////
      const svgLegend = d3.select(`#${legendClass}`);
      svgLegend
        // legend bar starts at x=25, legend circles are drawn every 75px and have a 20px diameter,
        // allow 9px per label character
        .attr('width', 25 + (legend.length - 1) * 75 + 20 + legend[legend.length - 1].label.length * 9)
        // legend label starts at y=50, allow 16px per label character
        .attr('height', 50 + 16)
        .append('g')
        .selectAll('legendCircles')
        .data(legend)
        .enter()
        .append('circle')
        .attr('class', `legend-circle-${id}`)
        .attr('r', 10)
        .attr('fill', function (d) {
          return d.color;
        })
        .attr('cx', function (d, i) {
          return 25 + i * 75;
        })
        .attr('cy', 20);
      svg
        .append('g')
        .selectAll('legendLabels')
        .data(legend)
        .enter()
        .append('text')
        .attr('x', function (d, i) {
          return 15 + i * 75;
        })
        .attr('y', 50)
        .text(function (d) { return d.label })
        .attr('fill', theme.colors.text.primary);
    }
  }
}

function truncateLabel(text, width) {
  text.each(function () {
    let label = d3.select(this).text();
    if (label.length > width) {
      label = label.slice(0, width) + '...';
    }
    d3.select(this).text(label);
  });
}

/** Move tooltip element to where mouse is.
 * @param {event} event A mouse move event
 * @param {SvgInHtml} elem The parent element that houses the matrix diagram
 * @param {Selection} tooltip d3 tooltip div selection
 */
function moveTooltip(event, elem, tooltip) {
  const scrollRect = elem.parentElement.getBoundingClientRect();
  const tooltipRect = tooltip.node().getBoundingClientRect();

  // Distance to place tooltip from mouse
  const mouseDistance = 10;

  const xMin = 0;
  const yMin = 0;
  const xMax = scrollRect.width + elem.parentElement.scrollLeft - tooltipRect.width;
  const yMax = scrollRect.height + elem.parentElement.scrollTop - tooltipRect.height;

  let xPos = 0;
  let yPos = 0;

  if (event.offsetX - mouseDistance >= xMin && event.offsetX + mouseDistance >= xMax) {
    // Draw tooltip left of the mouse
    xPos = Math.max(event.offsetX - tooltipRect.width - mouseDistance, xMin)
  } else {
    // Draw tooltip right of the mouse
    xPos = Math.min(event.offsetX + mouseDistance, xMax);
  }

  if (event.offsetY - mouseDistance >= yMin && event.offsetY + mouseDistance >= yMax) {
    // Draw tooltip above the mouse
    yPos = Math.max(event.offsetY - tooltipRect.height - mouseDistance, yMin)
  } else {
    // Draw tooltip below the mouse
    yPos = Math.min(event.offsetY + mouseDistance, yMax);
  }

  tooltip
    .style('left', `${xPos}px`)
    .style('top', `${yPos}px`)
}

const getStyles = (theme: GrafanaTheme2) => {
  return {
    tooltip: css`
      background-color: ${theme.components.tooltip.background};
      color: ${theme.components.tooltip.text};
      font-family: ${theme.typography.fontFamily};
      font-size: ${theme.typography.size.sm};
      font-weight: ${theme.typography.fontWeightRegular};
      border: 1px solid ${theme.colors.border.weak};
      border-radius: ${theme.shape.radius.default}:
      box-shadow: ${theme.shadows.z3};
      padding: 5px;
      z-index: 500;
      position: absolute;
      width: fit-content;
    `,
    tooltipTable: css`
      display: grid;
      grid-template-columns: max-content 1fr;
      gap: 2px;
      padding: 3px;
    `,
    tooltipTableCell: css`
      display: flex;
      -webkit-box-align: center;
      align-items: center;
    `,
    tooltipTableRowLabel: css`
      color: ${theme.colors.text.secondary};
      margin-right: 16px;
    `,
    tooltipTableRowValue: css`
      font-weight: ${theme.typography.fontWeightMedium};
    `,
  };
};

/**
 *
 * @param {any[]} rowNames Row names
 * @param {any[]} colNames Column names
 * @param {DataMatrixCell[][]} matrix Data for the matrix diagram
 * @param {number} id The panel id
 * @param {MatrixOptions} options Panel configuration
 * @param {LegendData[]} legend Legend data
 * @param {Category[]} column categories
 * @param {Category[]} row categories
 * @return {SvgInHtml} A d3 callback
 */
function matrix(rowNames, colNames, matrix, id, options, legend, colCategories, rowCategories) {
  /* eslint-disable react-hooks/rules-of-hooks */
  const theme = useTheme2();
  const styles = useStyles2(getStyles);
  const ref = useD3((svg) => {
    createViz(svg, id, rowNames, colNames, matrix, options, theme, legend, styles, colCategories, rowCategories);
  });
  return ref;
}

export { matrix };
