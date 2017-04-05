var debug = process.env.NODE_ENV !== 'production';
var webpack = require('webpack')
var path = require('path');

module.exports = {
  context: path.join(__dirname, 'src'),
  devtool: debug && 'inline-sourcemap',
  entry: './main.js',
  output: {
    path: path.join(__dirname, 'src'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
        },
      },
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' },
    ],
  },
  resolve: {
    extensions: ['.js', '.json'],
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};
