import { GrafanaTheme2 } from '@grafana/data';
import { MatrixData, MatrixOptions } from './types';

export function createViz(
  elem: RefObject<HTMLDivElement>,
  id: number,
  theme: GrafanaTheme2,
  styles: CSSReturnValue,
  options: MatrixOptions,
  rowNames: any[],
  rowCategories: Category[],
  colNames: any[],
  colCategories: Category[],
  data: DataMatrixCell[][],
  legend: LegendData[],
);

export function getStyles(
  theme: GrafanaTheme2,
): CSSReturnValue;
