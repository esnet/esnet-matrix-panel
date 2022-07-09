import { useD3 } from './useD3.js';
import * as d3 from './d3.min.js';
import { DataFrameView, FieldColorModeId, classicColors } from '@grafana/data';
import { useTheme } from '@grafana/ui';

/** Create the matrix diagram using d3.
 * @param {*} elem The parent svg element that will house this diagram
 * @param {number} height The current height of the panel
 * @param {*} data The data that will populate the diagram
 * @param {string} src The data series that will act as the source
 * @param {string} target The data series that will act as * the target
 * @param {string} val The data series that will act as the value
 * @param {GrafanaTheme} theme
 */
function createViz(elem, height, data, src, target, val, theme, cellSize, cellPadding, txtLength, txtSize) {
  txtSize = txtSize / 100; //convert this val to EM scaling 90 = .9em 100 = 1em ... etc
  cellPadding = cellPadding / 100; // convert the cellPadding integer to a float that can be used by d3
  // do a bit of work to setup the visual layout of the wiget --------
  if (elem === null) {
    console.log('bailing after failing to find parent element');
    return;
  }
  while (elem !== undefined && elem.firstChild) {
    // clear out old contents
    elem.removeChild(elem.lastChild);
  }

  // get color mapping from grafana
  const valueField = val
    ? data.series.map((series) => series.fields.find((field) => field.name === val))
    : data.series.map((series) => series.fields.find((field) => field.type === 'number'));

  // const valueField = data.series.map((series) => series.fields.find((field) => field.type === 'number'));

  var colorMap = (v) => {
    if (v == null) {
      return '#FF981C';
    } else if (v == -1) {
      return '#F0F0F0';
    } else {
      return valueField[0].display(v).color;
    }
  };

  const frame = data.series[0];
  if (frame === null || frame === undefined) {
    // no data, bail
    console.log('no data , no dice');
    return;
  }

  const view = new DataFrameView(frame);
  const [rowNames, colNames, matrix] = prepData(view, src, target, val);
  // this is making a questionable assumption that the quant data we care about
  // is in the 3rd column
  const fieldDisplay = view.getFieldDisplayProcessor(2);
  // TODO: convert this to use val field passed in.

  if (matrix === null) return;

  //make an array of the names of the nodes
  // const names = Array.from(nameRevIdx.values());

  //find the length of the longest name. this will inform the margin and name truncation
  var allNames = rowNames.concat(colNames);
  var longest = allNames.reduce((a, b) => {
    return a.length > b.length ? a : b;
  });

  //txtLength is passed in. but names may be much smaller than this value.
  //since this informs the margin we want to set it to whichever is longer
  //this prevents a huge white space if txtlength is considerably bigger
  //than the longest name
  txtLength = longest.length < txtLength ? longest.length : txtLength;

  //the user settable value cellsize controls the size of the svg.
  // var size = names.length * cellSize;

  //calculate the margins needed
  var txtOffset = txtLength * 5 + 25;

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
    .attr('class', 'tooltip')
    .style('background-color', theme.colors.bg1)
    .style('font-family', theme.typography.fontFamily.sansSerif)
    .style('font-color', theme.colors.text)
    .style('box-shadow', '3px 3px 6px lightgray')
    .style('padding', '5px')
    .style('opacity', 0);

  // append the svg object to the body of the page
  var svg = d3
    .select(elem)
    .append('svg')
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
    .attr('fill', theme.colors.text)
    .call(truncateLabel, txtLength)
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

  var svg_g = d3.selectAll('svg > g');

  //create the area where we will put all the boxes
  var rectArea = svg_g.append('g').attr('class', 'rectArea');

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
    .append('rect')
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
    .attr('fill', function (d) {
      if(d == -1) {
        return colorMap(d);
      } else {
      return colorMap(d.val);
      }
    })
    //hide the spot where a node intersects with itself
    .style('visibility', function (d, i) {
      if (colNames[i] == rowNames[outer.get(this)]) {
        return 'hidden';
      }
      return 'visible';
    })
    .on('mouseover', function (event, d) {
      if (d != -1) {
        //turn down the opacity slightly to show the hover
        d3.select(this).attr('opacity', '.85');

        //like the mouseover above go ahead and render the text so we can calculate its size
        //and position correctly.
        div.html(() => {
          var thisDisplay = valueField[0].display(d.val);
          var text =
            '<p><b>From: </b> ' +
            d.row +
            '</p><p><b>To: </b> ' +
            d.col +
            '</p><p>Loss: ' +
            thisDisplay.text +
            (thisDisplay.suffix ? thisDisplay.suffix : '');
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
      d3.select(this).attr('opacity', '1');
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
 * this function creates an adjacency matrix to be consumed by the chord
 * function returns the matrix + forward and reverse lookup Maps to go from
 * source and target id to description assumes that data coming to us has at
 * least 3 columns if no preferences provided, assumes the first 3 columns are
 * source and target dimensions then value to display
 * @param {*} data Data for the chord diagram
 * @param {string} src The data series that will act as the source
 * @param {string} target The data series that will act as * the target
 * @param {string} val The data series that will act as the value
 * @return {[rowNames, colNames, dataMatrix]}
 */
function prepData(data, src, target, val) {
  let sourceKey = src;
  let targetKey = target;
  let valKey = val;
  if (!sourceKey) {
    sourceKey = 0;
  }
  if (!targetKey) {
    targetKey = 1;
  }
  if (!valKey) {
    valKey = 2;
  }

  // find all axis labels
  let rows = [];
  let columns = [];
  data.forEach((row) => {
    rows.push(row[sourceKey]);
    columns.push(row[targetKey]);
  });

  // Make new arrays from unique set of row and column axis labels
  const rowNames = Array.from(new Set(rows)).sort();
  const colNames = Array.from(new Set(columns)).sort();

  // create data matrix
  var dataMatrix = [];
  for (let i = 0; i < rowNames.length; i++) {
    dataMatrix.push(new Array(colNames.length).fill(-1));
  }
  data.forEach((row) => {
    let r = rowNames.indexOf(row[sourceKey]);
    let c = colNames.indexOf(row[targetKey]);
    dataMatrix[r][c] = {
      row: row[sourceKey],
      col: row[targetKey],
      val: row[valKey]
    }
    // dataMatrix[r][c] = row[valKey];
  });
  return [rowNames, colNames, dataMatrix];
}

/**
 *
 * @param {*} data Data for the chord diagram
 * @param {string} src The data series that will act as the source
 * @param {string} target The data series that will act as * the target
 * @param {string} val The data series that will act as the value
 * @param {number} height Height of panel
 * @return {*} A d3 callback
 */
function matrix(data, src, target, val, height, cellSize, cellPadding, txtLength, txtSize) {
  const theme = useTheme();
  // some react related voodoo
  const ref = useD3((svg) => {
    createViz(svg, height, data, src, target, val, theme, cellSize, cellPadding, txtLength, txtSize);
  });
  return ref;
}

export { matrix };
