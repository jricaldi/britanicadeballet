const debug = process.env.NODE_ENV !== 'production';
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const postcssImport = require('postcss-smart-import');
const postcssCss = require('precss');
const autoprefixer = require('autoprefixer');

const commonPlugins = [
  new ExtractTextPlugin({
    filename: 'bundle.css',
    publicPath: path.join(__dirname, 'src'),
  }),
];

module.exports = {
  context: path.join(__dirname, 'src'),
  devtool: debug && 'sourcemap',
  entry: './main.js',
  output: {
    path: path.join(__dirname, 'src'),
    filename: 'bundle.js',
  },
  module: {
    noParse: /jquery/,
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['react', 'es2015', 'stage-0'],
              plugins: [
                'react-html-attrs',
              ],
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: !debug,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: [
                  postcssImport,
                  postcssCss,
                  autoprefixer,
                ],
              },
            },
            {
              loader: 'sass-loader',
            },
          ],
          fallback: 'style-loader',
        }),
      },
      {
        test: /\.(png|jpg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
    ],
  },
  externals: {
    jquery: 'jQuery',
  },
  resolve: {
    extensions: ['.js', '.json'],
  },
  plugins: debug
    ? commonPlugins.concat([

    ])
    : commonPlugins.concat([
      new webpack.optimize.UglifyJsPlugin({
        sourcemap: debug,
        compress: {
          warnings: debug,
        },
      }),
    ]),
};
