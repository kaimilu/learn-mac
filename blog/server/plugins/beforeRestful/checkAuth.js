const redis = require('../../model/redis')
const tokenService = require('../../service/token')

module.exports = class {
  async beforeRestful(ctx, next) {
    /**
     * startsWith()方法用来判断当前字符串是否是以另外一个给定的子字符串“开头”的
     * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
     */
    const isGettingUser = ctx.url.startsWith('/api/user')
    const isGettingAdmin = ctx.url.startsWith('/admin/')
    const isNotGet = ctx.url.startsWith('/api/') && ctx.method !== 'GET'
    if (!isGettingAdmin && !isGettingUser && !isNotGet) {
      return next()
    }

    const headers = ctx.request.headers
    let token
    try {
      token = headers['authorization']
    } catch (err) {
      return ctx.body = {
        status: 'fail',
        description: err
      }
    }
    
    if (!token) {
      return ctx.body = {
        status: 'fail',
        description: 'Token not found'
      }
    }

    const result = tokenService.verifyToken(token)
    if (result === false) {
      return ctx.body = {
        status: 'fail',
        description: 'Token verify failed'
      }
    }

    let reply = await redis.getAsync('token')
    if (reply === token) {
      return next()
    } else {
      return ctx.body = {
        status: 'fail',
        description: 'Token invalid'
      }
    }
    
  }
}