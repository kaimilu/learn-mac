const devConfig = require('./blogpack.dev.config')
const useRoutesPrefix = '../plugins/beforeUseRoutes'
const isTest = process.env.NODE_ENV === 'TEST'
const config = Object.assign({}, devConfig)

const RatelimitPlugin = require(`${useRoutesPrefix}/ratelimit`)

// 非测试在注册中间件前面插入 RatelimitPlugin 对象实例 
!isTest && config.plugins.unshift(
  // beforeUseRoutes
  new RatelimitPlugin({
    duration: 1000,
    errorMessage: 'Slow Down Your Request.',
    id: ctx => ctx.ip,
    max: 10
  })
)

module.exports = config
