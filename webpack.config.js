const debug = process.env.NODE_ENV !== 'production';
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const postcssImport = require('postcss-smart-import');
const postcssCss = require('precss');
const autoprefixer = require('autoprefixer');

const port = process.env.PORT;
const clientPath = path.join(__dirname, 'client');

const entryBasic = [
  'react-hot-loader/patch',
  'webpack-dev-server/client?http://localhost:' + port,
  'webpack/hot/only-dev-server',
];

const commonPlugins = [
  new ExtractTextPlugin({
    filename: 'bundle.css',
    publicPath: clientPath,
  }),
];

module.exports = {
  context: clientPath,
  devtool: debug && 'inline-source-map',
  entry: debug ? entryBasic.concat('./main.js') : ['babel-polyfill', './main.js'],
  output: {
    path: path.join(clientPath, 'bundles'),
    filename: 'bundle.js',
  },
  devServer: {
    hot: debug,
    contentBase: path.join(clientPath, 'bundles'),
    publicPath: clientPath,
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
                ["transform-object-rest-spread", { "useBuiltIns": true }],
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
      new webpack.HotModuleReplacementPlugin(),
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
