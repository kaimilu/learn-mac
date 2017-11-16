const redis = require('../../model/redis')
const tokenService = require('../../service/token')

module.exports = class {

  /**
   * 异步 mountingRoute 方法
   * 返回一个对象，成员有：method,path,和middleware数组
   */
  async mountingRoute() {
    return {
      method: 'post',
      path: '/admin/logout',
      middleware: [middleware]
    }
  }
}


/**
 * 返回 ctx.body 对象
 * @param {koa 上下文} ctx 
 * @param {koa 指针器} next 
 */
async function middleware(ctx, next) {
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
  } else {
    await redis.del('token')
    return ctx.body = {
      status: 'success',
      description: 'Token deleted'
    }
  }
}
