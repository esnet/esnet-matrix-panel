import React from 'react';
import { PanelProps, GrafanaTheme2 } from '@grafana/data';
import { MatrixOptions } from 'types';
import { parseData } from 'dataParser';
import { useTheme2, CustomScrollbar } from '@grafana/ui';

import * as Matrix from './matrix.js';

interface Props extends PanelProps<MatrixOptions> {
  fieldConfig: any;
  options: MatrixOptions;
}

/** A centered, themed message panel used for empty / guidance / error states. */
const StatePanel: React.FC<{ theme: GrafanaTheme2; title: string; lines: string[] }> = ({ theme, title, lines }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      textAlign: 'center',
      padding: theme.spacing(2),
      color: theme.colors.text.secondary,
      fontFamily: theme.typography.fontFamily,
    }}
  >
    <div
      style={{
        fontSize: theme.typography.h4.fontSize,
        fontWeight: theme.typography.fontWeightMedium as any,
        color: theme.colors.text.primary,
        marginBottom: theme.spacing(1),
      }}
    >
      {title}
    </div>
    {lines.map((line, i) => (
      <div key={i} style={{ fontSize: theme.typography.body.fontSize, maxWidth: 420, lineHeight: 1.5 }}>
        {line}
      </div>
    ))}
  </div>
);

/** Render a cell's value as plain text for the table view. */
const cellText = (d: any): string => {
  if (d === -1) {
    return '—';
  }
  if (d.isNull) {
    return 'null';
  }
  return `${d.display.text}${d.display.suffix ? ' ' + d.display.suffix : ''}`;
};

/** An accessible HTML table alternative to the SVG matrix (keyboard + screen-reader friendly). */
const MatrixTable: React.FC<{ theme: GrafanaTheme2; parsed: any; options: MatrixOptions }> = ({
  theme,
  parsed,
  options,
}) => {
  const th: React.CSSProperties = {
    border: `1px solid ${theme.colors.border.weak}`,
    padding: '4px 8px',
    textAlign: 'right',
    fontWeight: theme.typography.fontWeightMedium as any,
    whiteSpace: 'nowrap',
    position: 'sticky',
    top: 0,
    background: theme.colors.background.primary,
  };
  const td: React.CSSProperties = {
    border: `1px solid ${theme.colors.border.weak}`,
    padding: '4px 8px',
    textAlign: 'right',
    whiteSpace: 'nowrap',
  };
  return (
    <CustomScrollbar autoHeightMin="100%">
      <table
        style={{
          borderCollapse: 'collapse',
          fontFamily: theme.typography.fontFamily,
          fontSize: theme.typography.bodySmall.fontSize,
          color: theme.colors.text.primary,
        }}
      >
        <caption style={{ captionSide: 'top', textAlign: 'left', color: theme.colors.text.secondary, padding: '4px 0' }}>
          {`${options.sourceText || 'Rows'} × ${options.targetText || 'Columns'} — ${options.valueText || 'Value'}`}
        </caption>
        <thead>
          <tr>
            <th style={{ ...th, textAlign: 'left', left: 0, zIndex: 1 }} scope="col">
              {options.sourceText || 'Rows'}
            </th>
            {parsed.columns.map((c: string, i: number) => (
              <th key={i} style={th} scope="col">
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {parsed.rows.map((r: string, ri: number) => (
            <tr key={ri}>
              <th style={{ ...th, textAlign: 'left', position: 'sticky', left: 0, top: 'auto' }} scope="row">
                {r}
              </th>
              {parsed.columns.map((c: string, ci: number) => (
                <td key={ci} style={td}>
                  {cellText(parsed.data[ri][ci])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </CustomScrollbar>
  );
};

const EMPTY_PARSED = {
  rows: null,
  columns: null,
  data: null,
  legend: null,
  colMetadata: [],
  colCategories: [],
  rowMetadata: [],
  rowCategories: [],
  rowTotals: [],
  colTotals: [],
  valueDomain: null,
};

export const EsnetMatrix: React.FC<Props> = ({ options, data, width, height, id }) => {
  const theme = useTheme2();

  // Inspect the incoming data + field mapping to choose the most helpful guidance.
  const series = data && data.series && data.series.length ? data.series[0] : undefined;
  const fields = series && series.fields ? series.fields : [];
  const hasNumericField = fields.some((f: any) => f.type === 'number');

  // Parse (never throws out of render — a failure becomes an error state below).
  let parsedData: any = EMPTY_PARSED;
  let parseError = false;
  try {
    parsedData = parseData(data, options, theme);
  } catch (error) {
    console.error('matrix data error: ', error);
    parseError = true;
    parsedData = EMPTY_PARSED;
  }

  // IMPORTANT: call the render hook unconditionally (stable hook order across all
  // branches below). When we render a non-SVG state, the ref stays unattached and
  // the D3 effect harmlessly no-ops on a null element.
  const ref = Matrix.matrix(
    parsedData.rows,
    parsedData.columns,
    parsedData.data,
    id,
    width,
    height,
    options,
    parsedData.legend,
    parsedData.colMetadata,
    parsedData.colCategories,
    parsedData.rowMetadata,
    parsedData.rowCategories,
    parsedData.rowTotals,
    parsedData.colTotals,
    parsedData.valueDomain
  );

  if (!series || fields.length === 0) {
    return (
      <StatePanel
        theme={theme}
        title="No data"
        lines={[
          'This panel needs a non-time-series table with a Rows column, a Columns column, and a numeric Value column.',
          'Run a query that returns that shape, then map the fields in the panel options.',
        ]}
      />
    );
  }

  if (fields.length < 2 || !hasNumericField) {
    return (
      <StatePanel
        theme={theme}
        title="Finish setting up the matrix"
        lines={[
          'Select your Rows, Columns, and Value fields under “Row/Column Options”.',
          !hasNumericField
            ? 'A numeric Value field is required to color the cells — your query returned no numeric column.'
            : 'The query needs at least two dimension columns (Rows and Columns) plus a numeric Value.',
        ]}
      />
    );
  }

  if (parseError) {
    return (
      <StatePanel
        theme={theme}
        title="Couldn’t render the matrix"
        lines={['There was a problem processing the data. Check that Rows, Columns, and a numeric Value field are mapped.']}
      />
    );
  }

  if (parsedData.data === 'too many inputs') {
    return (
      <StatePanel
        theme={theme}
        title="Too many cells to render"
        lines={['This matrix would exceed 50,000 cells. Add limits or filters to your query to reduce the number of rows and columns.']}
      />
    );
  }

  if (parsedData.data == null) {
    return (
      <StatePanel
        theme={theme}
        title="No data"
        lines={['The query returned no rows. Adjust the query or time range to return data.']}
      />
    );
  }

  if (options.showTableView) {
    return <MatrixTable theme={theme} parsed={parsedData} options={options} />;
  }

  const thisPanelClass = `matrix-panel-${id}`;
  return (
    <CustomScrollbar autoHeightMin="100%">
      <div ref={ref} id={thisPanelClass}></div>
    </CustomScrollbar>
  );
};
