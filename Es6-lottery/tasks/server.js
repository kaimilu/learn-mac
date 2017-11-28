/**
 * 处理服务器相关脚本
 * 启动服务器
 */

import gulp from 'gulp'
import gulpif from 'gulp-if'
import liveserver from 'gulp-live-server'
import args from './util/args'

/**
* cb 是回调函数
*/
gulp.task('serve', (cb) => {
  // 如果是监听命令，直接返回 回调函数
  if(!args.watch) return cb()

  // 创建服务器 harmony 是把当前命令行下去执行这个脚本
  var server = liveserver.new(['--harmony', 'server/bin/www'])
  // 启动服务器
  server.start();

  // 热更新
  gulp.watch(['server/public/**/*.js','server/views/**/*.ejs'], function(file) {
    server.notify.apply(server, [file])
  })

  // 监听需要重启的文件
  gulp.watch(['server/routes/**/*.js','server/app.js'], function() {
    // 服务重启
    server.start.bind(server)()
  })
})