import React from 'react';
import { FieldConfigSource, PanelProps } from '@grafana/data';
import { MatrixOptions } from 'types';
import { parseData } from 'dataParser';
import { useTheme2, ScrollContainer } from '@grafana/ui';

import * as Matrix from './matrix.js';

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
        return <div>Unknown error: {parsedData.data}</div>;
    }
  }

  if (
    parsedData.rowNames === null
    || parsedData.colNames === null
    || parsedData.data === null
    || parsedData.legend === null) {
    return <div>No data</div>;
  }

  const ref = Matrix.matrix(
    parsedData.rowNames,
    parsedData.colNames,
    parsedData.data,
    id,
    options,
    parsedData.legend,
    parsedData.colCategories,
    parsedData.rowCategories,
  );
  const thisPanelClass = `matrix-panel-${id}`;

  return (
    <ScrollContainer minHeight="100%">
      <div ref={ref} id={thisPanelClass}></div>
    </ScrollContainer>
  );
};
