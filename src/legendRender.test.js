import { createTheme, FieldType, getDisplayProcessor, ThresholdsMode, toDataFrame } from '@grafana/data';
import { buildLegend, layoutLegend } from './legend';
import { renderLegend } from './legendRender.js';

const theme = createTheme();

function makeField(config = {}, values = [0, 5, 10, 20, 50, 100]) {
  const frame = toDataFrame({ fields: [{ name: 'gbps', type: FieldType.number, values, config }] });
  const field = frame.fields[0];
  field.display = getDisplayProcessor({ field, theme });
  return field;
}

const steps = (...pairs) => pairs.map(([value, color]) => ({ value, color }));

const options = { showLegend: true, legendType: 'auto', colorMode: 'standard', valueText: 'Gbps' };

const renderOpts = {
  availableWidth: 600,
  cornerRadius: 2,
  nullColor: '#e6e6e6',
  defaultColor: '#dddddd',
  distinctNoData: true,
  noDataStroke: '#cccccc',
};

function ctx(values = [0, 5, 10, 20, 50, 100], extra = {}) {
  const min = Math.min(...values);
  const max = Math.max(...values);
  return {
    dataMin: min,
    dataMax: max,
    domain: { min, max },
    colorScale: null,
    colorMap: () => '#336699',
    uniqueValues: values,
    hasNull: false,
    hasNoData: false,
    ...extra,
  };
}

/** Render into a detached container and hand back the container + legend svg. */
function draw(model, width = 600, handlers = {}) {
  const el = document.createElement('div');
  document.body.appendChild(el);
  const calls = { range: [], state: [], clear: 0 };
  renderLegend(
    el,
    model,
    'test',
    { ...renderOpts, availableWidth: width },
    theme,
    {
      highlightByRange: (from, to) => calls.range.push([from, to]),
      highlightByState: (wantNull) => calls.state.push(wantNull),
      clearHighlight: () => (calls.clear += 1),
      ...handlers,
    }
  );
  return { el, svg: el.querySelector('svg'), calls };
}

const texts = (el) => [...el.querySelectorAll('text')].map((t) => t.textContent);
const titles = (el) => [...el.querySelectorAll('title')].map((t) => t.textContent);

const thresholdModel = (config, values, opts = {}) =>
  buildLegend(makeField(config), { ...options, ...opts }, theme, ctx(values));

describe('threshold legend rendering', () => {
  const three = {
    thresholds: {
      mode: ThresholdsMode.Absolute,
      steps: steps([-Infinity, 'green'], [20, 'orange'], [50, 'red']),
    },
  };

  test('draws one segment per step and prints the boundaries between them', () => {
    const { el } = draw(thresholdModel(three));
    // 3 step rects + 1 outline
    expect(el.querySelectorAll('rect')).toHaveLength(4);
    expect(texts(el)).toEqual(['Gbps', '20', '50']);
    expect(titles(el)).toEqual(['< 20', '20 – 50', '≥ 50']);
  });

  test('a legend min prints the floor at the left edge and bounds the first band', () => {
    const model = thresholdModel(three, undefined, { legendMin: 0 });
    const { el, calls } = draw(model);
    expect(texts(el)).toEqual(['Gbps', '0', '20', '50']);
    expect(titles(el)).toEqual(['0 – 20', '20 – 50', '≥ 50']);

    const floorLabel = [...el.querySelectorAll('text')].find((t) => t.textContent === '0');
    expect(+floorLabel.getAttribute('x')).toBe(4);
    expect(floorLabel.getAttribute('text-anchor')).toBe('start');

    // hovering the first step now highlights the bounded range, not everything below 20
    el.querySelectorAll('rect')[0].dispatchEvent(new MouseEvent('mouseover'));
    expect(calls.range).toEqual([[0, 20]]);
  });

  test('segments are contiguous and stay inside the declared svg width', () => {
    const model = thresholdModel(three);
    const { el, svg } = draw(model);
    const layout = layoutLegend(model, 600);
    const rects = [...el.querySelectorAll('rect')].slice(0, 3);
    rects.forEach((r, i) => {
      expect(+r.getAttribute('x')).toBeCloseTo(4 + i * layout.stepW);
      expect(+r.getAttribute('width')).toBeCloseTo(layout.stepW);
    });
    const right = +rects[2].getAttribute('x') + +rects[2].getAttribute('width');
    expect(right).toBeLessThanOrEqual(+svg.getAttribute('width'));
  });

  test('hovering a step highlights exactly that band', () => {
    const { el, calls } = draw(thresholdModel(three));
    const rects = [...el.querySelectorAll('rect')];
    rects[0].dispatchEvent(new MouseEvent('mouseover'));
    rects[1].dispatchEvent(new MouseEvent('mouseover'));
    rects[2].dispatchEvent(new MouseEvent('mouseover'));
    expect(calls.range).toEqual([
      [null, 20],
      [20, 50],
      [50, null],
    ]);
    rects[0].dispatchEvent(new MouseEvent('mouseout'));
    expect(calls.clear).toBe(1);
  });

  test('too many steps for the width fall back to a wrapped list', () => {
    const many = {
      thresholds: {
        mode: ThresholdsMode.Absolute,
        steps: steps([-Infinity, 'green']).concat(
          Array.from({ length: 9 }, (_, i) => ({ value: (i + 1) * 1000, color: 'red' }))
        ),
      },
    };
    const model = thresholdModel(many);
    const { el, svg } = draw(model, 200);
    expect(layoutLegend(model, 200).form).toBe('list');
    // every entry still gets a swatch and a readable band label
    expect(el.querySelectorAll('rect')).toHaveLength(10);
    expect(titles(el)).toHaveLength(10);
    // and the drawing stays within the svg it declared
    [...el.querySelectorAll('rect')].forEach((r) => {
      expect(+r.getAttribute('x') + +r.getAttribute('width')).toBeLessThanOrEqual(+svg.getAttribute('width'));
    });
  });
});

