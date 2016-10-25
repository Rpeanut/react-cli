var path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var config = require('../config')
var baseConf = require('./base.conf.js')

baseConf.plugins = baseConf.plugins.concat([
  new ExtractTextPlugin('css/[name].css')
])

baseConf.module.loaders = [
  {
    test: /\.scss$/,
    loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass'),
    exclude: /node_modules/
  },
  {
    test: /\.jsx?$/,
    loader: 'react-hot!babel',
    exclude: /node_modules/
  },
  {
    test: /\.(jpg|png|gif|svg)$/,
    loader: 'url?limit=8192&name=img/[name].[ext]',
    exclude: /node_modules/
  }
  ,
  {
    test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
    loader: 'url?limit=8192&name=font/[name].[ext]',
    exclude: /node_modules/
  }
]

module.exports = baseConf
