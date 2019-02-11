const gulp = require('gulp');
const zip = require('gulp-zip');
const clean = require('gulp-clean-dest');

const files = [
  'manifest.json',
  './.build/popup.js',
  './src/pages/*.html',
  './src/pages/*.css',
  './assets/*.png',
];

const xpiName = 'flambe.xpi';
const build = './build';
const dest = './dist';

gulp.task('default', () => (
  gulp.src(files)
    .pipe(clean(build))
    .pipe(clean(dest))
    .pipe(zip(xpiName))
    .pipe(gulp.dest('./dist'))
));
