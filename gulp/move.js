const gulp = require('gulp');

module.exports = (files, output) => {
  gulp.task('move', () => (
    gulp.src(files)
      .pipe(gulp.dest(output))
  ));
  
  return ['move'];
};
