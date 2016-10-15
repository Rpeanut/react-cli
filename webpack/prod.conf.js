var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var config = require('../config')
var baseConf = require('./base.conf.js')

baseConf.output.filename = 'js/[name].[chunkhash].js'

baseConf.plugins = baseConf.plugins.concat([
  new webpack.DefinePlugin({
    ENV_PRODUCTION: true,
  }),
  new ExtractTextPlugin('css/[name].[chunkhash].css'),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  })
])

baseConf.module.loaders = [
  {
    test: /\.scss$/,
    loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[hash:base64:7]!postcss!sass'),
    exclude: /node_modules/
  }, {
    test: /\.jsx?$/,
    loader: 'react-hot!babel',
    exclude: /node_modules/
  },
  {
    test: /\.(jpg|png|gif|svg)$/,
    loader: 'url?limit=8192&name=img/[name].[hash:7].[ext]',
    exclude: /node_modules/
  }
  ,
  {
    test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
    loader: 'url?limit=8192&name=font/[name].[hash:7].[ext]',
    exclude: /node_modules/
  }
]

module.exports = baseConf
