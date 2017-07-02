const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const postcssImport = require('postcss-smart-import');
const postnext = require('postcss-cssnext');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

const clientPath = path.resolve('client');
const staticPath = path.resolve('static');
const distPath = path.resolve(__dirname, 'dist');

module.exports = {
  context: clientPath,
  devtool: false,
  entry: './main.js',
  output: {
    path: distPath,
    filename: '[hash]-[name].js',
    publicPath: '/',
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
              presets: ['env', 'stage-0', 'react'],
              plugins: [
                'react-html-attrs',
                ['transform-object-rest-spread', { useBuiltIns: true }],
              ],
            },
          },
        ],
      },
      {
        test: /\.(css|scss)$/,
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
                  postnext,
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
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          'url-loader?limit=10000',
          'img-loader',
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
      template: 'templates/index.html',
      filename: 'index.html',
      minify: {
        collapseWhitespace: true,
      },
    }),
    new FaviconsWebpackPlugin(path.resolve(`${staticPath}/images/ico.png`)),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
  ],
};
