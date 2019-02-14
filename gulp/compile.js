const gulp = require('gulp');
var browserify = require("browserify");
var fs = require("fs");

module.exports = (entryPoint, bundleName, destination) => {
  gulp.task('compile', () => (
    browserify(entryPoint)
      .transform('babelify')
      .bundle()
      .pipe(fs.createWriteStream(bundleName))
      .pipe(gulp.dest(destination))
  ));

  return ['compile'];
};
