import { FieldOverrideContext, getFieldDisplayName, PanelPlugin, FieldConfigProperty } from '@grafana/data';
import { standardOptionsCompat } from 'grafana-plugin-support';
import { MatrixOptions } from './types';
import { EsnetMatrix } from './EsnetMatrix';

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

const buildStandardOptions = (): any => {
  const options = [FieldConfigProperty.Unit, FieldConfigProperty.Color];
  return standardOptionsCompat(options);
};

export const plugin = new PanelPlugin<MatrixOptions>(EsnetMatrix);
plugin.useFieldConfig({
  standardOptions: buildStandardOptions(),
});
plugin.setPanelOptions((builder) => {
  /////////--------- Row and Column options ---------////////////////
  builder.addBooleanSwitch({
    path: 'inputList',
    name: 'Use Static Row/Column Lists',
    category: RowOptions,
    defaultValue: false,
  });
  builder.addTextInput({
    path: 'staticRows',
    name: 'Row Array',
    description: 'Terms to use as matrix rows (comma separated)',
    category: RowOptions,
    showIf: staticBool(true),
  });
  builder.addTextInput({
    path: 'staticColumns',
    name: 'Column Array',
    description: 'Terms to use as matrix columns (comma separated)',
    category: RowOptions,
    showIf: staticBool(true),
  });
  builder.addSelect({
    path: 'sourceField',
    name: 'Rows Field',
    description: 'Select the field that should be used for the rows',
    category: RowOptions,
    settings: {
      allowCustomValue: false,
      options: [],
      getOptions: async (context: FieldOverrideContext) => {
        const options = [];
        if (context && context.data) {
          for (const frame of context.data) {
            for (const field of frame.fields) {
              const name = getFieldDisplayName(field, frame, context.data);
              const value = name;
              options.push({ value, label: name });
            }
          }
        }
        return Promise.resolve(options);
      },
    },
    // defaultValue: options[0],
  });
  builder.addSelect({
    path: 'targetField',
    name: 'Columns Field',
    description: 'Select the field to use for the columns',
    category: RowOptions,
    settings: {
      allowCustomValue: false,
      options: [],
      getOptions: async (context: FieldOverrideContext) => {
        const options = [];
        if (context && context.data) {
          for (const frame of context.data) {
            for (const field of frame.fields) {
              const name = getFieldDisplayName(field, frame, context.data);
              const value = name;
              options.push({ value, label: name });
            }
          }
        }
        return Promise.resolve(options);
      },
    },
  });
  builder.addSelect({
    path: 'valueField',
    name: 'Value Field',
    description: 'Select the numeric field used to color the matrix cells.',
    category: RowOptions,
    settings: {
      allowCustomValue: false,
      options: [],
      getOptions: async (context: FieldOverrideContext) => {
        const options = [];
        if (context && context.data) {
          for (const frame of context.data) {
            for (const field of frame.fields) {
              const name = getFieldDisplayName(field, frame, context.data);
              const value = name;
              options.push({ value, label: name });
            }
          }
        }
        return Promise.resolve(options);
      },
    },
    // defaultValue: options[2],
  });

  ////////------------ General Matrix Options ----------------/////////////
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
    name: 'value Text',
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
    description: 'adjust amount of space used for labels',
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

// .useFieldConfig({});
