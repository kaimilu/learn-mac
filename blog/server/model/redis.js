const config = require('../conf/config')
const redis = require('redis')
const bluebird = require('bluebird')
const log = require('../utils/log')
/**
 * bluebird 蓝鸟
 * http://bluebirdjs.com/docs/api-reference.html
 */
bluebird.promisifyAll(redis.RedisClient.prototype)
bluebird.promisifyAll(redis.Multi.prototype)

const auth = config.redisPassword ? { password: config.redisPassword } : {}

/**
 * 对象合并 Object.assign(target, ...soureces) 返回一个新的组合对象
 * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
 */
let client = redis.createClient(Object.assign({}, auth, {
  host: config.redisHost,
  prot: config.redisPort
}))

client.on('error', function(err) {
  log.error('Redis Error ' + err)
})

client.on('connect', function() {
  log.info('Redis is ready')
})

module.exports = client