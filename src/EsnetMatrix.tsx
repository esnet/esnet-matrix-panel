import React from 'react';
import { FieldConfigSource, PanelProps } from '@grafana/data';
import { MatrixOptions } from 'types';
import { parseData } from 'dataParser';
import { useStyles2, useTheme2, CustomScrollbar } from '@grafana/ui';

import * as Matrix from './matrix.js';

interface Props extends PanelProps<MatrixOptions> {
  fieldConfig: FieldConfigSource;
  options: MatrixOptions;
}

export const EsnetMatrix: React.FC<Props> = ({ options, data, width, height, id }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const theme = useTheme2();
  const styles = useStyles2(Matrix.getStyles);
  const parsedData = React.useMemo(() => {
    return parseData(data, options, theme);
  }, [data, options, theme]);

  React.useEffect(() => {
    if (!ref.current || 'error' in parsedData) {
      return;
    }
    Matrix.createViz(
      ref.current,
      id,
      theme,
      styles,
      options,
      parsedData.rowNames,
      parsedData.rowCategories,
      parsedData.colNames,
      parsedData.colCategories,
      parsedData.data,
      parsedData.legend,
    );
  }, [ref, id, theme, styles, options, parsedData]);

  if ('error' in parsedData) {
    console.error(parsedData.error);
    switch (parsedData.error) {
      case 'too many inputs':
        return <div>Too many data points!  Try adding limits to your query.</div>;
        break;
      case 'no data':
        return <div>No data</div>;
        break;
      default:
        return <div>Unknown error: {parsedData.error}</div>;
    }
  }

  return (
    <CustomScrollbar autoHeightMin="100%">
      <div ref={ref} id={`matrix-panel-${id}`}></div>
    </CustomScrollbar>
  );
};
