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

const buildStandardOptions = (): any => {
  const options = [FieldConfigProperty.Unit, FieldConfigProperty.Color];
  return standardOptionsCompat(options);
};

export const plugin = new PanelPlugin<MatrixOptions>(EsnetMatrix);
plugin.useFieldConfig({
  standardOptions: buildStandardOptions(),
});
plugin.setPanelOptions((builder) => {
  builder.addSelect({
    path: 'sourceField',
    name: 'Source Field',
    description: 'Select the fields that should be used as the source',
    category: OptionsCategory,
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
  builder.addTextInput({
    path: 'sourceText',
    name: 'Source Text',
    description: 'The text to be displayed in the tooltip.',
    category: OptionsCategory,
    defaultValue: 'From'
  });
  builder.addSelect({
    path: 'targetField',
    name: 'Target Field',
    description: 'Select the field to use as the target ',
    category: OptionsCategory,
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
    builder.addTextInput({
      path: 'targetText',
      name: 'Target Text',
      description: 'The text to be displayed in the tooltip.',
      category: OptionsCategory,
      defaultValue: 'To',
    });
  builder.addSelect({
    path: 'valueField',
    name: 'Value Field',
    description: 'Select the numeric field used to color the matrix cells.',
    category: OptionsCategory,
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
    defaultValue: 100,
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
    defaultValue: 100,
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


// .useFieldConfig({});
