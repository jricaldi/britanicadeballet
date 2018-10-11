import babelConfig from '../babel.config';

const jsFilesLoader = () => {
  const options = Object.assign(babelConfig, {
    presets: babelConfig.presets,
    plugins: babelConfig.plugins,
    babelrc: false,
  });
  return {
    test: /\.js$/,
    exclude: /(node_modules|bower_components)/,
    use: [
      {
        loader: 'babel-loader',
        options,
      },
    ],
  };
};

export default jsFilesLoader;
