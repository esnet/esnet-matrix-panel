import { DataFrameView } from '@grafana/data';

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

// ---- Color ramp helpers (self-contained, no d3 dependency) ----
function hexToRgb(h: string): [number, number, number] {
  let s = h.replace('#', '');
  if (s.length === 3) {
    s = s[0] + s[0] + s[1] + s[1] + s[2] + s[2];
  }
  return [parseInt(s.slice(0, 2), 16), parseInt(s.slice(2, 4), 16), parseInt(s.slice(4, 6), 16)];
}
function rgbToHex(r: number, g: number, b: number): string {
  const c = (x: number) => Math.round(Math.max(0, Math.min(255, x))).toString(16).padStart(2, '0');
  return '#' + c(r) + c(g) + c(b);
}
// Build an interpolator over a list of hex stops, t in [0,1].
// Non-finite input (NaN/Infinity) falls back to the low end rather than throwing.
function makeRamp(stops: string[]): (t: number) => string {
  const rgb = stops.map(hexToRgb);
  const n = rgb.length - 1;
  return (t: number) => {
    if (!isFinite(t)) {
      t = 0;
    }
    t = Math.max(0, Math.min(1, t));
    const f = t * n;
    let i = Math.floor(f);
    if (i < 0) {
      i = 0;
    } else if (i > n - 1) {
      i = n - 1;
    }
    const frac = f - i;
    const a = rgb[i];
    const b = rgb[i + 1];
    return rgbToHex(a[0] + (b[0] - a[0]) * frac, a[1] + (b[1] - a[1]) * frac, a[2] + (b[2] - a[2]) * frac);
  };
}

// Sequential single-hue blue ramp, light -> dark (dataviz reference palette)
const SEQ_STOPS = ['#cde2fb', '#9ec5f4', '#6da7ec', '#3987e5', '#256abf', '#184f95', '#0d366b'];

/**
 * Return a field's values as a plain array, tolerant of Grafana's differing
 * representations: a plain array (Grafana 13+ runtime), a Vector with toArray(),
 * or a Vector-like object with length + get(). Using Object.values() directly on a
 * Vector returns the internal buffer, not the values — this normalizes that away.
 */
function fieldValuesArray(field: any): any[] {
  const v = field && field.values;
  if (!v) {
    return [];
  }
  if (Array.isArray(v)) {
    return v;
  }
  if (typeof v.toArray === 'function') {
    return v.toArray();
  }
  if (typeof v.length === 'number' && typeof v.get === 'function') {
    const out: any[] = [];
    for (let i = 0; i < v.length; i++) {
      out.push(v.get(i));
    }
    return out;
  }
  return Object.values(v);
}

/**
 * Spectral seriation: order rows and columns so similar ones sit next to each other,
 * revealing block structure. Builds the value matrix, column-centers it, then finds
 * the dominant right singular vector via power iteration (dependency-free). Rows are
 * ordered by their projection onto that vector; columns by the vector itself.
 * Returns null score maps when the matrix is too small or degenerate (caller falls
 * back to name order). Deterministic (fixed seed) so re-renders don't reshuffle.
 */
