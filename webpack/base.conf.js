var path = require('path')
var webpack = require('webpack')
var autoprefixer = require('autoprefixer')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var config = require('../config')

module.exports = {
  entry: {
    app: [path.resolve(__dirname, '../src/app.js')]
  },

  output: {
    path: config.assetsRoot,
    publicPath: config.assetsPublicPath,
    filename: 'js/[name].js'
  },

  plugins: [
    new webpack.DefinePlugin({
      __PRODUCTION__: false,
    }),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      title: 'react-cli',
      template: path.resolve(__dirname, '../index.html')
    }),
  ],

  resolve: {
    extensions: ['', '.js', '.jsx'],
    fallback: [path.join(__dirname, '../node_modules')],
    alias: {
      'src': path.resolve(__dirname, '../src'),
      'common': path.resolve(__dirname, '../src/common'),
      'containers': path.resolve(__dirname, '../src/containers'),
      'components': path.resolve(__dirname, '../src/components')
    }
  },

  resolveLoader: {
    fallback: [path.join(__dirname, '../node_modules')]
  },

  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: 'style!css?importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass',
        exclude: /node_modules/
      }, {
        test: /\.jsx?$/,
        loader: 'babel',
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
  },

  postcss: function () {
    return [autoprefixer]
  }
}