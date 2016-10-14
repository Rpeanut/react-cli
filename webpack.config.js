switch (process.env.NODE_ENV) {
  case 'test':
    module.exports = require('./webpack/test.conf')
    break

  case 'prod':
  case 'production':
    module.exports = require('./webpack/prod.conf')
    break

  default:
    module.exports = require('./webpack/dev.conf')
    break
}
