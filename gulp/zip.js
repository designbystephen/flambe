const gulp = require('gulp');
const zip = require('gulp-zip');

module.exports = (files, packageName, output) => {
  gulp.task('zip', () => (
    gulp.src(files)
      .pipe(zip(packageName))
      .pipe(gulp.dest(output))
  ));

  return ['zip'];
}