function computeSeriation(
  rowKeys: string[],
  colKeys: string[],
  cellRaw: Map<string, number>
): { rowScores: Map<string, number> | null; colScores: Map<string, number> | null } {
  const nR = rowKeys.length;
  const nC = colKeys.length;
  const none = { rowScores: null, colScores: null };
  if (nR < 3 || nC < 3) {
    return none;
  }

  // build value matrix M (nR x nC)
  const M: number[][] = [];
  for (let i = 0; i < nR; i++) {
    const row = new Array(nC);
    for (let j = 0; j < nC; j++) {
      row[j] = cellRaw.get(`${rowKeys[i]}||${colKeys[j]}`) || 0;
    }
    M.push(row);
  }
  // column-center (PCA): removes the all-positive component so the ordering reflects
  // covariance structure rather than raw totals
  for (let j = 0; j < nC; j++) {
    let s = 0;
    for (let i = 0; i < nR; i++) {
      s += M[i][j];
    }
    const mean = s / nR;
    for (let i = 0; i < nR; i++) {
      M[i][j] -= mean;
    }
  }

  const normalize = (x: number[]): number[] | null => {
    let n = 0;
    for (const e of x) {
      n += e * e;
    }
    n = Math.sqrt(n);
    if (n < 1e-12) {
      return null;
    }
    return x.map((e) => e / n);
  };

  // deterministic non-degenerate seed
  let v: number[] | null = new Array(nC).fill(0).map((_, j) => Math.cos(j * 0.7) + 1.5);
  v = normalize(v);
  if (!v) {
    return none;
  }
  // power iteration on M^T M without materializing it: v <- normalize(M^T (M v))
  for (let iter = 0; iter < 60; iter++) {
    const u = new Array(nR).fill(0);
    for (let i = 0; i < nR; i++) {
      let s = 0;
      const Mi = M[i];
      for (let j = 0; j < nC; j++) {
        s += Mi[j] * v![j];
      }
      u[i] = s;
    }
    const w = new Array(nC).fill(0);
    for (let i = 0; i < nR; i++) {
      const Mi = M[i];
      const ui = u[i];
      for (let j = 0; j < nC; j++) {
        w[j] += Mi[j] * ui;
      }
    }
    const nv = normalize(w);
    if (!nv) {
      return none;
    }
    v = nv;
  }

  // final row scores = M v (projection onto the dominant direction)
  const rowScores = new Map<string, number>();
  for (let i = 0; i < nR; i++) {
    let s = 0;
    const Mi = M[i];
    for (let j = 0; j < nC; j++) {
      s += Mi[j] * v![j];
    }
    rowScores.set(rowKeys[i], s);
  }
  const colScores = new Map<string, number>();
  for (let j = 0; j < nC; j++) {
    colScores.set(colKeys[j], v![j]);
  }
  return { rowScores, colScores };
}

