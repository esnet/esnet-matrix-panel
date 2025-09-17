import React from 'react';
import { FieldConfigSource, PanelProps } from '@grafana/data';
import { MatrixOptions } from 'types';
import { parseData } from 'dataParser';
import { useTheme2, CustomScrollbar } from '@grafana/ui';
// import { useTheme2 } from '@grafana/ui';

import * as Matrix from './matrix.js';
// import * as Legend from 'matrixLegend.js';

interface Props extends PanelProps<MatrixOptions> {
  fieldConfig: FieldConfigSource;
  options: MatrixOptions;
}

export const EsnetMatrix: React.FC<Props> = ({ options, data, width, height, id }) => {
  const theme = useTheme2();
  // console.log(options);
  const parsedData = parseData(data, options, theme);
  if (typeof parsedData.data === "string") {
    console.error(parsedData.data);
    switch (parsedData.data) {
      case 'too many inputs':
        return <div>Too many data points!  Try adding limits to your query.</div>;
        break;
      default:
        return <div>Unknown Error</div>;
    }
  }

  if (
    parsedData.rows === null
    || parsedData.columns === null
    || parsedData.data === null
    || parsedData.legend === null) {
    return <div>No Data</div>;
  }

  const ref = Matrix.matrix(parsedData.rows, parsedData.columns, parsedData.data, id, options, parsedData.legend);
  const thisPanelClass = `matrix-panel-${id}`;

  return (
    <CustomScrollbar autoHeightMin="100%">
      <div ref={ref} id={thisPanelClass}></div>
    </CustomScrollbar>
  );
};
