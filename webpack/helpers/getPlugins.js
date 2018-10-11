import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const getPlugins = isProd => {
  console.log('something will come here.... later');
  return [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'Británica de Ballet',
      template: 'templates/index.html',
      filename: 'index.html',
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.DefinePlugin({
      ___OFFLINE_APP___: isProd,
    }),
  ];
};

export default getPlugins;
