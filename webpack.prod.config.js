const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OfflinePlugin = require('offline-plugin');
const postcssImport = require('postcss-smart-import');
const postnext = require('postcss-cssnext');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

const clientPath = path.resolve('client');
const staticPath = path.resolve('static');
const distPath = path.resolve(__dirname, 'dist');

const banner = `
/*!
 * Designed by Jorge Ricaldi github.com/jricaldi
 * */`;

module.exports = {
  context: clientPath,
  devtool: false,
  entry: {
    main: './main.js',
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
          {
            loader: 'img-loader',
            options: {
              enabled: true,
              gifsicle: {
                interlaced: true,
              },
              mozjpeg: {
                quality: 50,
                progressive: true,
              },
              optipng: true,
              pngquant: {
                floyd: 0.5,
                speed: 2,
              },
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.json'],
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'main.[hash].css',
    }),
    new HtmlWebpackPlugin({
      title: 'Británica de Ballet',
      template: 'templates/index.html',
      filename: 'index.html',
      minify: {
        collapseWhitespace: true,
      },
    }),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'runtime',
    }),
    new FaviconsWebpackPlugin(path.resolve(`${staticPath}/images/ico.png`)),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
      ___OFFLINE_APP___: true,
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
    new webpack.BannerPlugin({ banner, raw: true, entryOnly: true }),
    new OfflinePlugin({
      excludes: ['**/*.map'],
      updateStrategy: 'changed',
      autoUpdate: 1000 * 60,
      responseStrategy: 'network-first',
      ServiceWorker: {
        events: true,
        navigateFallbackURL: '/',
      },
    }),
  ],
};
