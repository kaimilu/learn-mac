const bodyParser = require('koa-bodyparser')

/**
 * 返回一个具有异步 beforeUseRoutes 方法的匿名类
 */
module.exports = class {
  async beforeUseRoutes({ app }) {
    app.use(bodyParser())
  }
}