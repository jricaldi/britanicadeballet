import path from 'path';
import cssFilesLoader from './helpers/cssFilesLoader';
import imageFilesLoader from './helpers/imageFilesLoader';
import jsFilesLoader from './helpers/jsFilesLoader';
import getPlugins from './helpers/getPlugins';

const contextPath = path.resolve('client');
const outputPath = path.resolve(__dirname, 'dist');

const ENV_TYPE = {
  prod: 'production',
  dev: 'development',
};

const mode = process.env.NODE_ENV || ENV_TYPE.dev;
const isProd = process.env.NODE_ENV === ENV_TYPE.prod;

const config = {};

config.context = contextPath;

config.mode = mode;

config.devtool = 'inline-source-map';

config.entry = {
  main: ['webpack-hot-middleware/client', './main.js'],
};

config.output = {
  path: outputPath,
  filename: '[name].[hash].js',
  publicPath: '/',
};

config.optimization = {
  splitChunks: {
    cacheGroups: {
      commons: {
        test: /[\\/]node_modules[\\/]/,
        name: 'vendor',
        chunks: 'initial',
      },
    },
  },
  runtimeChunk: {
    name: 'manifest',
  },
};

config.module = {
  rules: [jsFilesLoader(isProd), cssFilesLoader, imageFilesLoader],
};

config.resolve = {
  extensions: ['.js', '.json'],
};

config.plugins = getPlugins(isProd);

export default config;
