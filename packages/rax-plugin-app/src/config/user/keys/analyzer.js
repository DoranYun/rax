const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = (config, context, value) => {
  if (!value) return;
  const { command } = context;

  if (command === 'build') {
    config.plugin('bundleAnalyzer')
      .use(BundleAnalyzerPlugin);
  }
};
