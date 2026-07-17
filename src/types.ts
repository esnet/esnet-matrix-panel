export interface MatrixOptions {
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
  // Sorting / seriation (Phase 2)
  rowSort: string; // 'name' | 'total'
  colSort: string; // 'name' | 'total'
  // Grouping visuals (Phase 2)
  showGroupDividers: boolean;
  // In-cell value labels (Phase 2)
  showCellValues: boolean;
  // Layout & encoding (Phase 3)
  sizeMode: string; // 'fixed' | 'fit'
  freezeLabels: boolean;
  showMarginalTotals: boolean;
  sizeEncodesValue: boolean;
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
  staticRows: string[];
  staticColumns: string[];
  aggregationMethod: string;
  showLegend: boolean;
  legendType: string;
  thresholds: any[];
}
