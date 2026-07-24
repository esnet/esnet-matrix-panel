import { useD3 } from './useD3.js';
import * as d3 from './d3.min.js';
import { css } from '@emotion/css';
import { GrafanaTheme2, textUtil } from '@grafana/data';
import { useStyles2, useTheme2 } from '@grafana/ui';

// 2.1.1 dropped the sanitize-html dependency in favor of Grafana's built-in
// sanitizer; keep the same local `sanitizeHtml` name so the rest of the file is unchanged.
const sanitizeHtml = textUtil.sanitize;

/** Pick a readable text color (dark ink or white) for a given fill color. */
function contrastText(fill) {
  try {
    let s = String(fill).trim();
    if (s.startsWith('#')) {
      s = s.replace('#', '');
      if (s.length === 3) {
        s = s[0] + s[0] + s[1] + s[1] + s[2] + s[2];
      }
      const r = parseInt(s.slice(0, 2), 16);
      const g = parseInt(s.slice(2, 4), 16);
      const b = parseInt(s.slice(4, 6), 16);
      // relative luminance (sRGB approximation)
      const lum = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
      return lum > 0.6 ? '#0b0b0b' : '#ffffff';
    }
    if (s.startsWith('rgb')) {
      const nums = s.match(/[\d.]+/g);
      if (nums && nums.length >= 3) {
        const lum = (0.299 * +nums[0] + 0.587 * +nums[1] + 0.114 * +nums[2]) / 255;
        return lum > 0.6 ? '#0b0b0b' : '#ffffff';
      }
    }
  } catch (e) {
    // fall through
  }
  return '#ffffff';
}

/** Create the matrix diagram using d3.
 * @param {*} elem The parent svg element that will house this diagram
 * @param {*} id The panel id
 * @param {number} panelWidth The current width of the panel
 * @param {number} panelHeight The current height of the panel
 * @param {*} matrix The data that will populate the diagram
 * @param {GrafanaTheme} theme
 * @param {CSSReturnValue} styles
 */
