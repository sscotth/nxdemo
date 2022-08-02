const withModuleFederation = require('@nrwl/react/module-federation');
const moduleFederationConfig = require('./module-federation.config');
const { merge } = require('webpack-merge');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

const federatedModules = async () =>
  withModuleFederation({ ...moduleFederationConfig });

module.exports = async (config, context) => {
  const federatedModuleConfig = await federatedModules();
  return merge(federatedModuleConfig(config), {
    plugins: [new NodePolyfillPlugin()],
  });
};
