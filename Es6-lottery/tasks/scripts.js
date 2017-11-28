import gulp         from 'gulp'             // gulp 构建工具
import gulpif       from 'gulp-if'          // gulp 语句中做if判断的
import concat       from 'gulp-concat'      // gulp 语句拼接
import webpack      from 'webpack'          // 打包
import gulpWebpack  from 'webpack-stream'   // 文件流
import named        from 'vinyl-named'      // 重命名
import livereload   from 'gulp-livereload'  // 热更新
import plumber      from 'gulp-plumber'     // 处理文件信息流
import rename       from 'gulp-rename'      // 文件重命名
import uglify       from 'gulp-uglify'      // 压缩包
import {log,colors} from 'gulp-util'        // 转出类的gulp包：日志，色彩
import args         from './util/args'      // 命令行参数解释的包
import { start } from 'repl';

gulp.task('scripts', () => {
  return gulp.src(['app/js/index.js'])
    pipe(plumber({
      errorHandler:function() {

      }
    }))
    // 文件重命名
    .pipe(named())
    // 借助webpack 编译
    // https://www.npmjs.com/package/webpack-stream
    // .pipe(gulpWebpack({
    //   module:{
    //     loaders:[{
    //       test:/\.js$/,
    //       loader:'babel'
    //     }]
    //   }
    // }),null,(err,stats)=>{
    //   log(`Finished '${colors.cyan('scripts')}'`,stats.toString({
    //     chunks:false
    //   }))
    // })
    .pipe(gulpWebpack({
      module: {
        loaders: [{
          test: /\.js$/,
          loader:'babel'
        }]
      }
    }, null, function(err, stats) {
      log(`Finished '${colors.cyan('scripts')}'`, stats.toString({
        chunks: false
      }))
    }))
    // 文件目标路径
    .pipe(gulp.dest('server/public/js'))
    // 重命名
    .pipe(rename({
      basename: 'cp',
      extname: '.min.js'
    }))
    // 压缩
    .pipe(uglify({ compress: {properties:false}, output: {'quote_keys': true}})) 
    // 文件目标路径 到这里： 目标路径会存在一个没压缩及压缩文件： ***.cp.min.js
    .pipe(gulp.dest('server/public/js'))
    // 如果存在watch命令 就热更新
    .pipe(gulpif(args.watch, livereload()))
})