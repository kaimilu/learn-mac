/**
 * 路由设置，代理，中间件 及 数据库模型
 */
const generateRoutes = require('./routes')
const generateActions = require('./actions')


module.exports = (router, model, prefix, middlewares) => {
  const actions = generateActions(model)

  generateRoutes(
    router,
    model.modelName,
    actions,
    prefix,
    middlewares
  )
}