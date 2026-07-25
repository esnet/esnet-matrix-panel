// force timezone to UTC to allow tests to work regardless of local timezone
// generally used by snapshots, but can affect specific tests
process.env.TZ = 'UTC';

const { grafanaESModules, nodeModulesToTransform } = require('./.config/jest/utils');

// matrix.js pulls in d3-selection/d3-transition, which ship ESM only. The scaffolded
// list covers plain `d3` (and d3-color/d3-interpolate) but not these, so extend it.
const esModules = [...grafanaESModules, 'd3-selection', 'd3-transition', 'd3-dispatch', 'd3-ease', 'd3-timer'];

module.exports = {
  // Jest configuration provided by Grafana scaffolding
  ...require('./.config/jest.config'),
  transformIgnorePatterns: [nodeModulesToTransform(esModules)],
};
