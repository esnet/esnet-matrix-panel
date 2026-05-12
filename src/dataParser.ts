import { DataFrameView, Field, FieldType, getFieldDisplayName } from '@grafana/data';

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

export function parseData(data: { series: any[] }, options: any, theme: any) {
  const series = data.series[0];
  if (series === null || series === undefined) {
    // no data, bail
    console.error('no data');
    return { rows: null, columns: null, colMetadata: [], colCategories: [], rowMetadata: [], rowCategories: [], data: null, legend: null };
  }

  const frame = new DataFrameView(series);
  if (frame === null || frame === undefined) {
    // no data, bail
    console.error('no data');
    return { rows: null, columns: null, colMetadata: [], colCategories: [], rowMetadata: [], rowCategories: [], data: null, legend: null };
  }
  // set fields
  const sourceField = series.fields.find((f: Field) =>
    options.sourceField !== undefined && (
      options.sourceField === f.name
      || options.sourceField === f.config?.displayNameFromDS
      || options.sourceField === getFieldDisplayName(f)
    )
  ) ?? series.fields.find((f: Field) => f.type === FieldType.string);
  const targetField = series.fields.find((f: Field) =>
    options.targetField !== undefined && (
      options.targetField === f.name
      || options.targetField === f.config?.displayNameFromDS
      || options.targetField === getFieldDisplayName(f)
    )
  ) ?? series.fields.find((f: Field) => f.type === FieldType.string && f.name !== sourceField?.name);
  const colCategoryField = series.fields.find((f: Field) =>
    options.colCategoryField !== undefined && (
      options.colCategoryField === f.name
      || options.colCategoryField === f.config?.displayNameFromDS
      || options.colCategoryField === getFieldDisplayName(f)
    )
  );
  const rowCategoryField = series.fields.find((f: Field) =>
    options.rowCategoryField !== undefined && (
      options.rowCategoryField === f.name
      || options.rowCategoryField === f.config?.displayNameFromDS
      || options.rowCategoryField === getFieldDisplayName(f)
    )
  );
  // assign valueField to the specified field or use the first number field by default
  const valueField: any = series.fields.find((f: Field) =>
    options.valueField !== undefined && (
      options.valueField === f.name
      || options.valueField === f.config?.displayNameFromDS
      || options.valueField === getFieldDisplayName(f)
    )
  ) ?? series.fields.find((f: Field) => f.type === FieldType.number);
  const sourceKey = sourceField?.name;
  const targetKey = targetField?.name;
  const colCategoryKey = colCategoryField?.name;
  const rowCategoryKey = rowCategoryField?.name;
  const valKey = valueField?.name;

  if (
    sourceKey === undefined || targetKey === undefined
    || valueField === undefined || valKey === undefined
  ) {
    // no data, bail
    console.error('no data');
    return { rows: null, columns: null, colMetadata: [], colCategories: [], rowMetadata: [], rowCategories: [], data: null, legend: null };
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
    } else {
      return valueField.display(v).color;
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

  // IF static list toggle is set, use input list
  if (options.inputList) {
    if (options.staticRows !== undefined) {
      const staticRows = options.staticRows.split(',');
      compositeRowKeys = Array.from(new Set(staticRows));
    }
    if (options.staticColumns !== undefined) {
      const staticCols = options.staticColumns.split(',');
      compositeColKeys = Array.from(new Set(staticCols));
    }
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
    });

    compositeColKeys = Array.from(colKeySet).sort();
    compositeRowKeys = Array.from(rowKeySet).sort();
  }

  if (compositeColKeys.length === 0 || compositeRowKeys.length === 0) {
    // no data, bail
    console.error('no data');
    return { rows: null, columns: null, colMetadata: [], colCategories: [], rowMetadata: [], rowCategories: [], data: null, legend: null };
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
    return { rows: null, columns: null, colMetadata: [], colCategories: [], rowMetadata: [], rowCategories: [], data: 'too many inputs', legend: null };
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

    if (r > -1 && c > -1 && v != null) {
      const cellKey = `${r}:${c}`;
      if (!cellValues.has(cellKey)) {
        cellValues.set(cellKey, []);
      }
      cellValues.get(cellKey)!.push(v);
    }
  });

  // Phase 2: Aggregate values and build data matrix
  let dataMatrix: any[][] = [];
  for (let i = 0; i < rowNames.length; i++) {
    dataMatrix.push(new Array(colNames.length).fill(-1));
  }

  const aggMethod = options.aggregationMethod || 'sum';

  cellValues.forEach((values, cellKey) => {
    const [r, c] = cellKey.split(':').map(Number);
    const v = values.length === 1 ? values[0] : aggregate(values, aggMethod);
    dataMatrix[r][c] = {
      row: rowNames[r],
      col: colNames[c],
      val: v,
      color: colorMap(v),
      display: valueField.display(v),
    };
  });

  // parse data for legend
  let legendData: any[] = [];
  if (options.showLegend) {
    let tempValues: any[] = [];
    if (options.legendType === 'range') { 
      // get min & max, steps
      let allValues: number[] = Object.values(frame.fields[valKey].values);
      let thisMin = Math.min(...allValues);
      let thisMax = Math.max(...allValues);
      let step = (thisMax - thisMin) / 10;
      // push 10 steps to use for legend
      tempValues = [];
      for(let i = 0; i <= 10; i++) {
        tempValues.push(thisMin + (i*step));
      }
    } else {
      // get unique categories
      let allValues: string[] = Object.values(frame.fields[valKey].values);
      let unique = new Set(allValues);
      tempValues = [...unique];
    }
    tempValues.forEach((val) => {
      // find display values, unit & color for each
      // store in array
      let text = valueField.display(val).text;
      if (valueField.display(val).suffix) {
        text = text + ` ${valueField.display(val).suffix}`;
      }
        legendData.push({
          label: text,
          color: colorMap(val),
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
  };
  return dataObject;
}
