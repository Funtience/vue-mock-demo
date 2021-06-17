const utils = require('./build/utils')
module.exports = {
  devServer: {
    setup: (app) => {
      utils.remoteMock(app)
    },
  },
}
