const gulp = require('gulp');
const minify = require('gulp-minify');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');

module.exports = (jsFile, cssFile, output) => {
  gulp.task('minify', () => (
    gulp.src([jsFile])
      .pipe(minify({
        ext:{
          min:'.min.js',
        },
      }))
      .pipe(gulp.dest(output))
  ));

  // Minify .css
  gulp.task('minify-css', () => (
    gulp.src([cssFile])
      .pipe(cleanCSS())
      .pipe(rename({
        suffix: '.min'
      }))
      .pipe(gulp.dest(output))
  ));

  return ['minify', 'minify-css'];
};
