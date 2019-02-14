const gulp = require('gulp');

module.exports = (files, packageName, output) => {
  gulp.task('zip', () => (
    gulp.src(files)
      .pipe(zip(packageName))
      .pipe(gulp.dest(output))
  ));

  return ['zip'];
}
