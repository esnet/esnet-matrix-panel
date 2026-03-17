import { DataFrameView } from '@grafana/data';

// import { legend } from 'matrixLegend';

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
      return valueField[0].display(v).color;
    }
  }

  // Make Row and Column Lists
  let rows: any[] = [];
  let columns: any[] = [];
  // let uniqueVals: any[] = [];

  // IF static list toggle is set, use input list
  if (options.inputList) {
    rows = options.staticRows.split(',');
    columns = options.staticColumns.split(',');
  } else {
    // ELSE  Make new arrays from unique set of row and column axis labels
    // find all axis labels
    frame.forEach((row) => {
      rows.push(String(row[sourceKey]));
      columns.push(String(row[targetKey]));
    });
  }
  // get unique set
  let rowNames = Array.from(new Set(rows)).sort();
  let colNames = Array.from(new Set(columns)).sort();

  // Build column metadata and category groupings
  let colMetadata: any[] = [];
  let colCategories: any[] = [];

  if (colCategoryKey && options.enableColGrouping) {
    // Build column -> category mapping from data
    const colToCategoryMap = new Map<string, string>();
    frame.forEach((row) => {
      const col = String(row[targetKey]);
      const cat = row[colCategoryKey] != null ? String(row[colCategoryKey]) : 'Uncategorized';
      if (!colToCategoryMap.has(col)) {
        colToCategoryMap.set(col, cat);
      }
    });

    // Group columns by category
    const categoryToColumns = new Map<string, string[]>();
    colNames.forEach((col) => {
      const cat = colToCategoryMap.get(col) || 'Uncategorized';
      if (!categoryToColumns.has(cat)) {
        categoryToColumns.set(cat, []);
      }
      categoryToColumns.get(cat)!.push(col);
    });

    // Build CategoryGroup array (sorted by category name)
    const sortedCategories = Array.from(categoryToColumns.keys()).sort();
    let globalIndex = 0;

    sortedCategories.forEach((catName, catIndex) => {
      const columnsInCat = categoryToColumns.get(catName)!;
      colCategories.push({
        name: catName,
        columns: columnsInCat,
        startIndex: globalIndex,
        endIndex: globalIndex + columnsInCat.length - 1,
      });
      globalIndex += columnsInCat.length;
    });

    // Build ColumnInfo array
    colCategories.forEach((cat: any, catIndex: number) => {
      cat.columns.forEach((colName: string, indexInCat: number) => {
        colMetadata.push({
          name: colName,
          category: cat.name,
          categoryIndex: catIndex,
          indexInCategory: indexInCat,
        });
      });
    });

    // Re-order colNames to match grouped order
    colNames = colMetadata.map((cm: any) => cm.name);
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

  if (rowCategoryKey && options.enableRowGrouping) {
    // Build row -> category mapping from data
    const rowToCategoryMap = new Map<string, string>();
    frame.forEach((row) => {
      const rowName = String(row[sourceKey]);
      const cat = row[rowCategoryKey] != null ? String(row[rowCategoryKey]) : 'Uncategorized';
      if (!rowToCategoryMap.has(rowName)) {
        rowToCategoryMap.set(rowName, cat);
      }
    });

    // Group rows by category
    const categoryToRows = new Map<string, string[]>();
    rowNames.forEach((rowName) => {
      const cat = rowToCategoryMap.get(rowName) || 'Uncategorized';
      if (!categoryToRows.has(cat)) {
        categoryToRows.set(cat, []);
      }
      categoryToRows.get(cat)!.push(rowName);
    });

    // Build RowCategoryGroup array (sorted by category name)
    const sortedRowCategories = Array.from(categoryToRows.keys()).sort();
    let globalRowIndex = 0;

    sortedRowCategories.forEach((catName) => {
      const rowsInCat = categoryToRows.get(catName)!;
      rowCategories.push({
        name: catName,
        rows: rowsInCat,
        startIndex: globalRowIndex,
        endIndex: globalRowIndex + rowsInCat.length - 1,
      });
      globalRowIndex += rowsInCat.length;
    });

    // Build RowInfo array
    rowCategories.forEach((cat: any, catIndex: number) => {
      cat.rows.forEach((rowName: string, indexInCat: number) => {
        rowMetadata.push({
          name: rowName,
          category: cat.name,
          categoryIndex: catIndex,
          indexInCategory: indexInCat,
        });
      });
    });

    // Re-order rowNames to match grouped order
    rowNames = rowMetadata.map((rm: any) => rm.name);
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

  // create data matrix
  let dataMatrix: any[][] = [];
  for (let i = 0; i < rowNames.length; i++) {
    dataMatrix.push(new Array(colNames.length).fill(-1));
  }
  frame.forEach((row) => {
    let r = rowNames.indexOf(String(row[sourceKey]));
    let c = colNames.indexOf(String(row[targetKey]));
    let v = row[valKey];
    if (r > -1 && c > -1 && dataMatrix[r][c] === -1) {
      dataMatrix[r][c] = {
        row: row[sourceKey],
        col: row[targetKey],
        val: v,
        color: colorMap(v),
        display: valueField[0].display(v),
      };
    }
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
      let text = valueField[0].display(val).text;
      if (valueField[0].display(val).suffix) {
        text = text + ` ${valueField[0].display(val).suffix}`;
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
