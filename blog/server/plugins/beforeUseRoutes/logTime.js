const log =require('../../utils/log')
/**
 * 返回一个具有异步 beforeUseRoutes 方法的匿名类
 */
module.exports = class {
  async beforeUseRoutes({ app, redis }) {
    app.use(async (ctx, next) => {
      const start = new Date()
      await next()
      const ms = new Date() - start
      /**
       * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/decodeURIComponent
       * decodeURIComponent(encodedURI): 将已编码 URI 中所有能识别的转义序列转换成原字符
       */
      log.info(`${ctx.method} ${decodeURIComponent(ctx.url)} - ${ms}ms`)
    })
  }
}