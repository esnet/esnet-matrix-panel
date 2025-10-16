import { useD3 } from './useD3.js';
import * as d3 from './d3.min.js';
import { useTheme2 } from '@grafana/ui';

/** Create the legend using d3.
 * @param {*} elem The parent svg element that will house this legend
 * @param {*} id The panel id
 * @param {number} height The current height of the panel
 * @param {*} legend The data that will populate the legend. array of objects providing color: the color to use and label: the display values use text and suffix
 * @param {GrafanaTheme} theme
 */
function renderLegend(elem, id, height, legend, options, theme) {
  if (elem === null) {
    console.error('bailing after failing to find parent element');
    return;
  }
  // while (elem !== undefined && elem.firstChild) {
  //   // clear out old contents
  //   elem.removeChild(elem.lastChild);
  // }
  
  var svgClass = `legend-${id}`;

  var div = d3
    .select(elem)
    .append('div')
    .attr('class', `matrix-legend-${id}`)
    .attr('width', 'auto')
    .append('svg')
    .attr('id', svgClass);

var svg = d3.select(`#${svgClass}`)
svg.append('circle')

  // append svg
  // var svgClass = `legend-${id}`;
  //   var svg = d3
  //     .select(elem)
  //     .append('svg')
  //     .attr('id', svgClass)
  //     .attr('width', width + margin.left + margin.right)
  //     .attr('height', '36px')
  //     .append('g');

      // svg.selectAll('mydots')
      //   .data(legend)
      //   .enter()
      //   .append('circle')
      //   .attr('cx', 100)
      //   .attr('cy', function (d, i) {
      //     return 100 + i * 25;
      //   }) // 100 is where the first dot appears. 25 is the distance between dots
      //   .attr('r', 7)
      //   .style('fill', function (d) {
      //     return d.color;
      //   });

  //if the legend is a range
  if (options.legendType == 'range') {
  }

  //if the legend is categorical
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
function legend(legend, id, height, options) {
  const theme = useTheme2();
  const ref = useD3((svg) => {
    renderLegend(svg, id, height, legend, options, theme);
  });
  // const ref = 'div'
  return ref;
}

export { legend, renderLegend };
