import gulp from 'gulp'
import del from 'del'
import args from './util/args'
import {log,colors} from 'gulp-util'

gulp.task('clean', () => {
  return del(['server/public', 'server/views'])
    .then(paths => {
      log('Deleted files and folders:\n',paths.join('\n'))
    })
})