import { getFieldColorModeForField, getMinMaxAndDelta, sortThresholds, ThresholdsMode } from '@grafana/data';
import { LegendItem, LegendKind, LegendModel, LegendStop, LegendTick } from './types';

/**
 * Builds the legend's data model.
 *
 * The whole point of this module is that the legend describes the *actual* source of
 * cell color. When cells are colored from the field's thresholds (Standard Options),
 * the legend is built from those threshold steps — their real colors and their real
 * boundary values — not from an arbitrary sampling of the data's min/max. Steps that
 * no data happens to fall into are still shown; that a band is empty is information.
 *
 * The model is deliberately free of any drawing concerns so it can be unit tested,
 * and so `layoutLegend` can size the legend before anything is rendered.
 */

/** Distinct categorical entries drawn before we give up and summarize the rest. */
export const CATEGORICAL_CAP = 24;

/** Number of color samples taken along a continuous ramp to build the gradient. */
const GRADIENT_SAMPLES = 12;

/** Shared geometry, in px. Exported so the renderer and the sizing math cannot drift. */
export const LEGEND_LAYOUT = {
  padX: 4,
  padTop: 2,
  padBottom: 4,
  titleH: 15,
  barH: 14,
  /** Space under the bar for boundary / tick labels. */
  barLabelH: 17,
  /** Vertical pitch of a swatch row (list form, and the null / no-data key). */
  rowStep: 18,
  swatch: 12,
  swatchGap: 6,
  /** Horizontal gap between entries on the same list row. */
  itemGap: 14,
  /** Horizontal gap between the color scale and the null / no-data keys beside it. */
  keyGap: 16,
  /** Approximate advance width of an 11px sans-serif character. */
  charW: 6.4,
  /** Minimum width of one segment in the stepped-bar form. */
  minStepW: 34,
  /** Preferred width of a continuous gradient bar. */
  gradientW: 200,
};

/** Approximate rendered width of an 11px label. Good enough for layout decisions;
 * the renderer never relies on it for anything that would clip. */
function textW(s: string): number {
  return String(s == null ? '' : s).length * LEGEND_LAYOUT.charW;
}

/** Format a value exactly the way the cells format it, so legend numbers and cell
 * tooltips agree on units and decimals. Falls back to String() when a field has no
 * display processor attached (i.e. outside a real panel render). */
function fmt(field: any, v: any): string {
  try {
    if (field && typeof field.display === 'function') {
      const d = field.display(v);
      // Grafana's suffix usually already carries its own leading space
      const suffix = d.suffix ? String(d.suffix).trim() : '';
      return suffix ? `${d.text} ${suffix}` : d.text;
    }
  } catch (e) {
    // fall through to the raw value
  }
  return String(v);
}

/** Label for a half-open band, avoiding ever printing an infinity. */
function bandLabel(field: any, from: number | null, to: number | null): string {
  if (from == null && to == null) {
    return 'all values';
  }
  if (from == null) {
    return `< ${fmt(field, to)}`;
  }
  if (to == null) {
    return `≥ ${fmt(field, from)}`;
  }
  return `${fmt(field, from)} – ${fmt(field, to)}`;
}

function safeColorMode(field: any): any {
  try {
    return getFieldColorModeForField(field) || {};
  } catch (e) {
    return {};
  }
}

/** The min/max percentage thresholds are relative to. Mirrors what `getScaleCalculator`
 * uses internally (field.state.range, else field config min/max, else the data), so
 * legend boundaries land on the same values the cells were colored by. */
function fieldRange(field: any, dataMin: number, dataMax: number): { min: number; max: number; delta: number } {
  const stateRange = field && field.state ? field.state.range : null;
  if (stateRange && isFinite(stateRange.min) && isFinite(stateRange.max)) {
    const delta = isFinite(stateRange.delta) ? stateRange.delta : stateRange.max - stateRange.min;
    return { min: stateRange.min, max: stateRange.max, delta };
  }
  try {
    const m: any = getMinMaxAndDelta(field);
    if (isFinite(m.min) && isFinite(m.max)) {
      return { min: m.min, max: m.max, delta: isFinite(m.delta) ? m.delta : m.max - m.min };
    }
  } catch (e) {
    // fall through to the data range
  }
  return { min: dataMin, max: dataMax, delta: dataMax - dataMin };
}

