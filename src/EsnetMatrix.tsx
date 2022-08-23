import React from 'react';
import { PanelProps } from '@grafana/data';
import { MatrixOptions } from 'types';
import { parseData } from 'dataParser';
import { useTheme2 } from '@grafana/ui';

import * as Matrix from './matrix.js';

interface Props extends PanelProps<MatrixOptions> {}

export const EsnetMatrix: React.FC<Props> = ({ options, data, width, height, id }) => {
  var parsedData: any[] = [];
  const theme = useTheme2();
  try {
    const tryData = parseData(data, options, theme);
    if (tryData === "too long") {
      console.error('Too many data points. ');
      return (
        <svg width={width} height={height}></svg>
      );
    } else {
      parsedData = tryData;
    }
  } catch (error) {
    console.error('data error: ', error);
  }
  const rowNames = parsedData[0];
  const colNames = parsedData[1];
  const matrix = parsedData[2];

  const ref = Matrix.matrix(rowNames, colNames, matrix, id, height, options);
  return <svg ref={ref} width={width} height={height}></svg>;
};