describe('gradient legend rendering', () => {
  test('emits a gradient fill with stops and a tick axis', () => {
    const model = buildLegend(makeField(), { ...options, colorMode: 'sequential' }, theme, {
      ...ctx([0, 100]),
      colorScale: (v) => (v > 50 ? '#ff0000' : '#0000ff'),
    });
    const { el } = draw(model);
    expect(el.querySelectorAll('linearGradient')).toHaveLength(1);
    expect(el.querySelectorAll('stop').length).toBeGreaterThan(1);
    const bar = el.querySelector('rect');
    expect(bar.getAttribute('fill')).toMatch(/^url\(#matrix-grad-/);
    expect(texts(el)).toEqual(['Gbps', '0', '50', '100']);
  });

  test('sweeping the bar highlights a window around the cursor value', () => {
    const model = buildLegend(makeField(), { ...options, colorMode: 'sequential' }, theme, {
      ...ctx([0, 100]),
      colorScale: () => '#123456',
    });
    const { el, calls } = draw(model);
    const bar = el.querySelector('rect');
    const ev = new MouseEvent('mousemove');
    Object.defineProperty(ev, 'offsetX', { get: () => 104 }); // padX 4 + half of a 200px bar
    bar.dispatchEvent(ev);
    expect(calls.range).toHaveLength(1);
    const [from, to] = calls.range[0];
    expect((from + to) / 2).toBeCloseTo(50, 5);
    expect(to - from).toBeGreaterThan(0);
  });

  test('the diverging midpoint is drawn as a line through the bar', () => {
    const model = buildLegend(
      makeField(),
      { ...options, colorMode: 'diverging', divergingMidpoint: 30 },
      theme,
      { ...ctx([0, 100]), colorScale: () => '#123456' }
    );
    const { el } = draw(model);
    expect(texts(el)).toContain('30');
    // the emphasized tick spans the bar height; plain ticks are 3px stubs
    const spans = [...el.querySelectorAll('line')].map((l) => +l.getAttribute('y2') - +l.getAttribute('y1'));
    expect(Math.max(...spans)).toBeGreaterThan(10);
  });
});

describe('categorical legend rendering', () => {
  test('wraps into rows instead of running off the panel', () => {
    const values = Array.from({ length: 40 }, (_, i) => i * 3);
    const model = buildLegend(makeField(), { ...options, legendType: 'categorical' }, theme, ctx(values));
    const { el, svg } = draw(model, 300);
    const layout = layoutLegend(model, 300);
    expect(layout.rows.length).toBeGreaterThan(1);
    const width = +svg.getAttribute('width');
    [...el.querySelectorAll('rect')].forEach((r) => {
      expect(+r.getAttribute('x') + +r.getAttribute('width')).toBeLessThanOrEqual(width);
    });
    // distinct y positions prove it actually wrapped
    expect(new Set([...el.querySelectorAll('rect')].map((r) => r.getAttribute('y'))).size).toBe(layout.rows.length);
  });

  test('summarizes the entries past the cap rather than drawing them', () => {
    const values = Array.from({ length: 200 }, (_, i) => i);
    const model = buildLegend(makeField(), { ...options, legendType: 'categorical' }, theme, ctx(values));
    const { el } = draw(model, 600);
    expect(el.querySelectorAll('rect')).toHaveLength(24);
    expect(texts(el)).toContain('+176 more');
  });
});

describe('null / no-data key', () => {
  test('is drawn only for the states present, and highlights them', () => {
    const model = buildLegend(
      makeField({ thresholds: { mode: ThresholdsMode.Absolute, steps: steps([-Infinity, 'green'], [50, 'red']) } }),
      options,
      theme,
      ctx([1, 2], { hasNull: true, hasNoData: true })
    );
    const { el, calls } = draw(model);
    expect(texts(el)).toEqual(expect.arrayContaining(['null', 'no data']));
    const keyRects = [...el.querySelectorAll('rect')].slice(-2);
    keyRects[0].dispatchEvent(new MouseEvent('mouseover'));
    keyRects[1].dispatchEvent(new MouseEvent('mouseover'));
    expect(calls.state).toEqual([true, false]);
  });

  test('sits beside the bar on one row rather than stacked underneath it', () => {
    const model = buildLegend(
      makeField({ thresholds: { mode: ThresholdsMode.Absolute, steps: steps([-Infinity, 'green'], [50, 'red']) } }),
      options,
      theme,
      ctx([1, 2], { hasNull: true, hasNoData: true })
    );
    const layout = layoutLegend(model, 600);
    const { el } = draw(model, 600);
    const keyRects = [...el.querySelectorAll('rect')].slice(-2);
    const y = keyRects.map((r) => +r.getAttribute('y'));
    const x = keyRects.map((r) => +r.getAttribute('x'));

    // same row, left to right, clear of the bar
    expect(y[0]).toBe(y[1]);
    expect(x[1]).toBeGreaterThan(x[0]);
    expect(x[0]).toBeGreaterThan(layout.barW);
    // inside the bar's vertical band, so they add no height
    expect(y[0]).toBeGreaterThanOrEqual(layout.bodyY);
    expect(y[0] + 12).toBeLessThanOrEqual(layout.bodyY + 14);
  });

  test('is absent when no such cells exist', () => {
    const model = buildLegend(
      makeField({ thresholds: { mode: ThresholdsMode.Absolute, steps: steps([-Infinity, 'green'], [50, 'red']) } }),
      options,
      theme,
      ctx()
    );
    const { el } = draw(model);
    expect(texts(el)).not.toContain('null');
    expect(texts(el)).not.toContain('no data');
  });
});

describe('the drawn legend never exceeds the box it declared', () => {
  test.each([
    ['thresholds', { thresholds: { mode: ThresholdsMode.Absolute, steps: steps([-Infinity, 'g'], [20, 'o'], [50, 'r']) } }, 'auto', 600],
    ['narrow thresholds', { thresholds: { mode: ThresholdsMode.Absolute, steps: steps([-Infinity, 'g'], [20, 'o'], [50, 'r']) } }, 'auto', 150],
    ['categorical', {}, 'categorical', 300],
    ['gradient', {}, 'gradient', 600],
  ])('%s', (_name, config, legendType, width) => {
    const model = buildLegend(makeField(config), { ...options, legendType }, theme, ctx([0, 5, 10, 20, 50, 100], { hasNull: true, hasNoData: true }));
    const { el, svg } = draw(model, width);
    const nodes = [...el.querySelectorAll('rect, text, line')];

    const declaredH = +svg.getAttribute('height');
    const lowest = nodes.reduce((m, node) => {
      const y = +(node.getAttribute('y') || node.getAttribute('y2') || 0);
      const h = +(node.getAttribute('height') || 0);
      return Math.max(m, y + h);
    }, 0);
    expect(lowest).toBeLessThanOrEqual(declaredH);

    // text advance is unmeasurable in jsdom, so this covers the boxes and rules —
    // enough to catch a key block placed off the right edge
    const declaredW = +svg.getAttribute('width');
    const rightmost = nodes.reduce((m, node) => {
      const x = +(node.getAttribute('x') || node.getAttribute('x2') || 0);
      const w = +(node.getAttribute('width') || 0);
      return Math.max(m, x + w);
    }, 0);
    expect(rightmost).toBeLessThanOrEqual(declaredW);
  });
});
