const env = process.env

module.exports = {
  serverPort: env.serverPort || 3000,

  mongoHost: env.mongoHost || '127.0.0.1',
  mongoDatabase: env.mongoDatabase || 'blog',
  mongoPort: env.mongoPort || 27017,
  mongoOptions: {
    useMongoClient: true, // 可重新连接
    autoIndex: false, // 是否建立索引
    reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
    reconnectInterval: 500, // Reconnect every 500ms
    poolSize: 10, // Maintain up to 10 socket connections
    bufferMaxEntries: 0
  },

  redisHost: env.redisHost || '127.0.0.1',
  redisPort: env.redisPort || 6379,
  redisPassword: env.redisPassword || '',

  tokenSecret: env.tokenSecret || 'test',
  tokenExpiresIn: env.tokenExpiresIn || 3600,

  defaultAdminName: env.defaultAdminName || 'admin',
  defaultAdminPassword: env.defaultAdminPassword || '123456'
}