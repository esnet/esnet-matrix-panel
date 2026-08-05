import { createTheme, FieldType, getDisplayProcessor, ThresholdsMode, toDataFrame } from '@grafana/data';
import {
  buildLegend,
  CATEGORICAL_CAP,
  estimateLegendHeight,
  layoutLegend,
  LEGEND_LAYOUT,
  normalizeLegendType,
  resolveLegendKind,
} from './legend';
import { LegendModel } from './types';

const theme = createTheme();

/** A numeric value field with a real display processor, so legend labels are
 * formatted through exactly the same path the cells use. */
function makeField(overrides: any = {}, values: number[] = [0, 5, 10, 20, 50, 100]) {
  const frame = toDataFrame({
    fields: [{ name: 'gbps', type: FieldType.number, values, config: overrides }],
  });
  const field = frame.fields[0];
  field.display = getDisplayProcessor({ field, theme });
  return field;
}

const absoluteThresholds = {
  thresholds: {
    mode: ThresholdsMode.Absolute,
    steps: [
      { value: -Infinity, color: 'green' },
      { value: 20, color: 'orange' },
      { value: 50, color: 'red' },
    ],
  },
};

const baseOptions: any = {
  showLegend: true,
  legendType: 'auto',
  colorMode: 'standard',
  valueText: 'Gbps',
};

function ctxFor(values: number[] = [0, 5, 10, 20, 50, 100], extra: any = {}) {
  const min = Math.min(...values);
  const max = Math.max(...values);
  return {
    dataMin: min,
    dataMax: max,
    domain: { min, max },
    colorScale: null,
    colorMap: (v: any) => (typeof v === 'number' && v >= 50 ? '#ff0000' : '#00ff00'),
    uniqueValues: values,
    hasNull: false,
    hasNoData: false,
    ...extra,
  };
}

describe('legend kind resolution', () => {
  test('standard color mode with thresholds gives a threshold legend', () => {
    const field = makeField(absoluteThresholds);
    expect(resolveLegendKind(field, baseOptions, true)).toBe('thresholds');
  });

  test("the panel's own ramps give a gradient legend", () => {
    const field = makeField(absoluteThresholds);
    expect(resolveLegendKind(field, { ...baseOptions, colorMode: 'sequential' }, true)).toBe('gradient');
    expect(resolveLegendKind(field, { ...baseOptions, colorMode: 'diverging' }, true)).toBe('gradient');
  });

  test('a continuous Grafana color scheme gives a gradient legend', () => {
    const field = makeField({ ...absoluteThresholds, color: { mode: 'continuous-GrYlRd' } });
    expect(resolveLegendKind(field, baseOptions, true)).toBe('gradient');
  });

  test('a fixed color gives a categorical legend', () => {
    const field = makeField({ color: { mode: 'fixed', fixedColor: 'blue' } });
    expect(resolveLegendKind(field, baseOptions, true)).toBe('categorical');
  });

  test('non-numeric values give a categorical legend whatever the color mode', () => {
    const field = makeField(absoluteThresholds);
    expect(resolveLegendKind(field, { ...baseOptions, colorMode: 'sequential' }, false)).toBe('categorical');
  });

  test('an explicit Legend Type overrides auto-detection', () => {
    const field = makeField(absoluteThresholds);
    expect(resolveLegendKind(field, { ...baseOptions, legendType: 'categorical' }, true)).toBe('categorical');
    expect(resolveLegendKind(field, { ...baseOptions, legendType: 'gradient' }, true)).toBe('gradient');
  });

  test('legend types saved by older dashboards still resolve', () => {
    // 'range' was the old continuous option; it now defers to Auto
    expect(normalizeLegendType('range')).toBe('auto');
    expect(normalizeLegendType('categorical')).toBe('categorical');
    expect(normalizeLegendType(undefined)).toBe('auto');
  });
});

