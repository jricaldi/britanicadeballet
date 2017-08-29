const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const postcssImport = require('postcss-smart-import');
const postnext = require('postcss-cssnext');
const postcssFlexibility = require('postcss-flexibility');

const clientPath = path.resolve('client');
const distPath = path.resolve(__dirname, 'dist');

const basicEntry = [
  'webpack-hot-middleware/client?reload=true',
];

module.exports = {
  context: clientPath,
  devtool: 'inline-source-map',
  entry: {
    main: basicEntry.concat('./main.js'),
    vendor: [
      'jquery',
      'react',
      'mobx',
      'aos',
      'gsap',
    ],
  },
  output: {
    path: distPath,
    filename: '[name].[hash].js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['env', 'stage-0', 'react'],
              plugins: [
                'react-html-attrs',
                'transform-decorators-legacy',
                [
                  'transform-object-rest-spread',
                  { useBuiltIns: true },
                ],
              ],
            },
          },
        ],
      },
      {
        test: /\.(css|scss)$/i,
        use: [
          {
            loader: 'style-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins: [
                postcssImport,
                postnext,
                postcssFlexibility,
              ],
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          'url-loader?limit=10000',
          'img-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.json'],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'Británica de Ballet',
      template: 'templates/index.html',
      filename: 'index.html',
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'runtime',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
      ___OFFLINE_APP___: false,
    }),
  ],
};
