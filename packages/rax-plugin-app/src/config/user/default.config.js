const address = require('address');

module.exports = {
  inlineStyle: true,
  outputDir: 'build',
  publicPath: '/',
  devPublicPath: '/',
  exclude: 'node_modules',
  externals: '',
  analyzer: false,
  devServer: {
    compress: true,
    disableHostCheck: true,
    clientLogLevel: 'error',
    hot: true,
    quiet: true,
    overlay: false,
    host: address.ip(),
    port: 9999,
  }
};