function hasColoredValueMappings(field: any): boolean {
  const mappings = field && field.config ? field.config.mappings : null;
  if (!Array.isArray(mappings) || mappings.length === 0) {
    return false;
  }
  return mappings.some((m: any) => {
    const opts = m && m.options;
    if (!opts) {
      return false;
    }
    if (opts.result && opts.result.color) {
      return true;
    }
    // value maps store one result per matched value
    return Object.keys(opts).some((k) => opts[k] && opts[k].color);
  });
}

/** Old dashboards saved `range` / `categorical`; map them onto the new vocabulary
 * so upgrading a panel never blanks its legend. */
export function normalizeLegendType(legendType: any): 'auto' | LegendKind {
  switch (legendType) {
    case 'thresholds':
    case 'gradient':
    case 'categorical':
      return legendType;
    case 'range':
    // 'range' used to mean "whatever continuous form fits" — that is now Auto's job.
    case 'auto':
    case undefined:
    case null:
    case '':
      return 'auto';
    default:
      return 'auto';
  }
}

/** Decide which form the legend takes, following whatever actually colors the cells. */
export function resolveLegendKind(field: any, options: any, isNumeric: boolean): LegendKind {
  const requested = normalizeLegendType(options.legendType);
  if (requested !== 'auto') {
    return requested;
  }
  if (!isNumeric) {
    return 'categorical';
  }
  const colorMode = options.colorMode || 'standard';
  if (colorMode === 'sequential' || colorMode === 'diverging') {
    // the panel's own ramp colors the cells, so the legend is that ramp
    return 'gradient';
  }
  const fcm = safeColorMode(field);
  if (fcm.isContinuous) {
    return 'gradient';
  }
  if (fcm.id === 'fixed' || hasColoredValueMappings(field)) {
    return 'categorical';
  }
  return 'thresholds';
}

/** One entry per configured threshold step, in ascending order, whether or not any
 * data falls inside it. The first step is unbounded below (that is how
 * `getActiveThreshold` treats it) and the last is unbounded above.
 *
 * `legendMin` floors that first step: with it the band reads "0 – 30" instead of
 * "< 30", and its `from` becomes the bound, so hovering it highlights exactly the
 * cells the label claims. Leave it undefined for the unbounded reading. */
export function buildThresholdItems(
  field: any,
  theme: any,
  dataMin: number,
  dataMax: number,
  legendMin?: number
): LegendItem[] {
  const cfg = field && field.config ? field.config.thresholds : null;
  const rawSteps = cfg && Array.isArray(cfg.steps) ? cfg.steps : [];
  if (rawSteps.length === 0) {
    return [];
  }
  const steps = sortThresholds(rawSteps.slice());
  const isPercent = cfg.mode === ThresholdsMode.Percentage;
  const range = isPercent ? fieldRange(field, dataMin, dataMax) : null;
  const toAbsolute = (stepValue: number): number => {
    if (!isPercent || !range || !isFinite(stepValue)) {
      return stepValue;
    }
    return range.min + (stepValue / 100) * range.delta;
  };

  const bounded = typeof legendMin === 'number' && isFinite(legendMin);

  return steps.map((step: any, i: number) => {
    const from = i === 0 ? (bounded ? (legendMin as number) : null) : toAbsolute(step.value);
    const to = i === steps.length - 1 ? null : toAbsolute(steps[i + 1].value);
    return {
      label: bandLabel(field, from, to),
      color: theme.visualization.getColorByName(step.color),
      from,
      to,
      fromLabel: from == null ? '' : fmt(field, from),
    };
  });
}

/** Color stops for a continuous bar, taken from whichever ramp is in play. */
function buildStops(
  field: any,
  options: any,
  theme: any,
  domain: { min: number; max: number } | null,
  colorScale: ((v: number) => string) | null,
  colorMap: (v: any) => string
): LegendStop[] {
  const colorMode = options.colorMode || 'standard';
  const offsets: number[] = [];
  for (let i = 0; i < GRADIENT_SAMPLES; i++) {
    offsets.push(i / (GRADIENT_SAMPLES - 1));
  }

  if ((colorMode === 'sequential' || colorMode === 'diverging') && colorScale && domain) {
    return offsets.map((t) => ({ offset: t, color: colorScale(domain.min + t * (domain.max - domain.min)) }));
  }

  // A Grafana continuous-* scheme already publishes its own stops — use them directly
  // rather than re-sampling through the display processor.
  const fcm = safeColorMode(field);
  if (fcm.isContinuous && typeof fcm.getColors === 'function') {
    const colors = fcm.getColors(theme) || [];
    if (colors.length > 0) {
      return colors.map((color: string, i: number) => ({
        offset: colors.length > 1 ? i / (colors.length - 1) : 0,
        color,
      }));
    }
  }

  if (domain) {
    return offsets.map((t) => ({ offset: t, color: colorMap(domain.min + t * (domain.max - domain.min)) }));
  }
  return [];
}

