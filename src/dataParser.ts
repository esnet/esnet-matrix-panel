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

export function parseData(data: { series: any[] }, options: any, theme: any) {
  const series = data.series[0];
  console.log(series);
  const frame = new DataFrameView(series);
  
  if (frame === null || frame === undefined) {
    // no data, bail
    console.log('no data');
    return [null, null, null];
  }

  // set fields
  let sourceKey = options.sourceField;
  let targetKey = options.targetField;
  if (!sourceKey) {
    sourceKey = 0;
  }
  if (!targetKey) {
    targetKey = 1;
  }
    // assign valueField to the specified field or use the first number field by default
  const val = options.valueField;
  const valueField = val
    ? data.series.map((series: { fields: any[] }) => series.fields.find((field: { name: any; }) => field.name === val))
    : data.series.map((series: { fields: any[] }) => series.fields.find((field: { type: string; }) => field.type === 'number'));
  // console.log(valueField);
  const valKey = valueField[0].name;
  console.log(`sourceKey: ${sourceKey}, targetKey: ${targetKey}, value: ${valKey}`);
  console.log(frame);

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

  // find all axis labels
  let rows: any[] = [];
  let columns: any[] = [];
  frame.forEach((row) => {
    rows.push(String(row[sourceKey]));
    columns.push(String(row[targetKey]));
  });
  if (columns.length > 200 || rows.length > 200) {
    return ("too long");
  }
  console.log(rows);
  console.log(columns);
  // Make new arrays from unique set of row and column axis labels
  const rowNames = Array.from(new Set(rows)).sort();
  const colNames = Array.from(new Set(columns)).sort();
    console.log(rowNames);
    console.log(colNames);

  // create data matrix
  var dataMatrix: any[][] = [];
  for (let i = 0; i < rowNames.length; i++) {
    dataMatrix.push(new Array(colNames.length).fill(-1));
  }
  console.log(dataMatrix);
  frame.forEach((row) => {
    let r = rowNames.indexOf(String(row[sourceKey]));
    let c = colNames.indexOf(String(row[targetKey]));
    let v = row[valKey];
    dataMatrix[r][c] = {
      row: row[sourceKey],
      col: row[targetKey],
      val: v,
      color: colorMap(v),
      display: valueField[0].display(v)
    };

  });
  return [rowNames, colNames, dataMatrix];
}
