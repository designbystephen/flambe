const gulp = require('gulp');
const browserify = require('browserify');
const babelify = require('babelify');
const envify = require('envify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const sourcemaps = require('gulp-sourcemaps');

// var fs = require("fs");

module.exports = (entryPoint, bundleName, output) => {
  gulp.task('compile', () => (
    browserify(entryPoint, {
        debug: true
      })
      .transform(
        babelify, {
          sourceMaps: 'inline',
        }
      )
      .transform(
        envify, {
          ENV: process.env.ENV 
        }
      )
      .bundle()
      .pipe(source(bundleName))
      .pipe(buffer())
      .pipe(sourcemaps.init({loadMaps: true}))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest(output))
      // .pipe(fs.createWriteStream(`${output}/${bundleName}`))
  ));

  return ['compile'];
};
