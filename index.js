// Use source if we have coffeescript otherwise use lib
try {
  require('coffee-script');
  base = './src/'
} catch (e) {
  base = './lib/'
}

exports = module.exports = require(base + 'cheerio')

exports.parse = require(base + 'parse')
exports.render = require(base + 'render')
exports.utils = require(base + 'utils')

/*
  Attach other modules on here, this will allow testing to be done in mocha without recompiling
*/