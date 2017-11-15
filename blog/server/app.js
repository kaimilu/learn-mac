

const log = require('./utils/log')
const Koa = require('koa')
const koaRouter = require('koa-router')
const mongoRest = require('./mongoRest')
const models = require('./model/mongo')
const redis = require('./model/redis')
const config = require('./conf/config')
const configName = process.env.NODE_ENV === '"development"' ? 'dev' : 'prod'
const blogpackConfig = require(`./build/blogpack.${configName}.config`)
blogpackConfig.models = models
blogpackConfig.redis = redis
const Blogpack = require('./blogpack')
const laosu = global.laosu = new Blogpack(blogpackConfig)

const app = new Koa()
const router = koaRouter()

module.exports = (async() => {
  try {
    await laosu.beforeUseRoutes({
      config: laosu.config,
      app,
      router,
      models,
      redis
    })

    const beforeRestfulRoutes = laosu.getBeforeRestfulRoutes()
    const afterRestfulRoutes = laosu.getAfterRestfulRoutes()

    const middlewareRoutes = await laosu.getMiddlewareRoutes()

    for (const item of middlewareRoutes) {
      const middlewares = [...item.middleware]
      item.needBeforeRoutes && middlewares.unshift(...beforeRestfulRoutes)
      item.needAfterRoutes && middlewares.push(...afterRestfulRoutes)
      router[item.method](item.path, ...middlewares)
    }
    
    Object.keys(models).map(name => models[name]).forEach(model => {
      console.log('===================')
      console.log(model.modelName)
      mongoRest(router, model, '/api', {
        beforeRestfulRoutes,
        afterRestfulRoutes
      })
    })

    app.use(router.routes())

    const beforeServerStartArr = laosu.getBeforeServerStartFuncs()

    for (const middleware of beforeServerStartArr) {
      await middleware()
    }

    app.listen(config.serverPort, () => {
      log.info(`koa2 is running at ${config.serverPort}`)
    })
    
  } catch (err) {
    log.error(err)
  }
})()