/** Min / midpoint / max labels for a continuous bar, plus the diverging midpoint. */
function buildTicks(field: any, options: any, domain: { min: number; max: number } | null): LegendTick[] {
  if (!domain) {
    return [];
  }
  const span = domain.max - domain.min;
  const at = (value: number): LegendTick => ({
    value,
    label: fmt(field, value),
    offset: span ? (value - domain.min) / span : 0,
  });
  if (!span) {
    return [at(domain.min)];
  }
  const ticks: LegendTick[] = [at(domain.min), at(domain.min + span / 2), at(domain.max)];

  if ((options.colorMode || 'standard') === 'diverging') {
    const mid = typeof options.divergingMidpoint === 'number' ? options.divergingMidpoint : 0;
    const offset = (mid - domain.min) / span;
    if (offset > 0.02 && offset < 0.98) {
      const emphasized = { ...at(mid), emphasis: true };
      // don't stack the midpoint on top of the centre tick
      if (Math.abs(offset - 0.5) < 0.08) {
        ticks[1] = emphasized;
      } else {
        ticks.splice(2, 0, emphasized);
      }
    }
  }
  return ticks;
}

/** Distinct values as swatches, sorted, capped so a high-cardinality field cannot
 * produce hundreds of entries. */
function buildCategoricalItems(
  field: any,
  uniqueValues: any[],
  colorMap: (v: any) => string
): { items: LegendItem[]; truncated: number } {
  const values = uniqueValues.slice().sort((a, b) => {
    if (typeof a === 'number' && typeof b === 'number') {
      return a - b;
    }
    return String(a).localeCompare(String(b));
  });
  const shown = values.slice(0, CATEGORICAL_CAP);
  const items = shown.map((v) => ({
    label: fmt(field, v),
    color: colorMap(v),
    // an exact-value band: `from === to` means "only cells equal to this"
    from: typeof v === 'number' ? v : null,
    to: typeof v === 'number' ? v : null,
    fromLabel: '',
  }));
  return { items, truncated: values.length - shown.length };
}

export type LegendContext = {
  dataMin: number;
  dataMax: number;
  /** Effective color domain — may be the manual range rather than the data's. */
  domain: { min: number; max: number } | null;
  /** The panel's own ramp (sequential / diverging modes only). */
  colorScale: ((v: number) => string) | null;
  /** The same value -> color function the cells were painted with. */
  colorMap: (v: any) => string;
  /** Distinct non-null values present in the value field. */
  uniqueValues: any[];
  hasNull: boolean;
  hasNoData: boolean;
};

export function buildLegend(field: any, options: any, theme: any, ctx: LegendContext): LegendModel {
  const isNumeric = ctx.uniqueValues.some((v) => typeof v === 'number' && !isNaN(v)) || ctx.uniqueValues.length === 0;
  let kind = resolveLegendKind(field, options, isNumeric);

  const model: LegendModel = {
    kind,
    title: options.valueText || (field && field.name) || '',
    items: [],
    stops: [],
    domain: ctx.domain,
    ticks: [],
    states: { hasNull: ctx.hasNull, hasNoData: ctx.hasNoData },
    truncated: 0,
  };

  if (kind === 'thresholds') {
    model.items = buildThresholdItems(field, theme, ctx.dataMin, ctx.dataMax, options.legendMin);
    if (model.items.length === 0) {
      // No thresholds configured at all — a gradient still describes the cells honestly.
      kind = 'gradient';
      model.kind = kind;
    }
  }

  if (kind === 'gradient') {
    model.stops = buildStops(field, options, theme, ctx.domain, ctx.colorScale, ctx.colorMap);
    model.ticks = buildTicks(field, options, ctx.domain);
    if (model.stops.length === 0) {
      // nothing numeric to ramp over; fall back to naming the values we do have
      kind = 'categorical';
      model.kind = kind;
    }
  }

  if (kind === 'categorical') {
    const { items, truncated } = buildCategoricalItems(field, ctx.uniqueValues, ctx.colorMap);
    model.items = items;
    model.truncated = truncated;
  }

  return model;
}

