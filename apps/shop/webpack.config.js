const withModuleFederation = require('@nrwl/react/module-federation');
const moduleFederationConfig = require('./module-federation.config');

const federatedWebpack = withModuleFederation({
  ...moduleFederationConfig,
});

module.exports = new Promise((resolve) => {
  federatedWebpack.then((fn) => {
    resolve((config) => {
      config.module.rules.push({
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'dts-loader',
            options: {
              ...moduleFederationConfig,
            },
          },
        ],
      });
      return fn(config);
    });
  });
});
