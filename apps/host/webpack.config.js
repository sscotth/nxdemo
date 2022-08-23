const { merge } = require('webpack-merge');
const { withModuleFederation } = require('@nrwl/react/module-federation');
const baseConfig = require('./module-federation.config');
const { dependencies } = require('../../package.json');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const outsideRemotes = {
  plugins: [
    new ModuleFederationPlugin({
      name: 'host',
      remotes: {
        app_exposes:
          'app_exposes@https://sscotth.github.io/vuetest/remoteEntry.js',
        cramfedemo:
          'cramfedemo@https://sscotth.github.io/cramfedemo/remoteEntry.js',
      },
      shared: {
        ...dependencies,
      },
    }),
  ],
};

/**
 * @type {import('@nrwl/react/module-federation').ModuleFederationConfig}
 **/
const defaultConfig = {
  ...baseConfig,
};

const fromModuleFederation = withModuleFederation(defaultConfig);

module.exports = new Promise((resolve) =>
  fromModuleFederation.then((fn) => {
    resolve((config) => fn(merge(config, outsideRemotes)));
  })
);
