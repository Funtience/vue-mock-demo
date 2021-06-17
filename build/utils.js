const path = require('path')

/**
 * @name resolvePath
 * @description 解析路径
 * @param {String} filename - 路径
 * @returns 解析后的路径
 */
function resolvePath(filename) {
  return path.join(__dirname, '../', filename)
}

function remoteMock(app) {
  if (!app) return
  if (!process.env.MOCK) return

  const clearMockCache = () => {
    var cache = require.cache
    for (var key in cache) {
      if (key.indexOf('mocks') !== -1) {
        delete cache[key]
      }
    }
  }

  app.all('/api/backend/*', (req, res) => {
    var filename = resolvePath('mocks/index.js')
    var mock = require(filename)
    var reqPath = req.path
    var response = mock[reqPath]

    res.send(response)
    clearMockCache()
  })
}

module.exports = {
  resolvePath,
  remoteMock,
}
