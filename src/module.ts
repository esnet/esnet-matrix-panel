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
const URLCategory = ['Link Options'];
const RowOptions = ['Row/Column Options'];

const urlBool = (addUrl: boolean) => (config: MatrixOptions) => config.addUrl === addUrl;
// const eurlOtherBool = (urlOther: boolean) => (config: MatrixOptions) => config.urlOther === urlOther;
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
    FieldConfigProperty.Links,
  ]
});

plugin.setMigrationHandler((panel) => {
  if (panel.options.sortType === undefined) {
    panel.options.sortType = 'natural-asc'
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

  /////////----------- Link URL options ---------------////////////////
  builder.addBooleanSwitch({
    path: 'addUrl',
    name: 'Add Data Link',
    category: URLCategory,
    defaultValue: false,
  });
  builder.addTextInput({
    path: 'url',
    name: 'Link URL',
    description: 'URL to go to when square is clicked.',
    category: URLCategory,
    showIf: urlBool(true),
  });
  builder.addTextInput({
    path: 'urlVar1',
    name: 'Variable 1',
    description: 'The name of the template variable to pass the source label to',
    category: URLCategory,
    showIf: urlBool(true),
  });
  builder.addTextInput({
    path: 'urlVar2',
    name: 'Variable 2',
    description: 'The name of the template variable to pass the target label to',
    category: URLCategory,
    showIf: urlBool(true),
  });
  // builder.addBooleanSwitch({
  //   path: 'urlOther',
  //   name: 'Append more text',
  //   description: 'Ex: date',
  //   category: URLCategory,
  //   defaultValue: true,
  //   showIf: urlBool(true),
  // });
  // builder.addTextInput({
  //   path: 'urlOtherText',
  //   name: 'Text',
  //   description: 'Other text to append to URL',
  //   category: URLCategory,
  //   showIf: urlOtherBool(true),
  // });
});