/* ------------------------------------------------------------------ *
 * Layout
 *
 * Computed from the model alone so the panel can reserve exactly the height the
 * legend needs *before* drawing it — the old code reserved a flat 64px whatever
 * the legend turned out to be.
 * ------------------------------------------------------------------ */

export type LegendRowEntry = { item: LegendItem; x: number; width: number };

/** A placed null / no-data swatch. The keys ride beside the color scale when there is
 * room for them, so they cost no vertical space at all. */
export type LegendKeyEntry = {
  kind: 'null' | 'noData';
  label: string;
  x: number;
  y: number;
  width: number;
};

export type LegendLayout = {
  /** `bar` = one contiguous stepped / gradient bar. `list` = wrapped swatch rows. */
  form: 'bar' | 'list';
  width: number;
  height: number;
  /** Bar form: total bar width, and the width of one step (thresholds only). */
  barW: number;
  stepW: number;
  /** List form: entries already assigned to wrapped rows. */
  rows: LegendRowEntry[][];
  /** y of the bar / first swatch row. */
  bodyY: number;
  /** Placed null / no-data keys, in draw order. Empty when neither state is present. */
  keys: LegendKeyEntry[];
};

function swatchEntryWidth(label: string): number {
  const L = LEGEND_LAYOUT;
  return L.swatch + L.swatchGap + textW(label);
}

function entryWidth(item: LegendItem): number {
  return swatchEntryWidth(item.label);
}

/** The state keys a model needs, unplaced. Order matters: null then "no data". */
function stateKeys(model: LegendModel): Array<{ kind: 'null' | 'noData'; label: string; width: number }> {
  const keys: Array<{ kind: 'null' | 'noData'; label: string; width: number }> = [];
  if (model.states.hasNull) {
    keys.push({ kind: 'null', label: 'null', width: swatchEntryWidth('null') });
  }
  if (model.states.hasNoData) {
    keys.push({ kind: 'noData', label: 'no data', width: swatchEntryWidth('no data') });
  }
  return keys;
}

/** Lay the keys out left-to-right on one row starting at `x`. */
function placeKeys(
  keys: Array<{ kind: 'null' | 'noData'; label: string; width: number }>,
  x: number,
  y: number
): LegendKeyEntry[] {
  const L = LEGEND_LAYOUT;
  let cursor = x;
  return keys.map((key) => {
    const placed = { ...key, x: cursor, y };
    cursor += key.width + L.itemGap;
    return placed;
  });
}

/** Total width of a one-row key block, gaps included. */
function keysWidth(keys: Array<{ width: number }>): number {
  const L = LEGEND_LAYOUT;
  if (keys.length === 0) {
    return 0;
  }
  return keys.reduce((sum, key) => sum + key.width, 0) + (keys.length - 1) * L.itemGap;
}

/** Greedily pack entries into rows no wider than `avail`. Always emits at least one
 * entry per row so a single over-long label cannot produce an empty row. */
function packRows(items: LegendItem[], avail: number): LegendRowEntry[][] {
  const L = LEGEND_LAYOUT;
  const rows: LegendRowEntry[][] = [];
  let row: LegendRowEntry[] = [];
  let x = 0;
  items.forEach((item) => {
    const w = entryWidth(item);
    if (row.length > 0 && x + w > avail) {
      rows.push(row);
      row = [];
      x = 0;
    }
    row.push({ item, x, width: w });
    x += w + L.itemGap;
  });
  if (row.length > 0) {
    rows.push(row);
  }
  return rows;
}

