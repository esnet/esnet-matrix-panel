import React from 'react';
import { PanelProps } from '@grafana/data';
import { MatrixOptions } from 'types';
// import * as d3 from 'd3';

import * as matrix from './matrix.js';

interface Props extends PanelProps<MatrixOptions> {}

export const esnetMatrix: React.FC<Props> = ({ options, data, width, height, id }) => {
  const ref = matrix.matrix(
    data,
    options.sourceField,
    options.targetField,
    options.valueField,
    height,
    options.cellSize,
    options.cellPadding,
    options.txtLength,
    options.txtSize
  );
  return <svg ref={ref} width={width} height={height}></svg>;
};