describe('threshold legend is built from the thresholds, not the data range', () => {
  test('one entry per step, with the configured boundaries', () => {
    const model = buildLegend(makeField(absoluteThresholds), baseOptions, theme, ctxFor());
    expect(model.kind).toBe('thresholds');
    expect(model.items).toHaveLength(3);
    expect(model.items.map((i) => [i.from, i.to])).toEqual([
      [null, 20],
      [20, 50],
      [50, null],
    ]);
  });

  test('boundary labels never print an infinity', () => {
    const model = buildLegend(makeField(absoluteThresholds), baseOptions, theme, ctxFor());
    expect(model.items[0].label).toBe('< 20');
    expect(model.items[1].label).toBe('20 – 50');
    expect(model.items[2].label).toBe('≥ 50');
    expect(JSON.stringify(model.items)).not.toContain('Infinity');
  });

  test('a legend min floors the first band instead of leaving it unbounded', () => {
    const model = buildLegend(makeField(absoluteThresholds), { ...baseOptions, legendMin: 0 }, theme, ctxFor());
    expect(model.items[0].from).toBe(0);
    expect(model.items[0].label).toBe('0 – 20');
    // the floor is printed at the bar's left edge
    expect(model.items[0].fromLabel).toBe('0');
    // the rest of the scale is untouched
    expect(model.items.map((i) => i.to)).toEqual([20, 50, null]);
  });

  test('a non-zero legend min works, and omitting it keeps the unbounded reading', () => {
    const floored = buildLegend(makeField(absoluteThresholds), { ...baseOptions, legendMin: 10 }, theme, ctxFor());
    expect(floored.items[0].label).toBe('10 – 20');

    const open = buildLegend(makeField(absoluteThresholds), baseOptions, theme, ctxFor());
    expect(open.items[0].from).toBeNull();
    expect(open.items[0].label).toBe('< 20');
    expect(open.items[0].fromLabel).toBe('');
  });

  test('labels carry the field unit, matching the cells', () => {
    const field = makeField({ ...absoluteThresholds, unit: 'bps' });
    const model = buildLegend(field, baseOptions, theme, ctxFor());
    // getDisplayProcessor scales bps and appends a suffix
    expect(model.items[1].label).toMatch(/–/);
    expect(model.items[2].label.startsWith('≥ ')).toBe(true);
  });

  test('a step above every data point is still shown', () => {
    // data tops out at 30 but a threshold sits at 90
    const field = makeField({
      thresholds: {
        mode: ThresholdsMode.Absolute,
        steps: [
          { value: -Infinity, color: 'green' },
          { value: 90, color: 'red' },
        ],
      },
    });
    const model = buildLegend(field, baseOptions, theme, ctxFor([1, 10, 30]));
    expect(model.items).toHaveLength(2);
    expect(model.items[1].from).toBe(90);
  });

  test('steps are sorted even when the config is out of order', () => {
    const field = makeField({
      thresholds: {
        mode: ThresholdsMode.Absolute,
        steps: [
          { value: 50, color: 'red' },
          { value: -Infinity, color: 'green' },
          { value: 20, color: 'orange' },
        ],
      },
    });
    const model = buildLegend(field, baseOptions, theme, ctxFor());
    expect(model.items.map((i) => i.to)).toEqual([20, 50, null]);
  });

  test('step colors are resolved through the theme', () => {
    const model = buildLegend(makeField(absoluteThresholds), baseOptions, theme, ctxFor());
    model.items.forEach((item) => {
      expect(item.color).toMatch(/^(#|rgb)/);
    });
    expect(new Set(model.items.map((i) => i.color)).size).toBe(3);
  });

  test('percentage thresholds convert to absolute values over the field range', () => {
    const field = makeField(
      {
        min: 0,
        max: 200,
        thresholds: {
          mode: ThresholdsMode.Percentage,
          steps: [
            { value: -Infinity, color: 'green' },
            { value: 25, color: 'orange' },
            { value: 75, color: 'red' },
          ],
        },
      },
      [0, 100, 200]
    );
    const model = buildLegend(field, baseOptions, theme, ctxFor([0, 100, 200]));
    // 25% and 75% of 0..200
    expect(model.items[1].from).toBe(50);
    expect(model.items[2].from).toBe(150);
  });

  test('with no thresholds configured it falls back to a gradient rather than nothing', () => {
    const field = makeField({ thresholds: { mode: ThresholdsMode.Absolute, steps: [] } });
    const model = buildLegend(field, baseOptions, theme, ctxFor());
    expect(model.kind).toBe('gradient');
    expect(model.stops.length).toBeGreaterThan(1);
  });
});

describe('gradient legend', () => {
  test('samples the panel ramp across the color domain', () => {
    const colorScale = (v: number) => (v > 50 ? '#ff0000' : '#0000ff');
    const model = buildLegend(
      makeField(absoluteThresholds),
      { ...baseOptions, colorMode: 'sequential' },
      theme,
      ctxFor([0, 100], { colorScale })
    );
    expect(model.kind).toBe('gradient');
    expect(model.stops.length).toBeGreaterThan(1);
    expect(model.stops[0].offset).toBe(0);
    expect(model.stops[model.stops.length - 1].offset).toBe(1);
    expect(model.stops[0].color).toBe('#0000ff');
    expect(model.stops[model.stops.length - 1].color).toBe('#ff0000');
  });

  test('ticks label the ends and middle of the domain', () => {
    const model = buildLegend(
      makeField(),
      { ...baseOptions, colorMode: 'sequential' },
      theme,
      ctxFor([0, 100], { colorScale: () => '#123456' })
    );
    expect(model.ticks.map((t) => t.value)).toEqual([0, 50, 100]);
    expect(model.ticks[0].offset).toBe(0);
    expect(model.ticks[2].offset).toBe(1);
  });

  test('diverging adds an emphasized midpoint tick', () => {
    const model = buildLegend(
      makeField(),
      { ...baseOptions, colorMode: 'diverging', divergingMidpoint: 20 },
      theme,
      ctxFor([0, 100], { colorScale: () => '#123456' })
    );
    const mid = model.ticks.find((t) => t.emphasis);
    expect(mid).toBeDefined();
    expect(mid!.value).toBe(20);
    expect(mid!.offset).toBeCloseTo(0.2);
  });

  test('a midpoint sitting at the centre replaces the centre tick instead of stacking on it', () => {
    const model = buildLegend(
      makeField(),
      { ...baseOptions, colorMode: 'diverging', divergingMidpoint: 50 },
      theme,
      ctxFor([0, 100], { colorScale: () => '#123456' })
    );
    expect(model.ticks).toHaveLength(3);
    expect(model.ticks.filter((t) => t.emphasis)).toHaveLength(1);
  });
});

describe('categorical legend', () => {
  test('caps high-cardinality fields instead of drawing one entry per value', () => {
    const many = Array.from({ length: 200 }, (_, i) => i);
    const model = buildLegend(makeField(), { ...baseOptions, legendType: 'categorical' }, theme, ctxFor(many));
    expect(model.items).toHaveLength(CATEGORICAL_CAP);
    expect(model.truncated).toBe(200 - CATEGORICAL_CAP);
  });

  test('entries are sorted and stand for their exact value', () => {
    const model = buildLegend(
      makeField(),
      { ...baseOptions, legendType: 'categorical' },
      theme,
      ctxFor([30, 10, 20])
    );
    expect(model.items.map((i) => i.from)).toEqual([10, 20, 30]);
    model.items.forEach((item) => expect(item.from).toBe(item.to));
    expect(model.truncated).toBe(0);
  });
});

describe('null / no-data key', () => {
  test('is flagged only when such cells exist', () => {
    const off = buildLegend(makeField(absoluteThresholds), baseOptions, theme, ctxFor());
    expect(off.states).toEqual({ hasNull: false, hasNoData: false });
    const on = buildLegend(
      makeField(absoluteThresholds),
      baseOptions,
      theme,
      ctxFor([1, 2], { hasNull: true, hasNoData: true })
    );
    expect(on.states).toEqual({ hasNull: true, hasNoData: true });
  });
});

describe('layout', () => {
  const thresholdModel = () => buildLegend(makeField(absoluteThresholds), baseOptions, theme, ctxFor());

  test('a threshold bar that fits stays a bar', () => {
    const layout = layoutLegend(thresholdModel(), 600);
    expect(layout.form).toBe('bar');
    expect(layout.barW).toBeLessThanOrEqual(600);
    expect(layout.stepW).toBeGreaterThan(0);
  });

  test('a threshold bar that will not fit wraps into a list', () => {
    const many = {
      thresholds: {
        mode: ThresholdsMode.Absolute,
        steps: [{ value: -Infinity, color: 'green' }].concat(
          Array.from({ length: 20 }, (_, i) => ({ value: (i + 1) * 1000, color: 'red' }))
        ),
      },
    };
    const model = buildLegend(makeField(many), baseOptions, theme, ctxFor());
    const layout = layoutLegend(model, 200);
    expect(layout.form).toBe('list');
    expect(layout.rows.length).toBeGreaterThan(1);
  });

  test('nothing is laid out wider than the panel', () => {
    const many = Array.from({ length: 60 }, (_, i) => i * 11);
    const model = buildLegend(makeField(), { ...baseOptions, legendType: 'categorical' }, theme, ctxFor(many));
    const layout = layoutLegend(model, 400);
    layout.rows.forEach((row) => {
      const last = row[row.length - 1];
      expect(last.x + last.width).toBeLessThanOrEqual(400);
    });
  });

  test('height grows with entries and shrinks as the panel widens', () => {
    const many = Array.from({ length: 20 }, (_, i) => i * 7);
    const model = buildLegend(makeField(), { ...baseOptions, legendType: 'categorical' }, theme, ctxFor(many));
    const narrow = estimateLegendHeight(model, 200);
    const wide = estimateLegendHeight(model, 1200);
    expect(narrow).toBeGreaterThan(wide);

    const few = buildLegend(makeField(), { ...baseOptions, legendType: 'categorical' }, theme, ctxFor([1, 2]));
    expect(estimateLegendHeight(few, 400)).toBeLessThan(estimateLegendHeight(model, 400));
  });

  test('the null / no-data keys ride beside the bar, costing width but no height', () => {
    const plain = thresholdModel();
    const keyed = buildLegend(
      makeField(absoluteThresholds),
      baseOptions,
      theme,
      ctxFor([1, 2], { hasNull: true, hasNoData: true })
    );
    expect(estimateLegendHeight(keyed, 600)).toBe(estimateLegendHeight(plain, 600));

    const layout = layoutLegend(keyed, 600);
    const plainLayout = layoutLegend(plain, 600);
    expect(layout.width).toBeGreaterThan(plainLayout.width);
    expect(layout.keys.map((k) => k.kind)).toEqual(['null', 'noData']);
    // one row, clear of the bar, and inside the bar's vertical band
    layout.keys.forEach((key) => {
      expect(key.x).toBeGreaterThan(LEGEND_LAYOUT.padX + layout.barW);
      expect(key.y).toBe(layout.keys[0].y);
      expect(key.y).toBeGreaterThanOrEqual(layout.bodyY);
      expect(key.y + LEGEND_LAYOUT.swatch).toBeLessThanOrEqual(layout.bodyY + LEGEND_LAYOUT.barH);
    });
    expect(layout.keys[1].x).toBeGreaterThan(layout.keys[0].x);
  });

  test('the keys drop below the bar when there is no room beside it', () => {
    const keyed = buildLegend(
      makeField(absoluteThresholds),
      baseOptions,
      theme,
      ctxFor([1, 2], { hasNull: true, hasNoData: true })
    );
    const narrow = layoutLegend(keyed, 150);
    expect(narrow.form).toBe('bar');
    narrow.keys.forEach((key) => {
      expect(key.y).toBeGreaterThan(narrow.bodyY + LEGEND_LAYOUT.barH);
    });
    expect(narrow.height).toBeGreaterThan(estimateLegendHeight(thresholdModel(), 150));
  });

  test('a list legend puts the keys on the last row when it fits', () => {
    const keyed = buildLegend(
      makeField(),
      { ...baseOptions, legendType: 'categorical' },
      theme,
      ctxFor([1, 2], { hasNull: true, hasNoData: true })
    );
    const layout = layoutLegend(keyed, 600);
    expect(layout.form).toBe('list');
    const lastRow = layout.rows[layout.rows.length - 1];
    const lastEntry = lastRow[lastRow.length - 1];
    expect(layout.keys[0].y).toBe(layout.bodyY + (layout.rows.length - 1) * LEGEND_LAYOUT.rowStep);
    expect(layout.keys[0].x).toBeGreaterThan(LEGEND_LAYOUT.padX + lastEntry.x + lastEntry.width);
    const unkeyed = { ...keyed, states: { hasNull: false, hasNoData: false } } as LegendModel;
    expect(layout.height).toBe(estimateLegendHeight(unkeyed, 600));
  });

  test('a truncation note reserves its own row', () => {
    const many = Array.from({ length: 200 }, (_, i) => i);
    const model = buildLegend(makeField(), { ...baseOptions, legendType: 'categorical' }, theme, ctxFor(many));
    const capped = { ...model, truncated: 0 } as LegendModel;
    expect(estimateLegendHeight(model, 600)).toBeGreaterThan(estimateLegendHeight(capped, 600));
  });

  test('a missing legend reserves nothing', () => {
    expect(estimateLegendHeight(null, 600)).toBe(0);
  });
});