export function layoutLegend(model: LegendModel | null, availableWidth: number): LegendLayout {
  const L = LEGEND_LAYOUT;
  const empty: LegendLayout = {
    form: 'list',
    width: 0,
    height: 0,
    barW: 0,
    stepW: 0,
    rows: [],
    bodyY: 0,
    keys: [],
  };
  if (!model) {
    return empty;
  }

  const avail = Math.max(120, (availableWidth || 0) - L.padX * 2);
  const bodyY = L.padTop + L.titleH;
  const keys = stateKeys(model);
  const keysW = keysWidth(keys);

  /** Both bar forms place their keys the same way: beside the bar when they fit,
   * on their own row underneath when they don't. */
  const barKeys = (barW: number, scaleRight: number) => {
    // the bar's own labels already reserve barLabelH below it
    const scaleBottom = bodyY + L.barH + L.barLabelH;
    if (keys.length === 0) {
      return { keys: [] as LegendKeyEntry[], right: scaleRight, bottom: scaleBottom };
    }
    const besideX = L.padX + barW + L.keyGap;
    if (besideX + keysW <= avail) {
      // centred on the bar, so the keys cost no height at all
      return {
        keys: placeKeys(keys, besideX, bodyY + (L.barH - L.swatch) / 2),
        right: Math.max(scaleRight, besideX + keysW),
        bottom: scaleBottom,
      };
    }
    return {
      keys: placeKeys(keys, L.padX, scaleBottom),
      right: Math.max(scaleRight, L.padX + keysW),
      bottom: scaleBottom + L.rowStep,
    };
  };

  // --- continuous bar -------------------------------------------------
  if (model.kind === 'gradient') {
    const barW = Math.min(L.gradientW, avail);
    const widestTick = model.ticks.reduce((m, t) => Math.max(m, textW(t.label)), 0);
    const placed = barKeys(barW, Math.max(L.padX + barW + widestTick / 2, L.padX + textW(model.title)));
    return {
      form: 'bar',
      width: placed.right + L.padX,
      height: placed.bottom + L.padBottom,
      barW,
      stepW: 0,
      rows: [],
      bodyY,
      keys: placed.keys,
    };
  }

  // --- stepped threshold bar, when the boundary labels can fit ---------
  if (model.kind === 'thresholds' && model.items.length > 1) {
    // one label sits under each internal division
    const widestBoundary = model.items.slice(1).reduce((m, item) => Math.max(m, textW(item.fromLabel)), 0);
    // a bounded first step also prints its value at the bar's left edge; keep that
    // start-anchored label clear of the centred label at the first division
    const firstW = textW(model.items[0].fromLabel);
    const stepW = Math.max(L.minStepW, widestBoundary + 8, firstW + widestBoundary / 2 + 6);
    const barW = stepW * model.items.length;
    if (barW <= avail) {
      const placed = barKeys(barW, Math.max(L.padX + barW, L.padX + textW(model.title)));
      return {
        form: 'bar',
        width: placed.right + L.padX,
        height: placed.bottom + L.padBottom,
        barW,
        stepW,
        rows: [],
        bodyY,
        keys: placed.keys,
      };
    }
  }

  // --- wrapped swatch list (categorical, or thresholds that won't fit) --
  const rows = packRows(model.items, avail);
  const noteRows = model.truncated > 0 ? 1 : 0;
  const listBottom = bodyY + (rows.length + noteRows) * L.rowStep;
  const widestRow = rows.reduce((m, row) => {
    const last = row[row.length - 1];
    return last ? Math.max(m, last.x + last.width) : m;
  }, 0);

  // tack the keys onto the end of the last row when it has room — but never onto a
  // row a truncation note is about to follow
  const lastRow = rows[rows.length - 1];
  const lastRight = lastRow ? lastRow[lastRow.length - 1].x + lastRow[lastRow.length - 1].width : 0;
  const canShareRow = keys.length > 0 && noteRows === 0 && lastRow && lastRight + L.itemGap + keysW <= avail;
  let placedKeys: LegendKeyEntry[] = [];
  let keysRight = 0;
  let bottom = listBottom;
  if (keys.length > 0) {
    if (canShareRow) {
      const x = L.padX + lastRight + L.itemGap;
      placedKeys = placeKeys(keys, x, bodyY + (rows.length - 1) * L.rowStep);
      keysRight = x + keysW;
    } else {
      placedKeys = placeKeys(keys, L.padX, listBottom);
      keysRight = L.padX + keysW;
      bottom = listBottom + L.rowStep;
    }
  }

  return {
    form: 'list',
    width: Math.max(L.padX + widestRow, L.padX + textW(model.title), keysRight) + L.padX,
    height: bottom + L.padBottom,
    barW: 0,
    stepW: 0,
    rows,
    bodyY,
    keys: placedKeys,
  };
}

/** Total vertical space the legend needs, so the grid can be sized around it. */
export function estimateLegendHeight(model: LegendModel | null, availableWidth: number): number {
  return layoutLegend(model, availableWidth).height;
}
