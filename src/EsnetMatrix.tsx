import React from 'react';
import { PanelProps } from '@grafana/data';
import { MatrixOptions } from 'types';
import { parseData } from 'dataParser';
import { useTheme2, CustomScrollbar } from '@grafana/ui';
// import { useTheme2 } from '@grafana/ui';

import * as Matrix from './matrix.js';
// import * as Legend from 'matrixLegend.js';

interface Props extends PanelProps<MatrixOptions> {
  fieldConfig: any;
  options: MatrixOptions;
}

export const EsnetMatrix: React.FC<Props> = ({ options, data, width, height, id }) => {
  const theme = useTheme2();
  // console.log(options);
  const parsedData = parseData(data, options, theme);
  try {
    if (parsedData.data === 'too many inputs') {
      console.error('Too many data points.');
      // return <svg width={width} height={height}></svg>;
      return <div>Too many data points!  Try adding limits to your query.</div>;
    }
  } catch (error) {
    console.error('data error: ', error);
  }

  if (parsedData.data == null) {
    return <div>No Data</div>;
  }

  const ref = Matrix.matrix(parsedData.rows, parsedData.columns, parsedData.data, id, height, options, parsedData.legend);
  const thisPanelClass = `matrix-panel-${id}`;

  return (
    <CustomScrollbar autoHeightMin="100%">
      <div ref={ref} id={thisPanelClass}></div>
    </CustomScrollbar>
  );
};
