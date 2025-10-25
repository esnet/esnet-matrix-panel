import { MatrixData, MatrixOptions } from './types';

export function matrix(
  rowNames: string[],
  colNames: string[],
  matrix: DataMatrixCell[][],
  id: number,
  options: MatrixOptions,
  legend: LegendData[],
): LegacyRef<SVGSVGElement> | undefined;