export function parseData(data: { series: any[] }, options: any, theme: any) {
  const series = data.series[0];
  if (series === null || series === undefined) {
    // no data, bail
    console.error('no data');
    return { rows: null, columns: null, colMetadata: [], colCategories: [], rowMetadata: [], rowCategories: [], data: null, legend: null, rowTotals: [], colTotals: [], valueDomain: null };
  }

  const frame = new DataFrameView(series);
  if (frame === null || frame === undefined) {
    // no data, bail
    console.error('no data');
    return { rows: null, columns: null, colMetadata: [], colCategories: [], rowMetadata: [], rowCategories: [], data: null, legend: null, rowTotals: [], colTotals: [], valueDomain: null };
  }
  // set fields
  let sourceKey = options.sourceField;
  let targetKey = options.targetField;
  let colCategoryKey = options.colCategoryField;
  let rowCategoryKey = options.rowCategoryField;
  if (!sourceKey) {
    sourceKey = 0;
  }
  if (!targetKey) {
    targetKey = 1;
  }

  // assign valueField to the specified field or use the first number field by default
  const val = options.valueField;
  const valueField = val
    ? data.series.map((series: { fields: any[] }) => series.fields.find((field: { name: any }) => field.name === val))
    : data.series.map((series: { fields: any[] }) =>
        series.fields.find((field: { type: string }) => field.type === 'number')
      );
  const valKey = valueField[0].name;

  // ---- Determine the value domain (min/max) for the built-in color ramps ----
  let allNumericValues: number[] = fieldValuesArray(frame.fields[valKey]).filter(
    (v) => typeof v === 'number' && !isNaN(v)
  );
  const dataMin = allNumericValues.length ? Math.min(...allNumericValues) : 0;
  const dataMax = allNumericValues.length ? Math.max(...allNumericValues) : 0;
  // Effective color domain: auto (data min/max) or manual (fixed, for comparable panels)
  let domainMin = dataMin;
  let domainMax = dataMax;
  if (options.colorDomainMode === 'manual') {
    if (typeof options.colorDomainMin === 'number') {
      domainMin = options.colorDomainMin;
    }
    if (typeof options.colorDomainMax === 'number') {
      domainMax = options.colorDomainMax;
    }
  }
  const valueDomain = allNumericValues.length || options.colorDomainMode === 'manual' ? { min: domainMin, max: domainMax } : null;

  // ---- Build the color scale for the chosen colorMode ----
  const colorMode = options.colorMode || 'sequential';
  const isDark = !!theme.isDark;
  let colorScale: ((v: number) => string) | null = null;
  if (colorMode === 'sequential') {
    // In dark mode flip the ramp so high magnitude reads bright, low recedes to the surface
    const stops = isDark ? [...SEQ_STOPS].reverse() : SEQ_STOPS;
    const ramp = makeRamp(stops);
    colorScale = (v: number) => {
      if (domainMax === domainMin) {
        return ramp(isDark ? 1 : 0.5);
      }
      return ramp((v - domainMin) / (domainMax - domainMin));
    };
  } else if (colorMode === 'diverging') {
    const mid = typeof options.divergingMidpoint === 'number' ? options.divergingMidpoint : 0;
    const gray = isDark ? '#383835' : '#f0efec';
    // blue (low) <-> neutral gray (mid) <-> red (high)
    const ramp = makeRamp(['#184f95', '#3987e5', gray, '#e34948', '#b3261e']);
    const maxAbs = Math.max(Math.abs(mid - domainMin), Math.abs(domainMax - mid)) || 1;
    colorScale = (v: number) => ramp(0.5 + 0.5 * ((v - mid) / maxAbs));
  }

  // function that maps value to color specified by Standard Options panel.
  // if value is null or was not returned by query, use different value
  const nullColor = theme.visualization.getColorByName(options.nullColor);
  const defaultColor = theme.visualization.getColorByName(options.defaultColor);
  function colorMap(v: any) {
    if (v == null) {
      return nullColor;
    } else if (v === -1) {
      return defaultColor;
    } else if (colorScale) {
      return colorScale(v);
    } else {
      return valueField[0].display(v).color;
    }
  }

  // Aggregation helper
  const colGrouping = !!(colCategoryKey && options.enableColGrouping);
  const rowGrouping = !!(rowCategoryKey && options.enableRowGrouping);

  // Aggregation function to combine multiple values for the same cell based on user-selected method
  // By default: aggregate is set to "sum"
  // Falls back to "last" for non-numeric values (strings, etc.)
  function aggregate(values: any[], method: string): any {
    if (values.length === 0) {
      return null;
    }
    // For non-numeric values, only "last" is meaningful
    if (typeof values[0] !== 'number') {
      return values[values.length - 1];
    }
    switch (method) {
      case 'sum': return values.reduce((a: number, b: number) => a + b, 0);
      case 'avg': return values.reduce((a: number, b: number) => a + b, 0) / values.length;
      case 'min': return Math.min(...values);
      case 'max': return Math.max(...values);
      case 'last': return values[values.length - 1];
      default: return values.reduce((a: number, b: number) => a + b, 0);
    }
  }

  // Build composite keys from data
  // When grouping is enabled, use "category::name" as the key to allow
  // the same name in multiple categories. Otherwise, just use the name.
  let compositeColKeys: string[] = [];
  let compositeRowKeys: string[] = [];

  // Marginal sums per composite key (used for "total" sort and for tracking cells that were seen)
  const colKeySums = new Map<string, number>();
  const rowKeySums = new Map<string, number>();
  // Raw aggregated value per (rowKey||colKey) pair (used for "cluster" seriation).
  const cellRaw = new Map<string, number>();
  // Track every (rowKey, colKey) pair that appears in the data, even when null,
  // so we can tell "queried and null" apart from "no data at all".
  const seenCells = new Set<string>();

  // IF static list toggle is set, use input list
  if (options.inputList) {
    const staticRows = options.staticRows.split(',');
    const staticCols = options.staticColumns.split(',');
    compositeRowKeys = Array.from(new Set(staticRows));
    compositeColKeys = Array.from(new Set(staticCols));
  } else {
    // Build unique composite keys from data
    const colKeySet = new Set<string>();
    const rowKeySet = new Set<string>();

    frame.forEach((row) => {
      const rowName = String(row[sourceKey]);
      const colName = String(row[targetKey]);
      const colCat = colGrouping && row[colCategoryKey] != null ? String(row[colCategoryKey]) : '';
      const rowCat = rowGrouping && row[rowCategoryKey] != null ? String(row[rowCategoryKey]) : '';

      const colKey = colGrouping ? `${colCat}::${colName}` : colName;
      const rowKey = rowGrouping ? `${rowCat}::${rowName}` : rowName;

      colKeySet.add(colKey);
      rowKeySet.add(rowKey);
      seenCells.add(`${rowKey}||${colKey}`);

      const v = row[valKey];
      if (typeof v === 'number' && !isNaN(v)) {
        colKeySums.set(colKey, (colKeySums.get(colKey) || 0) + v);
        rowKeySums.set(rowKey, (rowKeySums.get(rowKey) || 0) + v);
        const pk = `${rowKey}||${colKey}`;
        cellRaw.set(pk, (cellRaw.get(pk) || 0) + v);
      }
    });

    // Sort keys by name (default), by marginal total, or by cluster (seriation)
    const byName = (a: string, b: string) => (a < b ? -1 : a > b ? 1 : 0);
    const byTotal = (sums: Map<string, number>) => (a: string, b: string) => {
      const diff = (sums.get(b) || 0) - (sums.get(a) || 0);
      return diff !== 0 ? diff : byName(a, b);
    };
    const byScore = (scores: Map<string, number>) => (a: string, b: string) => {
      const diff = (scores.get(a) || 0) - (scores.get(b) || 0);
      return diff !== 0 ? diff : byName(a, b);
    };

    // Compute cluster ordering only when requested
    let rowScores: Map<string, number> | null = null;
    let colScores: Map<string, number> | null = null;
    if (options.rowSort === 'cluster' || options.colSort === 'cluster') {
      const seriation = computeSeriation(Array.from(rowKeySet), Array.from(colKeySet), cellRaw);
      rowScores = seriation.rowScores;
      colScores = seriation.colScores;
    }

    const pickComparator = (mode: string, sums: Map<string, number>, scores: Map<string, number> | null) => {
      if (mode === 'total') {
        return byTotal(sums);
      }
      if (mode === 'cluster' && scores) {
        return byScore(scores);
      }
      return byName;
    };

    compositeColKeys = Array.from(colKeySet).sort(pickComparator(options.colSort, colKeySums, colScores));
    compositeRowKeys = Array.from(rowKeySet).sort(pickComparator(options.rowSort, rowKeySums, rowScores));
  }

  // Extract display names from composite keys
  let colNames = compositeColKeys.map((k) => colGrouping && k.includes('::') ? k.split('::').slice(1).join('::') : k);
  let rowNames = compositeRowKeys.map((k) => rowGrouping && k.includes('::') ? k.split('::').slice(1).join('::') : k);

  // Build column metadata and category groupings
  let colMetadata: any[] = [];
  let colCategories: any[] = [];

  if (colGrouping) {
    // Group columns by category using composite keys
    const categoryToColumns = new Map<string, Array<{ name: string; key: string }>>();

    compositeColKeys.forEach((key) => {
      const [cat, ...nameParts] = key.split('::');
      const name = nameParts.join('::');
      if (!categoryToColumns.has(cat)) {
        categoryToColumns.set(cat, []);
      }
      categoryToColumns.get(cat)!.push({ name, key });
    });

    // Build CategoryGroup array (sorted by category name)
    const sortedCategories = Array.from(categoryToColumns.keys()).sort();
    let globalIndex = 0;

    sortedCategories.forEach((catName) => {
      const columnsInCat = categoryToColumns.get(catName)!;
      colCategories.push({
        name: catName,
        columns: columnsInCat.map((c) => c.name),
        startIndex: globalIndex,
        endIndex: globalIndex + columnsInCat.length - 1,
      });
      globalIndex += columnsInCat.length;
    });

    // Build ColumnInfo array and re-order colNames/compositeColKeys to match grouped order
    const reorderedColKeys: string[] = [];
    const reorderedColNames: string[] = [];
    colCategories.forEach((cat: any, catIndex: number) => {
      cat.columns.forEach((colName: string, indexInCat: number) => {
        colMetadata.push({
          name: colName,
          category: cat.name,
          categoryIndex: catIndex,
          indexInCategory: indexInCat,
        });
        reorderedColKeys.push(`${cat.name}::${colName}`);
        reorderedColNames.push(colName);
      });
    });

    compositeColKeys = reorderedColKeys;
    colNames = reorderedColNames;
  } else {
    // No categories: create default metadata
    colMetadata = colNames.map((name: string, idx: number) => ({
      name,
      category: '',
      categoryIndex: 0,
      indexInCategory: idx,
    }));
  }

  // Build row metadata and row category groupings
  let rowMetadata: any[] = [];
  let rowCategories: any[] = [];

  if (rowGrouping) {
    // Group rows by category using composite keys
    const categoryToRows = new Map<string, Array<{ name: string; key: string }>>();

    compositeRowKeys.forEach((key) => {
      const [cat, ...nameParts] = key.split('::');
      const name = nameParts.join('::');
      if (!categoryToRows.has(cat)) {
        categoryToRows.set(cat, []);
      }
      categoryToRows.get(cat)!.push({ name, key });
    });

    // Build RowCategoryGroup array (sorted by category name)
    const sortedRowCategories = Array.from(categoryToRows.keys()).sort();
    let globalRowIndex = 0;

    sortedRowCategories.forEach((catName) => {
      const rowsInCat = categoryToRows.get(catName)!;
      rowCategories.push({
        name: catName,
        rows: rowsInCat.map((r) => r.name),
        startIndex: globalRowIndex,
        endIndex: globalRowIndex + rowsInCat.length - 1,
      });
      globalRowIndex += rowsInCat.length;
    });

    // Build RowInfo array and re-order rowNames/compositeRowKeys to match grouped order
    const reorderedRowKeys: string[] = [];
    const reorderedRowNames: string[] = [];
    rowCategories.forEach((cat: any, catIndex: number) => {
      cat.rows.forEach((rowName: string, indexInCat: number) => {
        rowMetadata.push({
          name: rowName,
          category: cat.name,
          categoryIndex: catIndex,
          indexInCategory: indexInCat,
        });
        reorderedRowKeys.push(`${cat.name}::${rowName}`);
        reorderedRowNames.push(rowName);
      });
    });

    compositeRowKeys = reorderedRowKeys;
    rowNames = reorderedRowNames;
  } else {
    // No row categories: create default metadata
    rowMetadata = rowNames.map((name: string, idx: number) => ({
      name,
      category: '',
      categoryIndex: 0,
      indexInCategory: idx,
    }));
  }

  const numSquaresInMatrix = rowNames.length * colNames.length;
  if (numSquaresInMatrix > 50000) {
    return { rows: null, columns: null, colMetadata: [], colCategories: [], rowMetadata: [], rowCategories: [], data: 'too many inputs', legend: null, rowTotals: [], colTotals: [], valueDomain: null };
  }

  // Phase 1: Collect all values per cell using composite keys
  const cellValues = new Map<string, number[]>();

  frame.forEach((row) => {
    const rowName = String(row[sourceKey]);
    const colName = String(row[targetKey]);
    const colCat = colGrouping && row[colCategoryKey] != null ? String(row[colCategoryKey]) : '';
    const rowCat = rowGrouping && row[rowCategoryKey] != null ? String(row[rowCategoryKey]) : '';

    const colKey = colGrouping ? `${colCat}::${colName}` : colName;
    const rowKey = rowGrouping ? `${rowCat}::${rowName}` : rowName;

    const r = compositeRowKeys.indexOf(rowKey);
    const c = compositeColKeys.indexOf(colKey);
    const v = row[valKey];
    const isValid = v != null && !(typeof v === 'number' && isNaN(v));

    if (r > -1 && c > -1 && isValid) {
      const cellKey = `${r}:${c}`;
      if (!cellValues.has(cellKey)) {
        cellValues.set(cellKey, []);
      }
      cellValues.get(cellKey)!.push(v);
    }
  });

  // Phase 2: Aggregate values and build data matrix
  // Cells start as -1 (no data). Cells that appeared in the query but had only
  // null values become explicit null cells so they can be styled distinctly.
  let dataMatrix: any[][] = [];
  for (let i = 0; i < rowNames.length; i++) {
    dataMatrix.push(new Array(colNames.length).fill(-1));
  }
  // running totals aligned to the final row/column order
  const rowTotals = new Array(rowNames.length).fill(0);
  const colTotals = new Array(colNames.length).fill(0);

  const aggMethod = options.aggregationMethod || 'sum';

  cellValues.forEach((values, cellKey) => {
    const [r, c] = cellKey.split(':').map(Number);
    const v = values.length === 1 ? values[0] : aggregate(values, aggMethod);
    dataMatrix[r][c] = {
      row: rowNames[r],
      col: colNames[c],
      val: v,
      color: colorMap(v),
      display: valueField[0].display(v),
      isNull: false,
    };
    if (typeof v === 'number' && !isNaN(v)) {
      rowTotals[r] += v;
      colTotals[c] += v;
    }
  });

  // Mark null cells: seen in the query but no non-null value landed in the cell
  if (!options.inputList) {
    for (let r = 0; r < compositeRowKeys.length; r++) {
      for (let c = 0; c < compositeColKeys.length; c++) {
        if (dataMatrix[r][c] === -1 && seenCells.has(`${compositeRowKeys[r]}||${compositeColKeys[c]}`)) {
          dataMatrix[r][c] = {
            row: rowNames[r],
            col: colNames[c],
            val: null,
            color: nullColor,
            display: valueField[0].display(null),
            isNull: true,
          };
        }
      }
    }
  }

  // parse data for legend
  let legendData: any[] = [];
  if (options.showLegend) {
    let tempValues: any[] = [];
    if (options.legendType === 'range') {
      // get min & max, steps (numeric values only)
      let thisMin = domainMin;
      let thisMax = domainMax;
      let step = (thisMax - thisMin) / 10;
      // push 10 steps to use for legend
      tempValues = [];
      for(let i = 0; i <= 10; i++) {
        tempValues.push(thisMin + (i*step));
      }
    } else {
      // get unique categories
      let allValues: any[] = fieldValuesArray(frame.fields[valKey]);
      let unique = new Set(allValues);
      tempValues = [...unique];
    }
    tempValues.forEach((val) => {
      // find display values, unit & color for each
      // store in array
      let text = valueField[0].display(val).text;
      if (valueField[0].display(val).suffix) {
        text = text + ` ${valueField[0].display(val).suffix}`;
      }
        legendData.push({
          label: text,
          color: colorMap(val),
          value: typeof val === 'number' ? val : null,
        });
    });
  }

  let dataObject = {
    rows: rowNames,
    columns: colNames,
    colMetadata: colMetadata,
    colCategories: colCategories,
    rowMetadata: rowMetadata,
    rowCategories: rowCategories,
    data: dataMatrix,
    legend: legendData,
    rowTotals: rowTotals,
    colTotals: colTotals,
    valueDomain: valueDomain,
  };
  return dataObject;
}
