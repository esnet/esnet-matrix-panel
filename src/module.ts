import { FieldOverrideContext, getFieldDisplayName, PanelPlugin } from '@grafana/data';

import { MatrixOptions } from './types';
import { esnetMatrix } from './esnetMatrix';

/**
 * Grafana panel plugin main module
 *
 * @param {*} { panel:
 *  React.ComponentType<PanelProps<NetSageSankeyOptions>> | null
 * }
 * @return {*} { builder: PanelOptionsEditorBuilder<NetSageSankeyOptions> }
 */
const OptionsCategory = ['Display'];

export const plugin = new PanelPlugin<MatrixOptions>(esnetMatrix);

plugin.setPanelOptions(builder => {
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
    // ---- todo: figure out how to guess at a default for these
    // defaultValue: options[1],
  });
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
});

// .useFieldConfig({});
