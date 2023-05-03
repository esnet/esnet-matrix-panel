import React from 'react';
import { PanelProps } from '@grafana/data';
import { MatrixOptions } from 'types';
import { parseData } from 'dataParser';
import { useTheme2, CustomScrollbar } from '@grafana/ui';
// import { useTheme2 } from '@grafana/ui';

import * as Matrix from './matrix.js';

interface Props extends PanelProps<MatrixOptions> {}

export const EsnetMatrix: React.FC<Props> = ({ options, data, width, height, id }) => {
  let parsedData: any[] = [];
  const theme = useTheme2();
  try {
    const tryData = parseData(data, options, theme);
    if (tryData === "too many inputs") {
      console.error('Too many data points.');
      return <svg width={width} height={height}></svg>;
    } else {
      parsedData = tryData;
    }
  } catch (error) {
    console.error('data error: ', error);
  }
  const rowNames = parsedData[0];
  const colNames = parsedData[1];
  const matrix = parsedData[2];

  if (matrix == null) {
    return <div>No Data</div>;
  }
  // const divStyle = {
  //   width: 'auto',
  // };

  const ref = Matrix.matrix(rowNames, colNames, matrix, id, height, options);
  return (
    <CustomScrollbar autoHeightMin="100%">
      <div ref={ref}></div>
    </CustomScrollbar>
  );
};
