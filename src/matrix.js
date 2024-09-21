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
function createViz(elem, id, height, rowNames, colNames, matrix, options, theme) {
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
    console.log('bailing after failing to find parent element');
    return;
  }
  while (elem !== undefined && elem.firstChild) {
    // clear out old contents
    elem.removeChild(elem.lastChild);
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

  //we'll use this div as our tooltip.
  //the div will be invisible except when in use
  //the div will start at page coordinates 0,0
  //and be moved into place on hover
  //on mouse out the div will move back to 0,0 so
  //as not to be covering other boxes we want to hover
  var div = d3
    .select('body')
    .append('div')
    .attr('class', 'matrix-tooltip')
    .style('background-color', theme.colors.background.primary)
    .style('font-family', theme.typography.fontFamily.sansSerif)
    .style('font-color', theme.colors.text.primary)
    .style('box-shadow', '3px 3px 4px lightgray')
    .style('padding', '5px')
    .style('z-index','500')
    .style('position','absolute')
    .style('width','fit-content')
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
      div.html(d);

      //to center the tooltip appropriately we need to find the rendered width of both the
      //the box they hovered and of the tooltip with the text in it.
      var rect = event.target.getBoundingClientRect();
      var divSize = div.node().getBoundingClientRect();

      //place the tooltip along the X axis so that it's middle lines up with the
      //middle of the box they hovered
      div
        .style('left', rect.left + rect.width - divSize.width / 2 + 'px')
        //place the tooltip 5 pixels above the box they hovered
        .style('top', rect.top - divSize.height - 5 + 'px')
        .style('opacity', 1);
    })
    .on('mouseout', function (d, i) {
      d3.select(this).attr('opacity', '1');
      div.style('opacity', 0).style('left', '0px').style('top', '0px');
    });

  //build the matrix

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
      if(d.color) {
        return d.color;
      } else {
        return defaultColor;
      }
    })
    .on('mouseover', function (event, d) {
      if (d != -1) {
        //turn down the opacity slightly to show the hover
        d3.select(this)
          // .attr('opacity', '.75')
          .attr('width', x.bandwidth() + 5)
          .attr('height', y.bandwidth() + 5)
          .attr('transform', 'translate(-1, -1)');

        //like the mouseover above go ahead and render the text so we can calculate its size
        //and position correctly.
        div.html(() => {
          var thisDisplay = d.display;
          var text = `<p><b>${srcText}:</b> ${d.row}
            <br>
            <b>${targetText}:</b> ${d.col}
            <br>
            <b>${valText}:</b> ${thisDisplay.text} ${thisDisplay.suffix ? thisDisplay.suffix : ''}
            </p>`;
          return text;
        });

        var rect = event.target.getBoundingClientRect();
        var divSize = div.node().getBoundingClientRect();

        div
          .style('left', rect.left + rect.width - divSize.width / 2 + 'px')
          .style('top', rect.top - divSize.height - 5 + 'px')
          .style('opacity', 1);
      }
    })
    .on('mouseout', function (d, i) {
      //reset the opacity and move the div out of the way. If we dont move it it will prevent hovering over other boxes.
      d3.select(this)
        // .attr('opacity', '1')
        .attr('transform', 'translate(0, 0)')
        .attr('width', x.bandwidth())
        .attr('height', y.bandwidth());
      div.style('opacity', 0).style('left', '0px').style('top', '0px');
    });
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
function matrix(rowNames, colNames, matrix, id, height, options) {
  const theme = useTheme2();
  const ref = useD3((svg) => {
    createViz(svg, id, height, rowNames, colNames, matrix, options, theme);
  });
  return ref;
}

export { matrix };
