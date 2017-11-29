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

gulp.task('scripts', () => {
  return gulp.src(['app/js/index.js'])
    .pipe(plumber({
      errorHandle: function() {

      }
    }))
    .pipe(named())
    .pipe(gulpWebpack({
      module:{
        rules: [
          {
            test:/\.js$/,
            loader: 'babel-loader'
          }
        ]
      }
    }), null, (err,stats) => {
      log(`Finished '${colors.cyan('scripts')}'`,stats.toString({
        chunks:false
      }))
    })
    .pipe(gulp.dest('server/public/js'))
    .pipe(rename({
      basename: 'cp',
      extname: '.min.js'
    }))
    .pipe(uglify({compress:{properties:false},output:{'quote_keys':true}}))
    .pipe(gulp.dest('server/public/js'))
    .pipe(gulpif(args.watch,livereload()))
})
