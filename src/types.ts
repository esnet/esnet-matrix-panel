import { DisplayValue } from '@grafana/data';

export interface MatrixOptions {
  sourceField: string;
  targetField: string;
  valueField: string;
  cellSize: number;
  cellPadding: number;
  txtLength: number;
  txtSize: number;
  nullColor: string;
  defaultColor: string;
  sourceText: string;
  targetText: string;
  valueText: string;
  addUrl: boolean;
  url: string;
  urlVar1: string;
  urlVar2: string;
  urlOther: boolean;
  urlOtherText: string;
  inputList: boolean;
  staticRows: string;
  staticColumns: string;
  showLegend: boolean;
  legendType: string;
  thresholds: any[];
}

export type MatrixData = {
  rows: string[] | null;
  columns: string[] | null;
  data: DataMatrixCell[][] | string | null;
  legend: LegendData[] | null;
};

export type DataMatrixCell = {
  row: string;
  col: string;
  val: number;
  color: string;
  display: DisplayValue;
};

export type LegendData = {
  label: string;
  color: string;
};
