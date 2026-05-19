import { DataFrameView, Field, FieldType, getFieldDisplayName, GrafanaTheme2, PanelData } from '@grafana/data';
import { Category, DataMatrixCell, LegendData, MatrixData, MatrixOptions } from './types';

/**
 * this function creates an adjacency matrix to be consumed by the matrix diagram
 * function returns the matrix + forward and reverse lookup Maps to go from
 * source and target id to description assumes that data coming to us has at
 * least 3 columns if no preferences provided, assumes the first 3 columns are
 * source and target dimensions then value to display
 * @param {PanelData} data Data for the matrix diagram
 * @param {MatrixOptions} options Panel configuration
 * @param {GrafanaTheme2} theme Grafana theme
 * @return {MatrixData}
 */

export function parseData(data: PanelData, options: MatrixOptions, theme: GrafanaTheme2): MatrixData {
  const series = data.series[0];
  if (series === null || series === undefined) {
    // no data, bail
    console.error('no data');
    return { rowNames: null, colNames: null, colCategories: [], rowCategories: [], data: null, legend: null };
  }

  const frame = new DataFrameView(series);
  if (frame === null || frame === undefined) {
    // no data, bail
    console.error('no data');
    return { rowNames: null, colNames: null, colCategories: [], rowCategories: [], data: null, legend: null };
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
  const valueField = series.fields.find((f: Field) =>
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
    return { rowNames: null, colNames: null, colCategories: [], rowCategories: [], data: null, legend: null };
  }

  // function that maps value to color specified by Standard Options panel.
  // if value is null or was not returned by query, use different value
  const nullColor = theme.visualization.getColorByName(options.nullColor);
  const defaultColor = theme.visualization.getColorByName(options.defaultColor);
  function colorMap(v: any): string {
    if (v === null) {
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

  // Store unique set of row and column headings/categories
  const rowNamesSet = new Set<any>();
  const colNamesSet = new Set<any>();
  const rowCategoriesMap = new Map<any, Category>();
  const colCategoriesMap = new Map<any, Category>();

  // IF static list toggle is set, use input list
  if (options.inputList) {
    if (options.staticRows !== undefined) {
      options.staticRows.split(',').forEach((item: string) => rowNamesSet.add(item));
    }
    if (options.staticColumns !== undefined) {
      options.staticColumns.split(',').forEach((item: string) => colNamesSet.add(item));
    }
  } else {
    // Collect all unique row and column headings/categories
    frame.forEach((row) => {
      const rowName = row[sourceKey];
      if (!rowNamesSet.has(rowName)) {
        // new row heading
        rowNamesSet.add(rowName);

        const categoryName = row[rowCategoryKey];
        if (rowGrouping && categoryName != null) {
          if (!rowCategoriesMap.has(categoryName)) {
            // new row category
            rowCategoriesMap.set(categoryName, {
              name: categoryName,
              items: [rowName],
            });
          } else {
            // append row heading to existing row category
            const category = rowCategoriesMap.get(categoryName);
            category?.items.push(rowName);
          }
        }
      }

      const colName = row[targetKey];
      if (!colNamesSet.has(colName)) {
        // new column heading
        colNamesSet.add(colName);

        const categoryName = row[colCategoryKey];
        if (colGrouping && categoryName != null) {
          if (!colCategoriesMap.has(categoryName)) {
            // new column category
            colCategoriesMap.set(categoryName, {
              name: categoryName,
              items: [colName],
            });
          } else {
            // append column heading to existing column category
            const category = colCategoriesMap.get(categoryName);
            category?.items.push(colName);
          }
        }
      }
    });
  }

  if (rowNamesSet.size === 0 || colNamesSet.size === 0) {
    // no data, bail
    console.error('no data');
    return { rowNames: null, colNames: null, colCategories: [], rowCategories: [], data: null, legend: null };
  }

  const numSquaresInMatrix = rowNamesSet.size * colNamesSet.size;
  if (numSquaresInMatrix > 50000) {
    return { rowNames: null, colNames: null, colCategories: [], rowCategories: [], data: 'too many inputs', legend: null };
  }

  const rowNames: any[] = Array.from(rowNamesSet);
  const colNames: any[] = Array.from(colNamesSet);
  const rowCategories: Category[] = [];
  const colCategories: Category[] = [];

  switch(options.sortType) {
  case "natural-asc":
  case "natural-desc":
    const naturalSort = (a: any, b: any) => {
      return a.toString().localeCompare(b.toString(), undefined, { numeric: true });
    };

    let sort = naturalSort;
    if (options.sortType.endsWith("-desc")) {
      sort = (a, b) => naturalSort(b, a);
    }

    // sort row and column headings
    rowNames.sort(sort);
    colNames.sort(sort);

    // sort row and column categories and items in each category
    Array.from(rowCategoriesMap.keys()).sort(sort).forEach((name) => {
      const category = rowCategoriesMap.get(name);
      if (category !== undefined) {
        category.items.sort(sort);
        rowCategories.push(category);
      }
    });
    Array.from(colCategoriesMap.keys()).sort(sort).forEach((name) => {
      const category = colCategoriesMap.get(name);
      if (category !== undefined) {
        category.items.sort(sort);
        colCategories.push(category);
      }
    });
    break;
  case "none":
    rowCategories.push(...rowCategoriesMap.values());
    colCategories.push(...colCategoriesMap.values());
    break;
  }

  // create data matrix
  let dataMatrix: DataMatrixCell[][] = [];
  for (let i = 0; i < rowNames.length; i++) {
    dataMatrix.push(new Array(colNames.length).fill(-1));
  }

  frame.forEach((row) => {
    const rowName = row[sourceKey];
    const colName = row[targetKey];
    const r = rowNames.indexOf(rowName);
    const c = colNames.indexOf(colName);
    const v = row[valKey];
    if (r > -1 && c > -1) {
      dataMatrix[r][c] = {
        row: rowName,
        col: colName,
        val: v,
        color: colorMap(v),
        display: valueField.display(v),
      };
    }
  });

  // parse data for legend
  let legendData: LegendData[] = [];
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
    rowNames: rowNames,
    colNames: colNames,
    colCategories: colCategories,
    rowCategories: rowCategories,
    data: dataMatrix,
    legend: legendData,
  };
  return dataObject;
}
