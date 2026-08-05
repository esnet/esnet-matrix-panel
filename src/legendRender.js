import { select } from 'd3-selection';
import { LEGEND_LAYOUT, layoutLegend } from './legend';

/**
 * Draws the legend model produced by `./legend.ts`.
 *
 * Every form here describes the real source of cell color, and every entry knows the
 * value band it stands for, so hovering it highlights exactly the cells it covers
 * rather than an approximate tolerance window.
 *
 * All geometry comes from `layoutLegend`, the same function the panel uses to reserve
 * vertical space before the grid is sized — the legend can never claim more room than
 * it was given.
 */

const FONT_SIZE = '11px';

/** Draw the "null" / "no data" keys wherever `layoutLegend` placed them — beside the
 * color scale when it left room, otherwise on their own row beneath it. */
function drawStateKeys(svg, keys, opts, theme, handlers) {
  const L = LEGEND_LAYOUT;
  keys.forEach((key) => {
    const isNull = key.kind === 'null';
    const fill = isNull ? opts.nullColor : opts.distinctNoData ? 'none' : opts.defaultColor;
    const stroke = isNull ? 'none' : opts.distinctNoData ? opts.noDataStroke : 'none';
    svg
      .append('rect')
      .attr('x', key.x)
      .attr('y', key.y)
      .attr('width', L.swatch)
      .attr('height', L.swatch)
      .attr('rx', Math.min(opts.cornerRadius, 3))
      .attr('fill', fill)
      .attr('stroke', stroke)
      .attr('stroke-width', stroke === 'none' ? 0 : 1)
      .style('cursor', 'pointer')
      .on('mouseover', function () {
        handlers.highlightByState(isNull);
      })
      .on('mouseout', function () {
        handlers.clearHighlight();
      })
      .append('title')
      .text(key.label);
    svg
      .append('text')
      .attr('x', key.x + L.swatch + L.swatchGap)
      .attr('y', key.y + L.swatch - 2)
      .attr('font-size', FONT_SIZE)
      .style('font-family', theme.typography.fontFamily)
      .attr('fill', theme.colors.text.secondary)
      .text(key.label);
  });
}

/** Continuous ramp: a smooth bar with a real tick axis. */
function drawGradient(svg, model, layout, id, theme, handlers) {
  const L = LEGEND_LAYOUT;
  const barW = layout.barW;
  const y = layout.bodyY;

  const gradId = `matrix-grad-${id}`;
  const grad = svg
    .append('defs')
    .append('linearGradient')
    .attr('id', gradId)
    .attr('x1', '0%')
    .attr('x2', '100%')
    .attr('y1', '0%')
    .attr('y2', '0%');
  model.stops.forEach((s) => {
    grad
      .append('stop')
      .attr('offset', `${s.offset * 100}%`)
      .attr('stop-color', s.color);
  });

  const domain = model.domain;
  const span = domain ? domain.max - domain.min : 0;
  svg
    .append('rect')
    .attr('x', L.padX)
    .attr('y', y)
    .attr('width', barW)
    .attr('height', L.barH)
    .attr('rx', 2)
    .attr('fill', `url(#${gradId})`)
    .attr('stroke', theme.colors.border.weak)
    .attr('stroke-width', 1)
    .style('cursor', domain ? 'crosshair' : null)
    .on('mousemove', function (event) {
      if (!domain) {
        return;
      }
      const mx = Math.max(0, Math.min(barW, event.offsetX - L.padX));
      const at = domain.min + (mx / barW) * span;
      // a narrow window around the cursor, so sweeping the bar sweeps the matrix
      const band = (span || 1) * 0.03;
      handlers.highlightByRange(at - band, at + band);
    })
    .on('mouseout', function () {
      handlers.clearHighlight();
    });

  const labelY = y + L.barH + 13;
  model.ticks.forEach((tick) => {
    const tx = L.padX + tick.offset * barW;
    if (tick.emphasis) {
      // the diverging midpoint reads as a line through the ramp
      svg
        .append('line')
        .attr('x1', tx)
        .attr('x2', tx)
        .attr('y1', y - 2)
        .attr('y2', y + L.barH + 2)
        .attr('stroke', theme.colors.text.primary)
        .attr('stroke-width', 1);
    } else {
      svg
        .append('line')
        .attr('x1', tx)
        .attr('x2', tx)
        .attr('y1', y + L.barH)
        .attr('y2', y + L.barH + 3)
        .attr('stroke', theme.colors.border.weak)
        .attr('stroke-width', 1);
    }
    svg
      .append('text')
      .attr('x', tx)
      .attr('y', labelY)
      .attr('text-anchor', tick.offset <= 0.01 ? 'start' : tick.offset >= 0.99 ? 'end' : 'middle')
      .attr('font-size', FONT_SIZE)
      .style('font-family', theme.typography.fontFamily)
      .attr('fill', theme.colors.text.primary)
      .text(tick.label);
  });
}

/** Thresholds: contiguous equal-width steps with the configured boundary values
 * printed under each division. Step widths are equal because the outer bands are
 * unbounded — there is no honest proportional width for "≥ 80". */
