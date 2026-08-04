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
  legendType: string; // 'auto' | 'thresholds' | 'gradient' | 'categorical'
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
  legend: LegendModel | null;
};

export type DataMatrixCell = {
  row: string;
  col: string;
  val: number;
  color: string;
  display: DisplayValue;
};

/** Which form the legend takes. Chosen automatically from the cell color source
 * unless the user pins one via the Legend Type option. */
export type LegendKind = 'thresholds' | 'gradient' | 'categorical';

/** One discrete legend entry (a threshold step, or a distinct category).
 * `from`/`to` describe the half-open value band [from, to) the entry stands for,
 * so hovering it can highlight exactly the cells it covers. `null` means unbounded
 * on that side, and `from === to` means the single exact value (categorical entries). */
export type LegendItem = {
  label: string;
  color: string;
  from: number | null;
  to: number | null;
  /** `from` formatted like the cells — the boundary printed under a stepped bar.
   * Empty for the unbounded first step. */
  fromLabel: string;
};

/** A single color stop along a continuous legend bar. `offset` is 0..1. */
export type LegendStop = {
  offset: number;
  color: string;
};

/** A labeled tick on a continuous legend bar. `offset` is 0..1 along the bar.
 * `emphasis` marks a tick that should also be drawn as a line across the bar
 * (used for the diverging midpoint). */
export type LegendTick = {
  value: number;
  label: string;
  offset: number;
  emphasis?: boolean;
};

export type LegendModel = {
  kind: LegendKind;
  /** Value-field name/label, drawn above the legend. */
  title: string;
  /** Entries for `thresholds` and `categorical`; empty for `gradient`. */
  items: LegendItem[];
  /** Color stops for `gradient`; empty otherwise. */
  stops: LegendStop[];
  /** Value range a `gradient` bar spans; null when there is nothing numeric to span. */
  domain: { min: number; max: number } | null;
  /** Axis labels under a `gradient` bar. */
  ticks: LegendTick[];
  /** Whether to draw the null / no-data key. */
  states: { hasNull: boolean; hasNoData: boolean };
  /** How many `categorical` entries were dropped past the display cap (0 when none). */
  truncated: number;
};
