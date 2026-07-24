import { DisplayValue } from '@grafana/data';

export interface MatrixOptions {
  sortType: string;
  sourceField: string;
  targetField: string;
  valueField: string;
  colCategoryField: string;
  enableColGrouping: boolean;
  colCategoryHeaderHeight: number;
  colCategoryGap: number;
  rowCategoryField: string;
  enableRowGrouping: boolean;
  rowCategoryHeaderWidth: number;
  rowCategoryGap: number;
  cellSize: number;
  cellPadding: number;
  cellCornerRadius: number;
  txtLength: number;
  txtSize: number;
  nullColor: string;
  defaultColor: string;
  distinctNoData: boolean;
  highlightRowCol: boolean;
  // Color presets (Phase 2)
  colorMode: string; // 'standard' | 'sequential' | 'diverging'
  divergingMidpoint: number;
  // Shared / explicit color domain (Round 2)
  colorDomainMode: string; // 'auto' | 'manual'
  colorDomainMin: number;
  colorDomainMax: number;
  // Value-threshold focus (Round 2)
  focusEnabled: boolean;
  focusMin: number;
  focusMax: number;
  focusMode: string; // 'dim' | 'hide'
  // Sorting / seriation (Phase 2 + Round 2)
  rowSort: string; // 'name' | 'total' | 'cluster'
  colSort: string; // 'name' | 'total' | 'cluster'
  // Grouping visuals (Phase 2)
  showGroupDividers: boolean;
  // In-cell value labels (Phase 2)
  showCellValues: boolean;
  // Layout & encoding (Phase 3)
  sizeMode: string; // 'fixed' | 'fit'
  freezeLabels: boolean;
  showMarginalTotals: boolean;
  sizeEncodesValue: boolean;
  // Interaction & accessibility (Round 2)
  labelOrientation: string; // 'auto' | 'rotated' | 'horizontal'
  showTableView: boolean;
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

export type Category = {
  name: any;
  items: any[];
};

export type Heading = {
  name: string;
  x: number;
  width: number;
  category: string;
  categoryIndex: number;
};

export type MatrixData = {
  rowNames: string[] | null;
  colNames: string[] | null;
  colCategories: Category[];
  rowCategories: Category[];
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