function createViz(
  elem,
  id,
  panelWidth,
  panelHeight,
  rowNames,
  colNames,
  matrix,
  options,
  theme,
  legend,
  styles,
  colMetadata,
  colCategories,
  rowMetadata,
  rowCategories,
  rowTotals,
  colTotals,
  valueDomain
) {
  const srcText = sanitizeHtml(options.sourceText),
    targetText = sanitizeHtml(options.targetText),
    valText = sanitizeHtml(options.valueText),
    cellPadding = options.cellPadding / 100, // convert the cellPadding integer to a float that can be used by d3
    cornerRadius = options.cellCornerRadius != null ? options.cellCornerRadius : 2,
    txtLength = options.txtLength,
    txtSize = options.txtSize / 10, //convert this val to EM scaling 90 = .9em 100 = 1em ... etc
    linkURL = options.url,
    urlVar1 = options.urlVar1,
    urlVar2 = options.urlVar2,
    nullColor = theme.visualization.getColorByName(options.nullColor),
    defaultColor = theme.visualization.getColorByName(options.defaultColor),
    distinctNoData = options.distinctNoData !== false,
    highlightRowCol = options.highlightRowCol !== false,
    showCellValues = options.showCellValues !== false,
    showGroupDividers = options.showGroupDividers !== false,
    sizeEncodesValue = !!options.sizeEncodesValue,
    showMarginalTotals = !!options.showMarginalTotals,
    freezeLabels = options.freezeLabels !== false;

  // neutral theme tokens used for chrome
  const noDataStroke = theme.colors.border.weak;
  const bandFill = theme.colors.background.secondary;

  // value-threshold focus
  const focusEnabled = !!options.focusEnabled;
  const focusMode = options.focusMode || 'dim';
  const focusMin = typeof options.focusMin === 'number' ? options.focusMin : null;
  const focusMax = typeof options.focusMax === 'number' ? options.focusMax : null;
  function inFocus(d) {
    if (!focusEnabled) {
      return true;
    }
    if (d === -1 || d.isNull || typeof d.val !== 'number') {
      return false;
    }
    if (focusMin !== null && d.val < focusMin) {
      return false;
    }
    if (focusMax !== null && d.val > focusMax) {
      return false;
    }
    return true;
  }
  function baseOpacity(d) {
    return focusEnabled && !inFocus(d) && focusMode === 'dim' ? 0.15 : 1;
  }
  function isHidden(d) {
    return focusEnabled && focusMode === 'hide' && !inFocus(d);
  }

  // ---- cross-highlight, pin, tooltip & keyboard infrastructure ----
  // (function declarations are hoisted; they reference rectArea/xAxisGroup/etc.
  // which are assigned later but only ever called at event time.)
  let pinned = null; // { r, c } where either may be null for a row-only / column-only pin
  const rcMap = new Map(); // 'r:c' -> rect node, built after cells render

  function applyHighlight(r, c) {
    rectArea.selectAll('rect.matrix-cell').style('opacity', function (cd) {
      const rr = +this.getAttribute('data-r');
      const cc = +this.getAttribute('data-c');
      const on = (r !== null && rr === r) || (c !== null && cc === c);
      return on ? baseOpacity(cd) : 0.2;
    });
    svg.selectAll('.cell-value').style('opacity', function () {
      const rr = +this.getAttribute('data-r');
      const cc = +this.getAttribute('data-c');
      return (r !== null && rr === r) || (c !== null && cc === c) ? 1 : 0.12;
    });
    xAxisGroup.selectAll('text').attr('font-weight', function () {
      return c !== null && +this.getAttribute('data-c') === c ? 'bold' : null;
    });
    yAxisGroup.selectAll('text').attr('font-weight', function () {
      return r !== null && +this.getAttribute('data-r') === r ? 'bold' : null;
    });
  }
  function clearHighlight() {
    if (pinned) {
      applyHighlight(pinned.r, pinned.c);
      return;
    }
    rectArea.selectAll('rect.matrix-cell').style('opacity', function (cd) {
      return baseOpacity(cd);
    });
    svg.selectAll('.cell-value').style('opacity', 1);
    xAxisGroup.selectAll('text').attr('font-weight', null);
    yAxisGroup.selectAll('text').attr('font-weight', null);
  }
  function togglePin(r, c) {
    if (pinned && pinned.r === r && pinned.c === c) {
      pinned = null;
      clearHighlight();
    } else {
      pinned = { r, c };
      applyHighlight(r, c);
    }
  }
  // highlight cells whose value is within `band` of `target` (interactive legend)
  function highlightByValue(target, band) {
    rectArea.selectAll('rect.matrix-cell').style('opacity', function (cd) {
      const on = cd !== -1 && !cd.isNull && typeof cd.val === 'number' && Math.abs(cd.val - target) <= band;
      return on ? 1 : 0.15;
    });
  }
  // highlight only null cells (wantNull=true) or only no-data cells (wantNull=false)
  function highlightByState(wantNull) {
    rectArea.selectAll('rect.matrix-cell').style('opacity', function (cd) {
      const on = wantNull ? cd !== -1 && cd.isNull : cd === -1;
      return on ? 1 : 0.15;
    });
  }

  function cellTooltipHtml(d) {
    const thisRow = sanitizeHtml(d.row);
    const thisColumn = sanitizeHtml(d.col);
    const thisText = sanitizeHtml(d.isNull ? 'null' : d.display.text);
    const thisSuffix = sanitizeHtml(d.isNull ? '' : d.display.suffix);
    return `<div class="${styles.tooltipValue}">${thisText} ${thisSuffix ? thisSuffix : ''}</div>
<div class="${styles.tooltipTable}">
  <div class="${styles.tooltipTableCell}"><div class="${styles.tooltipTableRowLabel}">${srcText}</div></div>
  <div class="${styles.tooltipTableCell}"><div class="${styles.tooltipTableRowValue}">${thisRow}</div></div>
  <div class="${styles.tooltipTableCell}"><div class="${styles.tooltipTableRowLabel}">${targetText}</div></div>
  <div class="${styles.tooltipTableCell}"><div class="${styles.tooltipTableRowValue}">${thisColumn}</div></div>
  <div class="${styles.tooltipTableCell}"><div class="${styles.tooltipTableRowLabel}">${valText}</div></div>
  <div class="${styles.tooltipTableCell}"><div class="${styles.tooltipTableRowValue}">${thisText} ${thisSuffix ? thisSuffix : ''}</div></div>
</div>`;
  }
  // shared activation used by both hover and keyboard focus
  function activateCell(node, d) {
    if (d === -1) {
      return;
    }
    d3.select(node).raise().attr('stroke', theme.colors.text.primary).attr('stroke-width', 2);
    if (highlightRowCol) {
      applyHighlight(+node.getAttribute('data-r'), +node.getAttribute('data-c'));
    }
    tooltip
      .html(() => cellTooltipHtml(d))
      .transition()
      .duration(150)
      .style('opacity', 1);
  }
  function deactivateCell(node, d) {
    d3.select(node).attr('stroke', cellStroke(d)).attr('stroke-width', cellStrokeWidth(d));
    if (highlightRowCol) {
      clearHighlight();
    }
    tooltip.transition().delay(100).duration(150).style('opacity', 0);
  }
  function positionTooltipAtCell(node) {
    try {
      const cr = node.getBoundingClientRect();
      const er = elem.getBoundingClientRect();
      const sx = elem.parentElement ? elem.parentElement.scrollLeft : 0;
      const sy = elem.parentElement ? elem.parentElement.scrollTop : 0;
      moveTooltip(
        { offsetX: cr.left - er.left + sx + cr.width / 2, offsetY: cr.top - er.top + sy + cr.height / 2 },
        elem,
        tooltip
      );
    } catch (e) {
      /* no-op */
    }
  }
  function cellNodeAt(r, c) {
    return rcMap.get(r + ':' + c) || null;
  }
  function handleCellKeydown(event, node) {
    let r = +node.getAttribute('data-r');
    let c = +node.getAttribute('data-c');
    const key = event.key;
    let moved = true;
    if (key === 'ArrowRight') {
      c++;
    } else if (key === 'ArrowLeft') {
      c--;
    } else if (key === 'ArrowDown') {
      r++;
    } else if (key === 'ArrowUp') {
      r--;
    } else if (key === 'Enter' || key === ' ') {
      if (!linkURL) {
        togglePin(r, c);
      }
      moved = false;
    } else if (key === 'Escape') {
      pinned = null;
      clearHighlight();
      moved = false;
    } else {
      return;
    }
    event.preventDefault();
    if (!moved) {
      return;
    }
    const target = cellNodeAt(r, c);
    if (target && target !== node) {
      node.setAttribute('tabindex', '-1');
      target.setAttribute('tabindex', '0');
      target.focus();
    }
  }

  // do a bit of work to setup the visual layout of the wiget --------
  // Bail if the element isn't mounted (e.g. the panel is showing an empty/table
  // state) or the data isn't a real matrix. The render hook is always called for
  // stable React hook order, so createViz may run before there's anything to draw.
  if (!elem || !Array.isArray(rowNames) || !Array.isArray(colNames) || !Array.isArray(matrix) || rowNames.length === 0 || colNames.length === 0) {
    return;
  }

  // find the length of the longest name. this will inform the margin and name truncation
  var longestColName = colNames.reduce((a, b) => {
    return a.length > b.length ? a : b;
  });
  var longestRowName = rowNames.reduce((a, b) => {
    return a.length > b.length ? a : b;
  });

  // txtLength is passed in. but names may be much smaller than this value.
  // since this informs the margin we want to set it to whichever is longer
  // this prevents a huge white space if txtlength is considerably bigger
  // than the longest name. add 3 characters to account for ellipsis (...)
  const maxColTxtLength = longestColName.length < txtLength ? longestColName.length : txtLength + 3;
  const maxRowTxtLength = longestRowName.length < txtLength ? longestRowName.length : txtLength + 3;

  // Measure the ACTUAL rendered width of the longest label (labels are first
  // capped to `txtLength` characters, then the margin is sized to fit that width).
  // Rotated x-axis labels contribute their width to the TOP margin. This replaces
  // the old character-count estimate, which underestimated proportional-font width
  // and caused labels to be truncated to only a few characters.
  const labelPad = 24; // breathing room beyond the measured text
  const measuredColW = measureMaxLabelWidth(elem, colNames, txtSize, theme.typography.fontFamily, txtLength);
  const measuredRowW = measureMaxLabelWidth(elem, rowNames, txtSize, theme.typography.fontFamily, txtLength);
  // fall back to a character-count estimate (8px/char/em) if measurement is unavailable
  const colFallback = maxColTxtLength * txtSize * 8;
  const rowFallback = maxRowTxtLength * txtSize * 8;
  const effColW = measuredColW > 0 ? measuredColW : colFallback;
  const effRowW = measuredRowW > 0 ? measuredRowW : rowFallback;
  // Column label orientation: horizontal (short labels) vs rotated -90 (long labels).
  // The auto decision needs the final cell width, so it is finalized after cellSize
  // is computed below; here we assume rotated (the larger top margin) so fit-sizing
  // stays conservative.
  const labelOrientation = options.labelOrientation || 'auto';
  const colLineHeight = Math.ceil(txtSize * 18) + 12;
  let colHorizontal = labelOrientation === 'horizontal';
  var colTxtOffset = (colHorizontal ? colLineHeight : effColW) + labelPad;
  var rowTxtOffset = effRowW + labelPad;

  // Category header configuration
  const colGrouping = options.enableColGrouping && colCategories && colCategories.length > 0;
  const rowGrouping = options.enableRowGrouping && rowCategories && rowCategories.length > 0;

  const colCategoryHeaderHeight = colGrouping
    ? (options.colCategoryHeaderHeight !== undefined ? options.colCategoryHeaderHeight : 40)
    : 0;
  const colCategoryGap = colGrouping
    ? (options.colCategoryGap !== undefined ? options.colCategoryGap : 4)
    : 0;
  const rowCategoryHeaderWidth = rowGrouping
    ? (options.rowCategoryHeaderWidth !== undefined ? options.rowCategoryHeaderWidth : 100)
    : 0;
  const rowCategoryGap = rowGrouping
    ? (options.rowCategoryGap !== undefined ? options.rowCategoryGap : 4)
    : 0;

  // marginal total bands (extra space reserved on the right/bottom)
  const marginalBand = showMarginalTotals ? 48 : 0;

  // ---- Determine cell size (fixed px, or fit-to-panel) ----
  const nCols = colNames.length;
  const nRows = rowNames.length;
  const colGapTotal = colGrouping ? (colCategories.length - 1) * colCategoryGap : 0;
  const rowGapTotal = rowGrouping ? (rowCategories.length - 1) * rowCategoryGap : 0;

  let cellSize = options.cellSize;
  if (options.sizeMode === 'fit' && panelWidth > 0 && panelHeight > 0) {
    const marginLeftEst = rowTxtOffset + rowCategoryHeaderWidth;
    const marginTopEst = colTxtOffset + colCategoryHeaderHeight;
    const legendReserve = options.showLegend ? 64 : 0;
    const availW = panelWidth - marginLeftEst - marginalBand - colGapTotal - 4;
    const availH = panelHeight - marginTopEst - marginalBand - rowGapTotal - legendReserve - 4;
    const fitW = availW / nCols;
    const fitH = availH / nRows;
    let fit = Math.floor(Math.min(fitW, fitH));
    if (!isFinite(fit) || fit < 4) {
      fit = 4;
    }
    if (fit > 80) {
      fit = 80;
    }
    cellSize = fit;
  }

  // Finalize column-label orientation now that the real cell width is known.
  // Auto: horizontal when the longest label fits inside a cell; otherwise rotate.
  if (labelOrientation === 'auto') {
    colHorizontal = effColW <= cellSize - 4;
  } else {
    colHorizontal = labelOrientation === 'horizontal';
  }
  colTxtOffset = (colHorizontal ? colLineHeight : effColW) + labelPad;

  const bandwidth = cellSize * (1 - cellPadding);
  // per-cell offset so the padded cell is centered in its slot
  const cellInset = (cellSize - bandwidth) / 2;

  // Calculate column positions with gaps between colCategories
  let columnPositions = [];
  let totalWidth = 0;

  if (colGrouping) {
    colCategories.forEach((category, catIndex) => {
      const numCols = category.columns.length;
      const groupWidth = numCols * cellSize;
      category.columns.forEach((colName, indexInCat) => {
        columnPositions.push({
          name: colName,
          x: totalWidth + indexInCat * cellSize,
          width: cellSize,
          category: category.name,
          categoryIndex: catIndex,
        });
      });
      totalWidth += groupWidth;
      if (catIndex < colCategories.length - 1) {
        totalWidth += colCategoryGap;
      }
    });
  } else {
    colNames.forEach((colName, idx) => {
      columnPositions.push({ name: colName, x: idx * cellSize, width: cellSize, category: '', categoryIndex: 0 });
    });
    totalWidth = colNames.length * cellSize;
  }

  // Calculate row positions with gaps between rowCategories
  let rowPositions = [];
  let totalHeight = 0;

  if (rowGrouping) {
    rowCategories.forEach((category, catIndex) => {
      const numRows = category.rows.length;
      const groupHeight = numRows * cellSize;
      category.rows.forEach((rowName, indexInCat) => {
        rowPositions.push({
          name: rowName,
          y: totalHeight + indexInCat * cellSize,
          height: cellSize,
          category: category.name,
          categoryIndex: catIndex,
        });
      });
      totalHeight += groupHeight;
      if (catIndex < rowCategories.length - 1) {
        totalHeight += rowCategoryGap;
      }
    });
  } else {
    rowNames.forEach((rowName, idx) => {
      rowPositions.push({ name: rowName, y: idx * cellSize, height: cellSize, category: '', categoryIndex: 0 });
    });
    totalHeight = rowNames.length * cellSize;
  }

  // set the dimensions and margins of the graph
  var margin = {
      top: colTxtOffset + colCategoryHeaderHeight,
      right: marginalBand,
      bottom: marginalBand,
      left: rowTxtOffset + rowCategoryHeaderWidth,
    },
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
  var svgClass = `svg-${id}`;
  var svg = d3
    .select(elem)
    .append('svg')
    .attr('id', svgClass)
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

  // index-based scales to support duplicate names across categories
  var x = function (colIndex) {
    return columnPositions[colIndex] ? columnPositions[colIndex].x : 0;
  };
  var y = function (rowIndex) {
    return rowPositions[rowIndex] ? rowPositions[rowIndex].y : 0;
  };

  // ---- Category group background bands (drawn first, behind everything) ----
  if (showGroupDividers && (colGrouping || rowGrouping)) {
    const bandGroup = svg.append('g').attr('class', `group-bands-${id}`).lower();
    if (colGrouping) {
      colCategories.forEach((category, catIndex) => {
        if (catIndex % 2 === 1) {
          const startPos = columnPositions[category.startIndex];
          const endPos = columnPositions[category.endIndex];
          if (startPos && endPos) {
            bandGroup
              .append('rect')
              .attr('x', startPos.x - cellInset)
              .attr('y', -cellInset)
              .attr('width', endPos.x + cellSize - startPos.x)
              .attr('height', height + cellInset)
              .attr('fill', bandFill)
              .attr('opacity', 0.5);
          }
        }
      });
    }
    if (rowGrouping) {
      rowCategories.forEach((category, catIndex) => {
        if (catIndex % 2 === 1) {
          const startPos = rowPositions[category.startIndex];
          const endPos = rowPositions[category.endIndex];
          if (startPos && endPos) {
            bandGroup
              .append('rect')
              .attr('x', -cellInset)
              .attr('y', startPos.y - cellInset)
              .attr('width', width + cellInset)
              .attr('height', endPos.y + cellSize - startPos.y)
              .attr('fill', bandFill)
              .attr('opacity', 0.5);
          }
        }
      });
    }
  }

  // ---- X axis labels (rotated -90 by default; horizontal when they fit) ----
  var xAxisGroup = svg.append('g').attr('class', 'x-axis');
  columnPositions.forEach((pos, idx) => {
    let label;
    if (colHorizontal) {
      label = xAxisGroup
        .append('text')
        .attr('data-c', idx)
        .attr('x', pos.x + cellSize / 2)
        .attr('y', -8)
        .attr('text-anchor', 'middle')
        .attr('font-size', txtSize + 'em')
        .style('font-family', theme.typography.fontFamily)
        .attr('fill', theme.colors.text.primary)
        .text(pos.name);
      label.call(truncateToPixels, cellSize - 2);
    } else {
      label = xAxisGroup
        .append('text')
        .attr('data-c', idx)
        .attr('transform', `translate(${pos.x + cellSize / 2},-12)rotate(-90)`)
        .attr('text-anchor', 'start')
        .attr('font-size', txtSize + 'em')
        .style('font-family', theme.typography.fontFamily)
        .attr('fill', theme.colors.text.primary)
        .text(pos.name);
      label.call(truncateToPixels, colTxtOffset - 16);
    }
    if (highlightRowCol) {
      label.style('cursor', 'pointer');
    }
    label
      .on('mouseover', function () {
        tooltip.html(sanitizeHtml(pos.name)).transition().duration(150).style('opacity', 1);
      })
      .on('mousemove', function (event) {
        moveTooltip(event, elem, tooltip);
      })
      .on('mouseout', function () {
        tooltip.transition().delay(100).duration(150).style('opacity', 0);
      })
      .on('click', function () {
        if (highlightRowCol) {
          togglePin(null, idx);
        }
      });
  });

  // ---- Y axis labels ----
  var yAxisGroup = svg.append('g').attr('class', 'y-axis');
  rowPositions.forEach((pos, idx) => {
    const label = yAxisGroup
      .append('text')
      .attr('data-r', idx)
      .attr('x', -10)
      .attr('y', pos.y + cellSize / 2)
      .attr('text-anchor', 'end')
      .attr('dominant-baseline', 'middle')
      .attr('font-size', txtSize + 'em')
      .style('font-family', theme.typography.fontFamily)
      .attr('fill', theme.colors.text.primary)
      .text(pos.name);

    label.call(truncateToPixels, rowTxtOffset - 16);
    if (highlightRowCol) {
      label.style('cursor', 'pointer');
    }
    label
      .on('mouseover', function () {
        tooltip.html(sanitizeHtml(pos.name)).transition().duration(150).style('opacity', 1);
      })
      .on('mousemove', function (event) {
        moveTooltip(event, elem, tooltip);
      })
      .on('mouseout', function () {
        tooltip.transition().delay(100).duration(150).style('opacity', 0);
      })
      .on('click', function () {
        if (highlightRowCol) {
          togglePin(idx, null);
        }
      });
  });

  // ---- Column category headers ----
  let colHeaderGroup = null;
  if (colGrouping) {
    colHeaderGroup = svg
      .append('g')
      .attr('class', `category-headers-${id}`)
      .attr('transform', `translate(0, ${-colTxtOffset - colCategoryHeaderHeight})`);

    colCategories.forEach((category) => {
      const startPos = columnPositions[category.startIndex];
      const endPos = columnPositions[category.endIndex];
      if (startPos && endPos) {
        const groupX = startPos.x;
        colHeaderGroup
          .append('text')
          .attr('transform', `translate(${groupX + cellSize / 2}, ${colCategoryHeaderHeight - 12})rotate(-90)`)
          .attr('text-anchor', 'start')
          .attr('font-size', txtSize * 1.2 + 'em')
          .attr('font-weight', 'bold')
          .attr('fill', theme.colors.text.primary)
          .style('font-family', theme.typography.fontFamily)
          .text(category.name)
          .call(truncateToPixels, colCategoryHeaderHeight - 12)
          .on('mouseover', function () {
            tooltip.html(sanitizeHtml(category.name)).transition().duration(150).style('opacity', 1);
          })
          .on('mousemove', function (event) {
            moveTooltip(event, elem, tooltip);
          })
          .on('mouseout', function () {
            tooltip.transition().delay(100).duration(150).style('opacity', 0);
          });
      }
    });
  }

  // ---- Row category headers ----
  let rowHeaderGroup = null;
  if (rowGrouping) {
    rowHeaderGroup = svg
      .append('g')
      .attr('class', `row-category-headers-${id}`)
      .attr('transform', `translate(${-rowTxtOffset - rowCategoryHeaderWidth}, 0)`);

    rowCategories.forEach((category) => {
      const startPos = rowPositions[category.startIndex];
      if (startPos) {
        const groupY = startPos.y;
        rowHeaderGroup
          .append('text')
          .attr('x', rowCategoryHeaderWidth - 5)
          .attr('y', groupY + cellSize / 2)
          .attr('text-anchor', 'end')
          .attr('dominant-baseline', 'middle')
          .attr('font-size', txtSize * 1.2 + 'em')
          .attr('font-weight', 'bold')
          .attr('fill', theme.colors.text.primary)
          .style('font-family', theme.typography.fontFamily)
          .text(category.name)
          .call(truncateToPixels, rowCategoryHeaderWidth - 8)
          .on('mouseover', function () {
            tooltip.html(sanitizeHtml(category.name)).transition().duration(150).style('opacity', 1);
          })
          .on('mousemove', function (event) {
            moveTooltip(event, elem, tooltip);
          })
          .on('mouseout', function () {
            tooltip.transition().delay(100).duration(150).style('opacity', 0);
          });
      }
    });
  }

  // ---- helpers for cell appearance (used at creation + hover restore) ----
  function cellFill(d) {
    if (d === -1) {
      return distinctNoData ? 'none' : defaultColor;
    }
    return d.color || defaultColor;
  }
  function cellStroke(d) {
    if (d === -1 && distinctNoData) {
      return noDataStroke;
    }
    return 'none';
  }
  function cellStrokeWidth(d) {
    return d === -1 && distinctNoData ? 1 : 0;
  }
  // area-proportional side length within the slot when size encoding is on
  function encodedSide(d) {
    if (!sizeEncodesValue || d === -1 || d.val == null || !valueDomain) {
      return bandwidth;
    }
    const span = valueDomain.max - valueDomain.min || 1;
    let norm = (d.val - valueDomain.min) / span;
    norm = Math.max(0.05, Math.min(1, norm));
    return bandwidth * Math.sqrt(norm);
  }

  // ---- the matrix cells ----
  var outer = d3.local();
  var svg_g = d3.select('#' + svgClass).selectAll('svg > g');
  const rectClass = `rectArea-${id}`;
  var rectArea = svg_g.append('g').attr('class', rectClass);

  var rows = rectArea.selectAll('g').data(matrix).enter().append('g').attr('class', 'row');

  var rects = rows
    .selectAll('rect')
    .data(function (d, i) {
      outer.set(this, i);
      return d;
    })
    .enter()
    .append('a')
    .attr('xlink:href', (d) => {
      if (linkURL) {
        var thisURL = linkURL;
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
    .attr('class', 'matrix-cell')
    .attr('data-c', function (d, i) {
      return i;
    })
    .attr('data-r', function () {
      return outer.get(this);
    })
    .attr('rx', cornerRadius)
    .attr('ry', cornerRadius)
    .attr('x', function (d, i) {
      const side = encodedSide(d);
      return x(i) + cellInset + (bandwidth - side) / 2;
    })
    .attr('y', function (d) {
      const side = encodedSide(d);
      return y(outer.get(this)) + cellInset + (bandwidth - side) / 2;
    })
    .attr('width', function (d) {
      return encodedSide(d);
    })
    .attr('height', function (d) {
      return encodedSide(d);
    })
    .attr('fill', cellFill)
    .attr('stroke', cellStroke)
    .attr('stroke-width', cellStrokeWidth)
    .style('opacity', baseOpacity)
    .style('display', function (d) {
      return isHidden(d) ? 'none' : null;
    })
    .attr('role', 'gridcell')
    .attr('tabindex', -1)
    .on('mouseover', function (event, d) {
      activateCell(this, d);
    })
    .on('mousemove', function (event) {
      moveTooltip(event, elem, tooltip);
    })
    .on('mouseout', function (event, d) {
      deactivateCell(this, d);
    })
    .on('focus', function (event, d) {
      activateCell(this, d);
      positionTooltipAtCell(this);
    })
    .on('blur', function (event, d) {
      deactivateCell(this, d);
    })
    .on('keydown', function (event) {
      handleCellKeydown(event, this);
    })
    .on('click', function (event, d) {
      if (linkURL) {
        tooltip.remove();
      } else if (d !== -1 && highlightRowCol) {
        togglePin(+this.getAttribute('data-r'), +this.getAttribute('data-c'));
      }
    });

  // ---- accessibility: build the r:c lookup, per-cell aria-labels, roving tabindex ----
  rectArea.selectAll('rect.matrix-cell').each(function () {
    const rr = this.getAttribute('data-r');
    const cc = this.getAttribute('data-c');
    rcMap.set(rr + ':' + cc, this);
    const rowName = rowNames[+rr];
    const colName = colNames[+cc];
    const d = matrix[+rr][+cc];
    let valStr;
    if (d === -1) {
      valStr = 'no data';
    } else if (d.isNull) {
      valStr = 'null';
    } else {
      valStr = `${d.display.text}${d.display.suffix ? ' ' + d.display.suffix : ''}`;
    }
    this.setAttribute('aria-label', `${srcText} ${rowName}, ${targetText} ${colName}, ${valText} ${valStr}`);
  });
  // make the first visible cell keyboard-reachable (roving tabindex entry point)
  const firstCell = rcMap.get('0:0') || rectArea.select('rect.matrix-cell').node();
  if (firstCell) {
    firstCell.setAttribute('tabindex', '0');
  }
  // label the grid for screen readers
  d3.select('#' + svgClass)
    .attr('role', 'img')
    .attr('aria-label', `Matrix of ${rowNames.length} rows by ${colNames.length} columns`);
  rectArea.attr('role', 'grid');
  rows.attr('role', 'row');

  // ---- In-cell value labels (only when they fit) ----
  if (showCellValues) {
    const labelGroup = svg.append('g').attr('class', `cell-values-${id}`).style('pointer-events', 'none');
    const labelFontPx = Math.min(bandwidth * 0.42, 13);
    if (labelFontPx >= 7) {
      for (let r = 0; r < matrix.length; r++) {
        for (let c = 0; c < matrix[r].length; c++) {
          const d = matrix[r][c];
          if (d === -1 || d.isNull || d.val == null) {
            continue;
          }
          // declutter: no label on cells outside the focused range
          if (focusEnabled && !inFocus(d)) {
            continue;
          }
          const text = d.display && d.display.text != null ? String(d.display.text) : String(d.val);
          // estimate rendered width; skip if it won't fit with padding
          const estWidth = text.length * labelFontPx * 0.6;
          if (estWidth > bandwidth - 4) {
            continue;
          }
          labelGroup
            .append('text')
            .attr('class', 'cell-value')
            .attr('data-r', r)
            .attr('data-c', c)
            .attr('x', x(c) + cellSize / 2)
            .attr('y', y(r) + cellSize / 2)
            .attr('text-anchor', 'middle')
            .attr('dominant-baseline', 'central')
            .attr('font-size', `${labelFontPx}px`)
            .style('font-family', theme.typography.fontFamily)
            .attr('fill', contrastText(d.color))
            .text(text);
        }
      }
    }
  }

  // ---- Marginal total bars (row sums on the right, column sums on the bottom) ----
  if (showMarginalTotals) {
    const barColor = theme.colors.text.secondary;
    const maxRowTotal = Math.max(1, ...rowTotals.map((v) => Math.abs(v)));
    const maxColTotal = Math.max(1, ...colTotals.map((v) => Math.abs(v)));
    const marginalGroup = svg.append('g').attr('class', `marginal-totals-${id}`).style('pointer-events', 'none');

    // row totals -> horizontal bars just right of the grid
    rowPositions.forEach((pos, i) => {
      const len = (Math.abs(rowTotals[i]) / maxRowTotal) * (marginalBand - 8);
      marginalGroup
        .append('rect')
        .attr('x', width + 4)
        .attr('y', pos.y + cellInset)
        .attr('width', Math.max(0, len))
        .attr('height', bandwidth)
        .attr('rx', Math.min(cornerRadius, 3))
        .attr('fill', barColor)
        .attr('opacity', 0.55);
    });

    // column totals -> vertical bars just below the grid
    columnPositions.forEach((pos, j) => {
      const len = (Math.abs(colTotals[j]) / maxColTotal) * (marginalBand - 8);
      marginalGroup
        .append('rect')
        .attr('x', pos.x + cellInset)
        .attr('y', height + 4)
        .attr('width', bandwidth)
        .attr('height', Math.max(0, len))
        .attr('rx', Math.min(cornerRadius, 3))
        .attr('fill', barColor)
        .attr('opacity', 0.55);
    });
  }

  // ---- Freeze axis labels: counter-translate label groups on scroll ----
  if (freezeLabels) {
    const scroller = elem.parentElement;
    if (scroller) {
      const colHeaderBaseY = -colTxtOffset - colCategoryHeaderHeight;
      const rowHeaderBaseX = -rowTxtOffset - rowCategoryHeaderWidth;
      const onScroll = () => {
        const sx = scroller.scrollLeft;
        const sy = scroller.scrollTop;
        xAxisGroup.attr('transform', `translate(0, ${sy})`);
        yAxisGroup.attr('transform', `translate(${sx}, 0)`);
        if (colHeaderGroup) {
          colHeaderGroup.attr('transform', `translate(0, ${colHeaderBaseY + sy})`);
        }
        if (rowHeaderGroup) {
          rowHeaderGroup.attr('transform', `translate(${rowHeaderBaseX + sx}, 0)`);
        }
      };
      // avoid stacking listeners across re-renders
      if (scroller.__matrixScrollHandler) {
        scroller.removeEventListener('scroll', scroller.__matrixScrollHandler);
      }
      scroller.__matrixScrollHandler = onScroll;
      scroller.addEventListener('scroll', onScroll, { passive: true });
    }
  }

  ////// LEGEND ////////////
  if (options.showLegend) {
    var legendClass = `legend-${id}`;

    // Detect which special-cell states are present so we can key them below.
    let hasNull = false;
    let hasNoData = false;
    for (let r = 0; r < matrix.length && !(hasNull && hasNoData); r++) {
      for (let c = 0; c < matrix[r].length; c++) {
        const cd = matrix[r][c];
        if (cd === -1) {
          hasNoData = true;
        } else if (cd.isNull) {
          hasNull = true;
        }
      }
    }

    // Append a "null" / "no data" key under the color scale, starting at yStart.
    // Returns the y after the last key row.
    function appendStateKeys(lsvgSel, xStart, yStart) {
      let ky = yStart;
      const rowStep = 18;
      const swatch = 12;
      const addRow = (fill, stroke, label, wantNull) => {
        const krect = lsvgSel
          .append('rect')
          .attr('x', xStart)
          .attr('y', ky)
          .attr('width', swatch)
          .attr('height', swatch)
          .attr('rx', Math.min(cornerRadius, 3))
          .attr('fill', fill)
          .attr('stroke', stroke)
          .attr('stroke-width', stroke === 'none' ? 0 : 1)
          .style('cursor', 'pointer')
          .on('mouseover', function () {
            highlightByState(wantNull);
          })
          .on('mouseout', function () {
            clearHighlight();
          });
        lsvgSel
          .append('text')
          .attr('x', xStart + swatch + 6)
          .attr('y', ky + swatch - 2)
          .attr('font-size', '11px')
          .style('font-family', theme.typography.fontFamily)
          .attr('fill', theme.colors.text.secondary)
          .text(label);
        void krect;
        ky += rowStep;
      };
      if (hasNull) {
        addRow(nullColor, 'none', 'null', true);
      }
      if (hasNoData) {
        addRow(distinctNoData ? 'none' : defaultColor, distinctNoData ? noDataStroke : 'none', 'no data', false);
      }
      return ky;
    }

    // value tolerance band for interactive legend highlighting
    const legendBand = valueDomain ? (valueDomain.max - valueDomain.min) * 0.06 || 1 : 1;

    var div = d3.select(elem).append('div').attr('class', `matrix-legend-${id}`).append('svg').attr('id', legendClass);
    const colorMode = options.colorMode || 'sequential';
    const useGradient = colorMode === 'sequential' || colorMode === 'diverging';

    ////////////// range - continuous or discrete //////////////////////
    if (options.legendType == 'range') {
      var lsvg = d3.select(`#${legendClass}`);
      const barX = 4;
      const barY = 20;
      const barH = 12;
      const nSteps = legend.length;
      const barW = useGradient ? 200 : Math.max(nSteps * 14, 160);

      // title
      lsvg
        .append('text')
        .attr('x', barX)
        .attr('y', 12)
        .attr('font-size', '11px')
        .attr('fill', theme.colors.text.secondary)
        .style('font-family', theme.typography.fontFamily)
        .text(valText);

      if (useGradient) {
        // smooth gradient bar built from the sampled ramp colors
        const gradId = `matrix-grad-${id}`;
        const defs = lsvg.append('defs');
        const grad = defs
          .append('linearGradient')
          .attr('id', gradId)
          .attr('x1', '0%')
          .attr('x2', '100%')
          .attr('y1', '0%')
          .attr('y2', '0%');
        legend.forEach((d, i) => {
          grad
            .append('stop')
            .attr('offset', `${(i / (nSteps - 1)) * 100}%`)
            .attr('stop-color', d.color);
        });
        lsvg
          .append('rect')
          .attr('x', barX)
          .attr('y', barY)
          .attr('width', barW)
          .attr('height', barH)
          .attr('rx', 2)
          .attr('fill', `url(#${gradId})`)
          .attr('stroke', theme.colors.border.weak)
          .attr('stroke-width', 1)
          .style('cursor', valueDomain ? 'crosshair' : null)
          .on('mousemove', function (event) {
            if (!valueDomain) {
              return;
            }
            const mx = Math.max(0, Math.min(barW, event.offsetX - barX));
            const target = valueDomain.min + (mx / barW) * (valueDomain.max - valueDomain.min);
            highlightByValue(target, legendBand);
          })
          .on('mouseout', function () {
            clearHighlight();
          });

        // min / max labels
        lsvg
          .append('text')
          .attr('x', barX)
          .attr('y', barY + barH + 14)
          .attr('text-anchor', 'start')
          .attr('font-size', '11px')
          .style('font-family', theme.typography.fontFamily)
          .attr('fill', theme.colors.text.primary)
          .text(legend[0].label);
        lsvg
          .append('text')
          .attr('x', barX + barW)
          .attr('y', barY + barH + 14)
          .attr('text-anchor', 'end')
          .attr('font-size', '11px')
          .style('font-family', theme.typography.fontFamily)
          .attr('fill', theme.colors.text.primary)
          .text(legend[nSteps - 1].label);

        // diverging midpoint tick
        if (colorMode === 'diverging' && valueDomain && valueDomain.max !== valueDomain.min) {
          const mid = typeof options.divergingMidpoint === 'number' ? options.divergingMidpoint : 0;
          const frac = (mid - valueDomain.min) / (valueDomain.max - valueDomain.min);
          if (frac > 0.02 && frac < 0.98) {
            const tx = barX + frac * barW;
            lsvg
              .append('line')
              .attr('x1', tx)
              .attr('x2', tx)
              .attr('y1', barY - 2)
              .attr('y2', barY + barH + 2)
              .attr('stroke', theme.colors.text.primary)
              .attr('stroke-width', 1);
            lsvg
              .append('text')
              .attr('x', tx)
              .attr('y', barY + barH + 14)
              .attr('text-anchor', 'middle')
              .attr('font-size', '11px')
              .style('font-family', theme.typography.fontFamily)
              .attr('fill', theme.colors.text.primary)
              .text(String(mid));
          }
        }
      } else {
        // discrete swatches (standard / thresholds mode)
        const swatchW = barW / nSteps;
        lsvg
          .append('g')
          .selectAll('legendBars')
          .data(legend)
          .enter()
          .append('rect')
          .attr('class', `legend-bar-${id}`)
          .attr('width', swatchW)
          .attr('height', barH)
          .attr('fill', function (d) {
            return d.color;
          })
          .attr('x', function (d, i) {
            return barX + i * swatchW;
          })
          .attr('y', barY)
          .style('cursor', 'pointer')
          .on('mouseover', function (event, d) {
            if (d.value != null) {
              highlightByValue(d.value, legendBand);
            }
          })
          .on('mouseout', function () {
            clearHighlight();
          });
        const tickIdx = [0, Math.floor((nSteps - 1) / 2), nSteps - 1].filter((v, i, arr) => arr.indexOf(v) === i);
        lsvg
          .append('g')
          .selectAll('legendLabels')
          .data(tickIdx)
          .enter()
          .append('text')
          .attr('x', function (i) {
            return barX + i * swatchW + swatchW / 2;
          })
          .attr('y', barY + barH + 14)
          .attr('text-anchor', function (i) {
            return i === 0 ? 'start' : i === nSteps - 1 ? 'end' : 'middle';
          })
          .attr('font-size', '11px')
          .style('font-family', theme.typography.fontFamily)
          .text(function (i) {
            return legend[i].label;
          })
          .attr('fill', theme.colors.text.primary);
      }

      const keyEndY = appendStateKeys(lsvg, barX, barY + barH + 24);
      lsvg.attr('width', Math.max(barW + 40, 180)).attr('height', keyEndY + 4);
    } else {
      /////////// categorical - circles ////////////////////////////
      var lsvg2 = d3.select(`#${legendClass}`);
      lsvg2
        .append('g')
        .selectAll('legendCircles')
        .data(legend)
        .enter()
        .append('circle')
        .attr('class', `legend-circle-${id}`)
        .attr('r', 8)
        .attr('fill', function (d) {
          return d.color;
        })
        .attr('cx', function (d, i) {
          return 25 + i * 75;
        })
        .attr('cy', 20)
        .style('cursor', 'pointer')
        .on('mouseover', function (event, d) {
          if (d.value != null) {
            highlightByValue(d.value, legendBand);
          }
        })
        .on('mouseout', function () {
          clearHighlight();
        });
      lsvg2
        .append('g')
        .selectAll('legendLabels')
        .data(legend)
        .enter()
        .append('text')
        .attr('x', function (d, i) {
          return 15 + i * 75;
        })
        .attr('y', 50)
        .text(function (d) {
          return d.label;
        })
        .style('font-family', theme.typography.fontFamily)
        .attr('fill', theme.colors.text.primary);
      const catW = 25 + (legend.length - 1) * 75 + 20 + legend[legend.length - 1].label.length * 9;
      const keyEndY = appendStateKeys(lsvg2, 15, 60);
      lsvg2.attr('width', catW).attr('height', Math.max(66, keyEndY + 4));
    }
  }
}

/** Measure the widest rendered label (each capped to capChars) so the axis margin
 * can be sized to actually fit it. Uses a hidden, off-layout SVG so it never flashes.
 * @param {HTMLElement} elem The container element (already attached to the DOM)
 * @param {string[]} names The label strings
 * @param {number} fontEm The font size in em (matches the axis label font-size)
 * @param {string} fontFamily The font family used for the labels
 * @param {number} capChars Truncate labels to at most this many characters before measuring
 * @return {number} The maximum rendered width in pixels (0 if measurement is unavailable)
 */
function measureMaxLabelWidth(elem, names, fontEm, fontFamily, capChars) {
  let maxW = 0;
  try {
    const tmp = d3
      .select(elem)
      .append('svg')
      .attr('class', 'matrix-label-measure')
      .style('position', 'absolute')
      .style('visibility', 'hidden')
      .style('width', '0')
      .style('height', '0')
      .style('overflow', 'visible');
    names.forEach((n) => {
      const s = String(n);
      const t = s.length > capChars ? s.slice(0, capChars) + '…' : s;
      const node = tmp
        .append('text')
        .attr('font-size', fontEm + 'em')
        .style('font-family', fontFamily)
        .text(t)
        .node();
      const w = node && node.getComputedTextLength ? node.getComputedTextLength() : 0;
      if (w > maxW) {
        maxW = w;
      }
    });
    tmp.remove();
  } catch (e) {
    return 0;
  }
  return maxW;
}

/** Trim an SVG <text> selection until it fits within maxPixels, adding an ellipsis. */
function truncateToPixels(text, maxPixels) {
  text.each(function () {
    const node = this;
    const full = d3.select(node).text();
    if (maxPixels <= 0) {
      return;
    }
    if (node.getComputedTextLength() <= maxPixels) {
      return;
    }
    let label = full;
    while (label.length > 1 && node.getComputedTextLength() > maxPixels) {
      label = label.slice(0, -1);
      d3.select(node).text(label + '…');
    }
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
    xPos = Math.max(event.offsetX - tooltipRect.width - mouseDistance, xMin);
  } else {
    // Draw tooltip right of the mouse
    xPos = Math.min(event.offsetX + mouseDistance, xMax);
  }

  if (event.offsetY - mouseDistance >= yMin && event.offsetY + mouseDistance >= yMax) {
    // Draw tooltip above the mouse
    yPos = Math.max(event.offsetY - tooltipRect.height - mouseDistance, yMin);
  } else {
    // Draw tooltip below the mouse
    yPos = Math.min(event.offsetY + mouseDistance, yMax);
  }

  tooltip.style('left', `${xPos}px`).style('top', `${yPos}px`);
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
      border-radius: ${theme.shape.radius.default};
      box-shadow: ${theme.shadows.z3};
      padding: 8px 10px;
      z-index: 500;
      position: absolute;
      width: fit-content;
    `,
    tooltipValue: css`
      font-size: ${theme.typography.h5.fontSize};
      font-weight: ${theme.typography.fontWeightBold};
      margin-bottom: 4px;
    `,
    tooltipTable: css`
      display: grid;
      grid-template-columns: max-content 1fr;
      gap: 2px;
      padding: 0;
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
 * @param {*} matrix Data for the matrix diagram
 * @param {*} id The panel id
 * @param {number} width Width of panel
 * @param {number} height Height of panel
 * @return {*} A d3 callback
 */
function matrix(
  rowNames,
  colNames,
  matrix,
  id,
  width,
  height,
  options,
  legend,
  colMetadata,
  colCategories,
  rowMetadata,
  rowCategories,
  rowTotals,
  colTotals,
  valueDomain
) {
  const theme = useTheme2();
  const styles = useStyles2(getStyles);
  const ref = useD3((svg) => {
    createViz(
      svg,
      id,
      width,
      height,
      rowNames,
      colNames,
      matrix,
      options,
      theme,
      legend,
      styles,
      colMetadata,
      colCategories,
      rowMetadata,
      rowCategories,
      rowTotals,
      colTotals,
      valueDomain
    );
  });
  return ref;
}

export { matrix };
