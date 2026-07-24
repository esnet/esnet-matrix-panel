import { toDataFrame, FieldType, createTheme, getDisplayProcessor } from '@grafana/data';
import { parseData } from './dataParser';

const theme = createTheme();

function makeData(withCategories = false, values?: any[]) {
  const src = ['a', 'a', 'a', 'b', 'b', 'c', 'c'];
  const tgt = ['x', 'y', 'z', 'x', 'y', 'x', 'z'];
  const gbps = values ?? [10, 5, null, 0, 20, 7, 100];
  const fields: any[] = [
    { name: 'source', type: FieldType.string, values: src },
    { name: 'target', type: FieldType.string, values: tgt },
    { name: 'gbps', type: FieldType.number, values: gbps },
  ];
  if (withCategories) {
    fields.push({ name: 'src_region', type: FieldType.string, values: ['R1', 'R1', 'R1', 'R2', 'R2', 'R1', 'R2'] });
    fields.push({ name: 'dst_region', type: FieldType.string, values: ['C1', 'C2', 'C2', 'C1', 'C2', 'C1', 'C2'] });
  }
  const frame = toDataFrame({ fields });
  const vf = frame.fields.find((f) => f.type === FieldType.number)!;
  vf.display = getDisplayProcessor({ field: vf, theme });
  return { series: [frame] } as any;
}

const base: any = {
  sourceField: 'source',
  targetField: 'target',
  valueField: 'gbps',
  sourceText: 'From',
  targetText: 'To',
  valueText: 'Gbps',
  cellSize: 20,
  cellPadding: 5,
  txtLength: 50,
  txtSize: 10,
  nullColor: '#E6E6E6',
  defaultColor: '#E6E6E6',
};

const combos: Array<[string, any, boolean]> = [
  ['sequential + legend', { ...base, colorMode: 'sequential', showLegend: true, legendType: 'range' }, false],
  ['diverging + midpoint', { ...base, colorMode: 'diverging', divergingMidpoint: 20, showLegend: true, legendType: 'range' }, false],
  ['standard + categorical legend', { ...base, colorMode: 'standard', showLegend: true, legendType: 'categorical' }, false],
  ['manual domain', { ...base, colorDomainMode: 'manual', colorDomainMin: 0, colorDomainMax: 50, showLegend: true }, false],
  ['sort total', { ...base, rowSort: 'total', colSort: 'total' }, false],
  ['sort cluster', { ...base, rowSort: 'cluster', colSort: 'cluster' }, false],
  ['grouping + cluster', { ...base, enableColGrouping: true, colCategoryField: 'dst_region', enableRowGrouping: true, rowCategoryField: 'src_region', rowSort: 'cluster', colSort: 'cluster', showLegend: true }, true],
];

describe('parseData runs without runtime errors across option combos', () => {
  test.each(combos)('%s', (_n, options, withCats) => {
    const parsed = parseData(makeData(withCats), options, theme);
    expect(parsed).toBeTruthy();
    expect(Array.isArray(parsed.rows)).toBe(true);
    expect(Array.isArray(parsed.columns)).toBe(true);
    expect(Array.isArray(parsed.data)).toBe(true);
    // data matrix shape matches rows x columns
    expect(parsed.data!.length).toBe(parsed.rows!.length);
    (parsed.data as any[][]).forEach((row: any[]) => expect(row.length).toBe(parsed.columns!.length));
    // marginal totals align to axes
    expect(parsed.rowTotals.length).toBe(parsed.rows!.length);
    expect(parsed.colTotals.length).toBe(parsed.columns!.length);
  });
});

describe('null vs no-data distinction', () => {
  test('null value cell is flagged isNull; missing pair stays -1 (no data)', () => {
    const parsed = parseData(makeData(false), { ...base }, theme);
    const ri = parsed.rows!.indexOf('a');
    const ci = parsed.columns!.indexOf('z');
    // a->z was present with a null value => null cell
    const nullCell = parsed.data![ri][ci];
    expect(nullCell).not.toBe(-1);
    expect(nullCell.isNull).toBe(true);
    // b->z never appeared in the data => no-data sentinel
    const bi = parsed.rows!.indexOf('b');
    const bz = parsed.data![bi][parsed.columns!.indexOf('z')];
    expect(bz).toBe(-1);
  });
});

describe('cluster seriation returns a valid permutation', () => {
  test('rows/columns are a permutation of the name-sorted set', () => {
    const named = parseData(makeData(false), { ...base, rowSort: 'name', colSort: 'name' }, theme);
    const clustered = parseData(makeData(false), { ...base, rowSort: 'cluster', colSort: 'cluster' }, theme);
    expect([...clustered.rows!].sort()).toEqual([...named.rows!].sort());
    expect([...clustered.columns!].sort()).toEqual([...named.columns!].sort());
  });
});

describe('color domain is computed from the data', () => {
  test('auto valueDomain reflects the data min/max (values [0..100])', () => {
    const parsed = parseData(makeData(false), { ...base, colorMode: 'sequential' }, theme);
    expect(parsed.valueDomain).toEqual({ min: 0, max: 100 });
  });
  test('manual valueDomain reflects manual min/max', () => {
    const parsed = parseData(makeData(false), { ...base, colorMode: 'sequential', colorDomainMode: 'manual', colorDomainMin: -10, colorDomainMax: 200 }, theme);
    expect(parsed.valueDomain).toEqual({ min: -10, max: 200 });
  });
  test('sequential cells actually vary in color across the domain', () => {
    const parsed = parseData(makeData(false), { ...base, colorMode: 'sequential' }, theme);
    const colors = new Set<string>();
    (parsed.data as any[][]).forEach((row: any[]) =>
      row.forEach((cell: any) => {
        if (cell !== -1 && !cell.isNull) {
          colors.add(cell.color);
        }
      })
    );
    // if the domain were empty/broken every cell would share one color
    expect(colors.size).toBeGreaterThan(1);
  });
});

describe('sort by total orders by descending marginal sum', () => {
  test('row with the largest total sorts first', () => {
    // totals: a=15, b=20, c=107  => expected order c, b, a
    const parsed = parseData(makeData(false), { ...base, rowSort: 'total' }, theme);
    expect(parsed.rows![0]).toBe('c');
  });
});

describe('empty / degenerate inputs do not throw', () => {
  test('no series returns null data', () => {
    const parsed = parseData({ series: [] } as any, { ...base }, theme);
    expect(parsed.data).toBeNull();
  });
  test('all-null values still parse (every present cell is null)', () => {
    const parsed = parseData(makeData(false, [null, null, null, null, null, null, null]), { ...base }, theme);
    expect(Array.isArray(parsed.data)).toBe(true);
  });
});
