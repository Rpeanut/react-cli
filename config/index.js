var baseConf = require('./base.conf.js')
var devConf = require('./dev.env.js')
var testConf = require('./test.env.js')
var prodConf = require('./test.env.js')

var baseConf

switch (process.env.NODE_ENV) {
  case 'prod':
  case 'production':
    module.exports = Object.assign({}, baseConf, prodConf)
    break

  case 'test':
    module.exports = Object.assign({}, baseConf, testConf)
    break

  default:
    module.exports = Object.assign({}, baseConf, devConf)
}
