var path = require('path')
var webpack = require('webpack')
var WebpackDevServer = require('webpack-dev-server')
var open = require('open')
var config = require('../config')
var webpackConfig = require('./dev.conf')

// live
const server = new WebpackDevServer(webpack(webpackConfig), {
  contentBase: path.resolve(__dirname, config.assetsRoot),
  hot: true,
  historyApiFallback: true,
  stats: {
    colors: true,
    chunks: false
  }
})

server.listen(config.port, 'localhost', err => {
  if (err) {
    console.log(err)
    return
  }
  var url = `http://localhost:${config.port}`
  console.log(`Listening at ${url}`)
  open(url)
})