function drawSteppedBar(svg, model, layout, opts, theme, handlers) {
  const L = LEGEND_LAYOUT;
  const y = layout.bodyY;
  const stepW = layout.stepW;

  model.items.forEach((item, i) => {
    svg
      .append('rect')
      .attr('x', L.padX + i * stepW)
      .attr('y', y)
      .attr('width', stepW)
      .attr('height', L.barH)
      .attr('fill', item.color)
      .style('cursor', 'pointer')
      .on('mouseover', function () {
        handlers.highlightByRange(item.from, item.to);
      })
      .on('mouseout', function () {
        handlers.clearHighlight();
      })
      .append('title')
      .text(item.label);
  });

  // single outline over the whole bar, so the steps read as one scale
  svg
    .append('rect')
    .attr('x', L.padX)
    .attr('y', y)
    .attr('width', layout.barW)
    .attr('height', L.barH)
    .attr('rx', 2)
    .attr('fill', 'none')
    .attr('stroke', theme.colors.border.weak)
    .attr('stroke-width', 1)
    .style('pointer-events', 'none');

  // boundary values sit at the divisions between steps, not under their centres
  const labelY = y + L.barH + 13;

  // a bounded first step prints its floor at the bar's left edge, so the scale reads
  // "0  30  70" rather than starting at nothing
  if (model.items[0] && model.items[0].fromLabel) {
    svg
      .append('line')
      .attr('x1', L.padX)
      .attr('x2', L.padX)
      .attr('y1', y + L.barH)
      .attr('y2', y + L.barH + 3)
      .attr('stroke', theme.colors.border.weak)
      .attr('stroke-width', 1);
    svg
      .append('text')
      .attr('x', L.padX)
      .attr('y', labelY)
      .attr('text-anchor', 'start')
      .attr('font-size', FONT_SIZE)
      .style('font-family', theme.typography.fontFamily)
      .attr('fill', theme.colors.text.primary)
      .text(model.items[0].fromLabel);
  }

  model.items.slice(1).forEach((item, i) => {
    const tx = L.padX + (i + 1) * stepW;
    svg
      .append('line')
      .attr('x1', tx)
      .attr('x2', tx)
      .attr('y1', y + L.barH)
      .attr('y2', y + L.barH + 3)
      .attr('stroke', theme.colors.border.weak)
      .attr('stroke-width', 1);
    svg
      .append('text')
      .attr('x', tx)
      .attr('y', labelY)
      .attr('text-anchor', 'middle')
      .attr('font-size', FONT_SIZE)
      .style('font-family', theme.typography.fontFamily)
      .attr('fill', theme.colors.text.primary)
      .text(item.fromLabel);
  });
}

/** Wrapped swatch + label rows. Used for categorical values, and for threshold
 * steps whose labels are too wide to fit one bar across the panel. */
function drawList(svg, model, layout, opts, theme, handlers) {
  const L = LEGEND_LAYOUT;
  layout.rows.forEach((row, ri) => {
    const y = layout.bodyY + ri * L.rowStep;
    row.forEach((entry) => {
      svg
        .append('rect')
        .attr('x', L.padX + entry.x)
        .attr('y', y)
        .attr('width', L.swatch)
        .attr('height', L.swatch)
        .attr('rx', Math.min(opts.cornerRadius, 3))
        .attr('fill', entry.item.color)
        .style('cursor', 'pointer')
        .on('mouseover', function () {
          handlers.highlightByRange(entry.item.from, entry.item.to);
        })
        .on('mouseout', function () {
          handlers.clearHighlight();
        })
        .append('title')
        .text(entry.item.label);
      svg
        .append('text')
        .attr('x', L.padX + entry.x + L.swatch + L.swatchGap)
        .attr('y', y + L.swatch - 2)
        .attr('font-size', FONT_SIZE)
        .style('font-family', theme.typography.fontFamily)
        .attr('fill', theme.colors.text.primary)
        .text(entry.item.label);
    });
  });

  if (model.truncated > 0) {
    svg
      .append('text')
      .attr('x', L.padX)
      .attr('y', layout.bodyY + layout.rows.length * L.rowStep + L.swatch - 2)
      .attr('font-size', FONT_SIZE)
      .style('font-family', theme.typography.fontFamily)
      .attr('fill', theme.colors.text.secondary)
      .text(`+${model.truncated} more`);
  }
}

/**
 * @param {HTMLElement} elem Container the matrix was drawn into
 * @param {*} model The legend model from buildLegend()
 * @param {*} id The panel id
 * @param {*} opts { availableWidth, cornerRadius, nullColor, defaultColor, distinctNoData, noDataStroke }
 * @param {*} theme Grafana theme
 * @param {*} handlers { highlightByRange, highlightByState, clearHighlight }
 */
function renderLegend(elem, model, id, opts, theme, handlers) {
  if (!model) {
    return;
  }
  const L = LEGEND_LAYOUT;
  const layout = layoutLegend(model, opts.availableWidth);

  const svg = select(elem)
    .append('div')
    .attr('class', `matrix-legend-${id}`)
    .append('svg')
    .attr('id', `legend-${id}`)
    .attr('width', layout.width)
    .attr('height', layout.height)
    .attr('role', 'img')
    .attr('aria-label', `${model.title} legend`);

  if (model.title) {
    svg
      .append('text')
      .attr('x', L.padX)
      .attr('y', L.padTop + 11)
      .attr('font-size', FONT_SIZE)
      .style('font-family', theme.typography.fontFamily)
      .attr('fill', theme.colors.text.secondary)
      .text(model.title);
  }

  if (model.kind === 'gradient') {
    drawGradient(svg, model, layout, id, theme, handlers);
  } else if (layout.form === 'bar') {
    drawSteppedBar(svg, model, layout, opts, theme, handlers);
  } else {
    drawList(svg, model, layout, opts, theme, handlers);
  }

  drawStateKeys(svg, layout.keys, opts, theme, handlers);
}

export { renderLegend };
