const fs = require('fs')
const path = require('path')

require('@babel/register')({
  presets: ['@babel/preset-env'],
  cache: false,
  babelrc: false,
})

const map = {}
const specDir = path.resolve(__dirname, './specs')
fs.readdirSync(specDir).forEach((value) => {
  const specPath = path.resolve(specDir, value)
  const spec = require(specPath)
  Object.assign(map, spec || {})
})
module.exports = map
