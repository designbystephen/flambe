const gulp = require('gulp');
const zip = require('gulp-zip');

const files = [
  'manifest.json',
  './.build/app-bundle.js',
  './assets/*.png',
];

const xpiName = 'flambe.xpi';

gulp.task('default', () => (
  gulp.src(files)
    .pipe(zip(xpiName))
    .pipe(gulp.dest('./dist'))
));
