const withModuleFederation = require('@nrwl/react/module-federation');
const moduleFederationConfig = require('./module-federation.config');
const { merge } = require('webpack-merge');

const federatedModules = async () =>
  withModuleFederation({ ...moduleFederationConfig });

module.exports = async (config, context) => {
  const federatedModuleConfig = await federatedModules();
  return merge(federatedModuleConfig(config), {
    module: {
      //...module configs
    },
    resolve: {
      //... resolve configs
    },
  });
};
