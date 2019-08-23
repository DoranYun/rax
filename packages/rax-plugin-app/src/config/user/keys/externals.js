module.exports = (config, context, value) => {
  if (!value) return;

  const defaultExternals = config.get('externals');
  config.externals([].concat(value, defaultExternals));
};
