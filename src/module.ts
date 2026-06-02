import { Field, FieldConfigProperty, FieldType, PanelPlugin } from '@grafana/data';
// import { standardOptionsCompat } from 'grafana-plugin-support';
import { MatrixOptions } from './types';
import { EsnetMatrix } from './EsnetMatrix';
// import { FieldConfig } from './panelcfg.gen';

/**
 * Grafana panel plugin main module
 *
 * @param {*} { panel:
 *  React.ComponentType<PanelProps<NetSageSankeyOptions>> | null
 * }
 * @return {*} { builder: PanelOptionsEditorBuilder<NetSageSankeyOptions> }
 */
const OptionsCategory = ['Display'];
const RowOptions = ['Row/Column Options'];

const staticBool = (inputList: boolean) => (config: MatrixOptions) => config.inputList === inputList;
const legendBool = (showLegend: boolean) => (config: MatrixOptions) => config.showLegend === showLegend;
const colGroupingBool = (enableColGrouping: boolean) => (config: MatrixOptions) => config.enableColGrouping === enableColGrouping;
const rowGroupingBool = (enableRowGrouping: boolean) => (config: MatrixOptions) => config.enableRowGrouping === enableRowGrouping;

// const buildStandardOptions = (): any => {
//   const options = [FieldConfigProperty.Unit, FieldConfigProperty.Color, FieldConfigProperty.Thresholds];
//   return standardOptionsCompat(options);
// };

export const plugin = new PanelPlugin<MatrixOptions>(EsnetMatrix);

plugin.useFieldConfig({
  standardOptions: {
    [FieldConfigProperty.Thresholds]: {},
    [FieldConfigProperty.Color]: {
      settings: {
        preferThresholdMode: true,
      }
    }
  },
  disableStandardOptions: [
    FieldConfigProperty.NoValue,
  ]
});

plugin.setMigrationHandler((panel) => {
  if (panel.options.sortType === undefined) {
    panel.options.sortType = 'natural-asc'
  }

  if (panel.options.addUrl) {
    // Migrate link configuration to a grafana data link
    let url = panel.options.url;
    const sourceField = panel.options.sourceField;
    const targetField = panel.options.targetField;
    if (url !== undefined) {
      const variableRegex = /\w+/;
      const urlVar1 = panel.options.urlVar1;
      if (
        urlVar1 !== undefined && urlVar1.match(variableRegex)
        && sourceField !== undefined && sourceField.length >= 1
      ) {
        url = url.concat(
          '&var-' + urlVar1 + '=${__data.fields["' + encodeURIComponent(sourceField) + '"]}',
        );
      }
      const urlVar2 = panel.options.urlVar2;
      if (
        urlVar2 !== undefined && urlVar2.match(variableRegex)
        && targetField !== undefined && targetField.length >= 1
      ) {
        url = url.concat(
          '&var-' + urlVar2 + '=${__data.fields["' + encodeURIComponent(targetField) + '"]}',
        );
      }

      if (!panel.fieldConfig.defaults.links) {
        panel.fieldConfig.defaults.links = [];
      }
      panel.fieldConfig.defaults.links.push({
        'title': 'Show details',
        'url': url,
      });
    }

    delete panel.options.addUrl;
    delete panel.options.url;
    delete panel.options.urlVar1;
    delete panel.options.urlVar2;
  }

  return panel.options;
});

