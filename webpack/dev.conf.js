var path = require('path')
var webpack = require('webpack')
var config = require('../config')
var baseConf = require('./base.conf.js')

baseConf.entry.app = baseConf.entry.app.concat([
  `webpack-dev-server/client?${config.assetsPublicPath}`,
  'webpack/hot/dev-server',
])

baseConf.plugins = baseConf.plugins.concat([
  new webpack.HotModuleReplacementPlugin()
])

baseConf.devtool = ['source-map']

baseConf.module.loaders = [
  {
    test: /\.scss$/,
    loader: 'style!css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass',
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
