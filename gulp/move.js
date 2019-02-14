const gulp = require('gulp');

module.exports = (files, output) => {
  gulp.task('zip', () => (
    gulp.src(files)
      .pipe(gulp.dest(output))
  ));
  
  return ['zip'];
};