plugin.setPanelOptions((builder) => {
  /////////--------- Row and Column options ---------////////////////
  builder.addSelect({
    path: 'sortType',
    name: 'Sort Type',
    description: 'Sorting to apply to row/column headings',
    category: RowOptions,
    defaultValue: 'natural-asc',
    settings: {
      allowCustomValue: false,
      options: [
        { value: 'none', label: 'None' },
        { value: 'natural-asc', label: 'Natural ascending' },
        { value: 'natural-desc', label: 'Natural descending' },
      ],
    },
  });
  builder.addBooleanSwitch({
    path: 'inputList',
    name: 'Use Static Row/Column Headings',
    category: RowOptions,
    defaultValue: false,
  });
  builder.addTextInput({
    path: 'staticRows',
    name: 'Row Headings',
    description: 'Terms to use as matrix rows (comma separated)',
    category: RowOptions,
    showIf: staticBool(true),
  });
  builder.addTextInput({
    path: 'staticColumns',
    name: 'Column Headings',
    description: 'Terms to use as matrix columns (comma separated)',
    category: RowOptions,
    showIf: staticBool(true),
  });
  builder.addFieldNamePicker({
    path: 'sourceField',
    name: 'Rows Field',
    description: 'Select the field that should be used for the rows',
    category: RowOptions,
    settings: {
      filter: (field: Field) => field.type === FieldType.string,
    },
  });
  builder.addFieldNamePicker({
    path: 'targetField',
    name: 'Columns Field',
    description: 'Select the field to use for the columns',
    category: RowOptions,
    settings: {
      filter: (field: Field) => field.type === FieldType.string,
    },
  });
  builder.addFieldNamePicker({
    path: 'valueField',
    name: 'Value Field',
    description: 'Select the numeric field used to color the matrix cells.',
    category: RowOptions,
    settings: {
      filter: (field: Field) => field.type === FieldType.number,
    },
  });
  builder.addFieldNamePicker({
    path: 'colCategoryField',
    name: 'Column Category Field',
    description: 'Select the field to use for grouping columns into categories',
    category: RowOptions,
    showIf: colGroupingBool(true),
    settings: {
      filter: (field: Field) => field.type === FieldType.string,
    },
  });
  builder.addBooleanSwitch({
    path: 'enableColGrouping',
    name: 'Enable Column Grouping',
    description: 'Show category headers and group columns by category',
    category: OptionsCategory,
    defaultValue: false,
  });
  builder.addBooleanSwitch({
    path: 'enableRowGrouping',
    name: 'Enable Row Grouping',
    description: 'Show row category headers and group rows by category',
    category: OptionsCategory,
    defaultValue: false,
  });
  builder.addNumberInput({
    path: 'colCategoryHeaderHeight',
    name: 'Column Groups Header Height',
    description: 'Space in pixels above the matrix reserved for column group labels',
    category: OptionsCategory,
    showIf: colGroupingBool(true),
    settings: {
      placeholder: 'Auto',
      integer: true,
      min: 20,
      max: 300,
    },
    defaultValue: 100,
  });
  builder.addNumberInput({
    path: 'colCategoryGap',
    name: 'Gap Between Groups',
    description: 'Additional spacing between category groups in pixels',
    category: OptionsCategory,
    showIf: colGroupingBool(true),
    settings: {
      placeholder: 'Auto',
      integer: true,
      min: 0,
      max: 200,
    },
    defaultValue: 4,
  });

  ////////------------ Row Grouping Options ----------------/////////////
  builder.addFieldNamePicker({
    path: 'rowCategoryField',
    name: 'Row Category Field',
    description: 'Select the field to use for grouping rows into categories',
    category: RowOptions,
    showIf: rowGroupingBool(true),
    settings: {
      filter: (field: Field) => field.type === FieldType.string,
    },
  });
  builder.addNumberInput({
    path: 'rowCategoryHeaderWidth',
    name: 'Row Category Header Width',
    description: 'Space in pixels to the left reserved for row group labels',
    category: OptionsCategory,
    showIf: rowGroupingBool(true),
    settings: {
      placeholder: 'Auto',
      integer: true,
      min: 50,
      max: 300,
    },
    defaultValue: 100,
  });
  builder.addNumberInput({
    path: 'rowCategoryGap',
    name: 'Gap Between Row Groups',
    description: 'Additional spacing between row groups in pixels',
    category: OptionsCategory,
    showIf: rowGroupingBool(true),
    settings: {
      placeholder: 'Auto',
      integer: true,
      min: 0,
      max: 200,
    },
    defaultValue: 4,
  });

  ////////------------ General Matrix Options ----------------/////////////
  builder.addBooleanSwitch({
    path: 'showLegend',
    name: 'Show Legend',
    category: OptionsCategory,
    defaultValue: false,
  });
  builder.addSelect({
    path: 'legendType',
    name: 'Legend Type',
    category: OptionsCategory,
    showIf: legendBool(true),
    defaultValue: 'range',
    settings: {
      allowCustomValue: false,
      options: [
        { value: 'categorical', label: 'categorical' },
        { value: 'range', label: 'range' },
      ],
    },
  });
  builder.addTextInput({
    path: 'sourceText',
    name: 'Source Text',
    description: 'The text to be displayed in the tooltip.',
    category: OptionsCategory,
    defaultValue: 'From',
  });

  builder.addTextInput({
    path: 'targetText',
    name: 'Target Text',
    description: 'The text to be displayed in the tooltip.',
    category: OptionsCategory,
    defaultValue: 'To',
  });

  builder.addTextInput({
    path: 'valueText',
    name: 'Value Text',
    description: 'The text to be displayed in the tooltip.',
    category: OptionsCategory,
    defaultValue: 'Value',
  });

  builder.addNumberInput({
    path: 'cellSize',
    name: 'Cell Size',
    description: 'Adjust the size in pixels that each matrix cell should use.',
    category: OptionsCategory,
    settings: {
      placeholder: 'Auto',
      integer: true,
      min: 10,
      max: 50,
    },
    defaultValue: 15,
  });

  builder.addNumberInput({
    path: 'cellPadding',
    name: 'Cell Padding',
    description:
      'Adjust the padding between the matrix cells. Note that this is a relative size and does not directly translate to pixels.',
    category: OptionsCategory,
    settings: {
      placeholder: 'Auto',
      integer: true,
      min: 0,
      max: 100,
    },
    defaultValue: 5,
  });

  builder.addNumberInput({
    path: 'txtLength',
    name: 'Text Length',
    description: 'Maximum number of characters to display before truncating labels',
    category: OptionsCategory,
    settings: {
      placeholder: 'Auto',
      integer: true,
      min: 1,
      max: 300,
    },
    defaultValue: 50,
  });

  builder.addNumberInput({
    path: 'txtSize',
    name: 'Text Size',
    description: 'adjust the size of the text labels',
    category: OptionsCategory,
    settings: {
      placeholder: 'Auto',
      integer: true,
      min: 1,
      max: 200,
    },
    defaultValue: 10,
  });
  builder.addColorPicker({
    path: 'nullColor',
    name: 'Null Color',
    description: 'The color to use when the query returns a null value',
    category: OptionsCategory,
    defaultValue: '#E6E6E6',
  });
  builder.addColorPicker({
    path: 'defaultColor',
    name: 'No Data Color',
    description: 'The color to use when there is no data returned by the query',
    category: OptionsCategory,
    defaultValue: '#E6E6E6',
  });
});
