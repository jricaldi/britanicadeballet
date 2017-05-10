const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const postcssImport = require('postcss-smart-import');
const postcssCss = require('precss');
const autoprefixer = require('autoprefixer');

const clientPath = path.join(__dirname, 'client');
const staticPath = path.join(__dirname, 'static');

module.exports = {
  context: clientPath,
  devtool: false,
  entry: './main.js',
  output: {
    path: path.join(staticPath, 'bundles'),
    filename: '[hash]-bundle.js',
    publicPath: './bundles',
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
              presets: ['env', 'react'],
              plugins: [
                'react-html-attrs',
                ['transform-object-rest-spread', { useBuiltIns: true }],
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
                minimize: true,
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
  plugins: [
    new ExtractTextPlugin({
      filename: '[hash]-bundle.css',
    }),
    new HtmlWebpackPlugin({
      title: 'Britanica de Ballet',
      template: 'layout/index.html',
      filename: 'index.html',
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourcemap: false,
      compress: {
        warnings: false,
      },
    }),
  ],
};
