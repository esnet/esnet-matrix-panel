import { MatrixData, MatrixOptions } from './types';

export function matrix(
  rowNames: any[],
  colNames: any[],
  matrix: DataMatrixCell[][],
  id: number,
  options: MatrixOptions,
  legend: LegendData[],
  colCategories: Category[],
  rowCategories: Category[],
): LegacyRef<SVGSVGElement> | undefined;
