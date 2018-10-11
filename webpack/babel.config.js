const babelConfig = {
  presets: [
    ['@babel/preset-env', {
      targets: 'cover 99.5%',
    }],
    '@babel/preset-react',
  ],

  plugins: [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-syntax-dynamic-import',
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-export-namespace-from',
    ['@babel/plugin-transform-runtime', { helpers: true, regenerator: false }],
  ],

  ignore: [
    'node_modules/**/*.js',
    'server/bundles/**/*.js',
    'server/bin/**/*.js',
  ],
};

module.exports = babelConfig;
