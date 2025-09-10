import { useD3 } from './useD3.js';
import * as d3 from './d3.min.js';
import { useTheme2 } from '@grafana/ui';

/** Create the matrix diagram using d3.
 * @param {*} elem The parent svg element that will house this diagram
 * @param {*} id The panel id
 * @param {number} height The current height of the panel
 * @param {*} data The data that will populate the diagram
 * @param {string} src The data series that will act as the source
 * @param {string} target The data series that will act as * the target
 * @param {string} val The data series that will act as the value
 * @param {GrafanaTheme} theme
 */
function createViz(elem, id, height, rowNames, colNames, matrix, options, theme, legend) {
  const srcText = options.sourceText,
    targetText = options.targetText,
    valText = options.valueText,
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

  //find the length of the longest name. this will inform the margin and name truncation
  var allNames = rowNames.concat(colNames);
  var longest = allNames.reduce((a, b) => {
    return a.length > b.length ? a : b;
  });

  //txtLength is passed in. but names may be much smaller than this value.
  //since this informs the margin we want to set it to whichever is longer
  //this prevents a huge white space if txtlength is considerably bigger
  //than the longest name
  const maxTxtLength = longest.length < txtLength ? longest.length : txtLength;

  //the user settable value cellsize controls the size of the svg.
  // var size = names.length * cellSize;

  //calculate the margins needed
  var txtOffset = maxTxtLength * txtSize * 5 + 25;

  // set the dimensions and margins of the graph
  // the top has a drop shadow and needs an extra 10 pixels to display properly
  var margin = { top: txtOffset + 10, right: 0, bottom: 0, left: txtOffset },
    width = colNames.length * cellSize,
    height = rowNames.length * cellSize;

  if (elem !== undefined) {
    // clear out old contents
    elem.replaceChildren();
  }

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

  // Build X scales and axis:
  var x = d3.scaleBand().range([0, width]).domain(colNames).padding(cellPadding);
  svg.append('g').call(d3.axisTop(x)).select('.domain').remove();

  //rotate the labels on the X axis
  // svg.selectAll('text').attr('style', 'text-anchor:end').attr('transform', 'translate(-11.5,-12)rotate(90)');
  svg.selectAll('text').attr('style', 'text-anchor:start').attr('transform', 'translate(12,-12)rotate(-90)');

  // Build Y scales and axis:
  var y = d3.scaleBand().range([height, 0]).domain(rowNames.slice().reverse()).padding(cellPadding);
  svg.append('g').call(d3.axisLeft(y)).select('.domain').remove();

  //the scale bands have created the labels on the axis now we need to make sure the styles are set and add the hover events
  svg
    .selectAll('text')
    .attr('font-size', txtSize + 'em')
    .style('font-family', theme.typography.fontFamily.sansSerif)
    .attr('fill', theme.colors.text.primary)
    .call(truncateLabel, maxTxtLength)
    .on('mouseover', function (event, d) {
      // var divSize = tooltip.node().getBoundingClientRect();  
      let tooltip = d3
        .select('body')
        .append('div')
        .attr('class', `matrix-tooltip-${id}`)
        .html(d)
        .style('background-color', theme.colors.background.primary)
        .style('font-family', theme.typography.fontFamily.sansSerif)
        .style('font-color', theme.colors.text.primary)
        .style('box-shadow', '3px 3px 4px lightgray')
        .style('padding', '5px')
        .style('z-index', '500')
        .style('position', 'absolute')
        .style('width', 'fit-content')
        .style('left', event.pageX + 'px')
        // .style('left', event.pageX - divSize.width + 'px')
        //place the tooltip 5 pixels above the box they hovered
        .style('top', event.pageY - 5 + 'px')
        // .style('top', event.pageY - divSize.height - 5 + 'px')
        .style('opacity', 1);       
    })
    .on('mouseout', function (d, i) {
      d3.select(this).attr('opacity', '1');
      d3.selectAll(`.matrix-tooltip-${id}`).remove();
    });

  //build the matrix /////////////////////////////////////////

  //use d3's local stuff to record where we are in the outer loop
  var outer = d3.local();

  var svg_g = d3.select('#' + svgClass).selectAll('svg > g');

  //create the area where we will put all the boxes
  const rectClass = `rectArea-${id}`;
  var rectArea = svg_g.append('g').attr('class', rectClass);

  //this selection breaks the data down to the row level. This is
  //needed because the underlying datastructure is a 2d array
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
    .attr('id', `rect-${id}`)
    .attr('x', function (d, i, j) {
      return x(colNames[i]);
    })
    .attr('y', function (d, i, j) {
      var outer_counter = outer.get(this);
      return y(rowNames[outer_counter]);
    })
    .attr('width', x.bandwidth())
    .attr('height', y.bandwidth())
    //this places a 'data' attribute into the HTML to make debugging easier. Allows you to see the inner/outer loop counts and the datum used
    .attr('data', function (d, i) {
      var outer_counter = outer.get(this);
      var str = '' + outer_counter + ':' + i + ' ' + rowNames[outer_counter] + ':' + colNames[i] + ' ' + d;
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
      if (d != -1) {
        //turn down the opacity slightly to show the hover
        d3.select(this)
          // .attr('opacity', '.75')
          .attr('width', x.bandwidth() + 5)
          .attr('height', y.bandwidth() + 5)
          .attr('transform', 'translate(-1, -1)');

        let tooltip = d3
          .select('body')
          .append('div')
          .attr('class', `matrix-tooltip-${id}`)
          .html(() => {
            var thisDisplay = d.display;
            var text = `<p><b>${srcText}:</b> ${d.row}
              <br>
              <b>${targetText}:</b> ${d.col}
              <br>
              <b>${valText}:</b> ${thisDisplay.text} ${thisDisplay.suffix ? thisDisplay.suffix : ''}
              </p>`;
            return text;
          })
          .style('background-color', theme.colors.background.primary)
          .style('font-family', theme.typography.fontFamily.sansSerif)
          .style('font-color', theme.colors.text.primary)
          .style('box-shadow', '3px 3px 4px lightgray')
          .style('padding', '5px')
          .style('z-index', '500')
          .style('position', 'absolute')
          .style('width', 'fit-content')
          .style('left', event.pageX + 5 + 'px')
          .style('top', event.pageY + 5 + 'px')
          .style('opacity', 1);       
      }
    })
    .on('mouseout', function (d, i) {
      //reset the opacity and move the tooltip out of the way. If we dont move it it will prevent hovering over other boxes.
      d3.select(this)
        // .attr('opacity', '1')
        .attr('transform', 'translate(0, 0)')
        .attr('width', x.bandwidth())
        .attr('height', y.bandwidth());
      d3.selectAll(`.matrix-tooltip-${id}`).transition(50).remove();
    })
    .on('click', function (d) {
      if(linkURL) {
        d3.selectAll(`.matrix-tooltip-${id}`).remove();
      }
    });

  ////// LEGEND ////////////
  if (options.showLegend) {
    var legendClass = `legend-${id}`;

    var div = d3
      .select(elem)
      .append('div')
      .attr('class', 'matrix-legend')
      .attr('width', 'auto')
      .attr('style', 'height: 70px;')
      .append('svg')
      .attr('id', legendClass);

////////////// range - bar //////////////////////
    if (options.legendType == 'range') {
      var svg = d3.select(`#${legendClass}`);
      svg
        .append('g')
        .selectAll('legendBars')
        .data(legend)
        .enter()
        .append('rect')
        .attr('class', 'legend-bar')
        .attr('width', 10)
        .attr('height', 10)
        .attr('fill', function (d) {
          return d.color;
        })
        .attr('x', function (d, i) {
          return 25 + i * 10;
        })
        .attr('y', 20);
      svg
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
          if ((i == 0) | (i == legend.length - 1)) {
            return d.label;
          } else {
            return;
          }
        })
        .attr('fill', theme.colors.text.primary);
    } else {
/////////// categorical - circles ////////////////////////////
      var svg = d3.select(`#${legendClass}`);
      svg
        .append('g')
        .selectAll('legendCircles')
        .data(legend)
        .enter()
        .append('circle')
        .attr('class', 'legend-circle')
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
    var label = d3.select(this).text();
    if (label.length > width) {
      label = label.slice(0, width) + '...';
    }
    d3.select(this).text(label);
  });
}

/**
 *
 * @param {*} data Data for the chord diagram
 * @param {*} id The panel id
 * @param {string} src The data series that will act as the source
 * @param {string} target The data series that will act as * the target
 * @param {string} val The data series that will act as the value
 * @param {number} height Height of panel
 * @return {*} A d3 callback
 */
function matrix(rowNames, colNames, matrix, id, height, options, legend) {
  const theme = useTheme2();
  const ref = useD3((svg) => {
    createViz(svg, id, height, rowNames, colNames, matrix, options, theme, legend);
  });
  return ref;
}

export { matrix };
