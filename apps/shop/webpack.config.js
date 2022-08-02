const withModuleFederation = require('@nrwl/react/module-federation');
const moduleFederationConfig = require('./module-federation.config');
const { merge } = require('webpack-merge');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

const federatedWebpack = withModuleFederation({
  ...moduleFederationConfig,
});

module.exports = new Promise((resolve) =>
  federatedWebpack.then((fn) => {
    resolve((config) =>
      fn(merge(config, { plugins: [new NodePolyfillPlugin()] }))
    );
  })
);
