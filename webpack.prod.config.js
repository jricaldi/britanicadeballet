const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const postcssImport = require('postcss-smart-import');
const postcssCss = require('precss');
const autoprefixer = require('autoprefixer');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const CopyWebpackPlugin = require('copy-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

const staticPath = path.resolve('./static');
const bundlePath = path.resolve(staticPath, 'bundles');

module.exports = {
  context: path.resolve('./client'),
  devtool: false,
  entry: './main.js',
  output: {
    path: bundlePath,
    filename: '[hash]-bundle.js',
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
    new CopyWebpackPlugin([{
      from: staticPath,
      to: bundlePath,
    }]),
    new FaviconsWebpackPlugin(path.resolve(`${staticPath}/images/logo.png`)),
    new ImageminPlugin({
      test: /\.(jpe?g|png|gif|svg)$/i,
      pngquant: {
        quality: '95-100',
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourcemap: false,
      compress: {
        warnings: false,
      },
    }),
  ],
};
