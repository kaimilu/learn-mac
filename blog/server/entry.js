/**
 * babel-register NPM:
 * https://www.npmjs.com/package/babel-register
 * 
 * String.prototype.includes() MSDN:
 * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/includes
 */
require('babel-register')({
  plugins:['transform-async-to-generator'],
  ignore: function(filename) {
    if (filename.includes('koa-ratelimit')) return false
    if (filename.includes('node_modules')) return true
    return false
  }
})

require('./app.js')