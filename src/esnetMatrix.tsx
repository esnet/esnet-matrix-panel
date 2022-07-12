import React from 'react';
import { PanelProps } from '@grafana/data';
import { MatrixOptions } from 'types';
// import * as d3 from 'd3';

import * as Matrix from './matrix.js';

interface Props extends PanelProps<MatrixOptions> {}

export const EsnetMatrix: React.FC<Props> = ({ options, data, width, height, id }) => {
  const ref = Matrix.matrix(
    data,
    id,
    height,
    options
  );
  return <svg ref={ref} width={width} height={height}></svg>;
};
