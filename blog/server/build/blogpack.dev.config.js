const base = require('./blogpack.base.config')
const useRoutesPrefix = '../plugins/beforeUseRoutes'
const serverStartPrefix = '../plugins/beforeServerStart'
const env = process.env

const config = Object.assign({}, base)

const BodyParserPlugin = require(`${useRoutesPrefix}/bodyParser`)
const LogTimePlugin = require(`${useRoutesPrefix}/logTime`)
const RestcPlugin = require(`${useRoutesPrefix}/restc`)

// const InitOptionPlugin = require(`${serverStartPrefix}/initOption`)
const InstallThemePlugin = require(`${serverStartPrefix}/installTheme`)
const InitUserPlugin = require(`${serverStartPrefix}/initUser`)

const CheckAuthPlugin = require('../plugins/beforeRestful/checkAuth')

const LoginPlugin = require('../plugins/mountingRoute/login')

// 注册中间件服务
config.plugins.push(
  //beforeUseRoutes
  new BodyParserPlugin(),
  new LogTimePlugin(),
  new RestcPlugin(),

  // beforeRestful
  new CheckAuthPlugin(),

  // moutingRoute
  // new LoginPlugin()
  
  // beforeServerStart
  // new InitUserPlugin(),
  // new InstallThemePlugin(),
  // new InitUserPlugin()
)

module.exports = config


