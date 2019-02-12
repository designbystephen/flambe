const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const minify = require('gulp-minify');
const zip = require('gulp-zip');
const del = require('del');
const fs = require('fs');
const Handlebars = require('handlebars');
const properties = require('./src/properties');

// Build constants
const src = './src';
const build ='./.build';
const xpiName ='flambe.xpi';
const dest ='./dist';

// Clean dist and .build contents
gulp.task('clean', () => (
  del([
    `${build}/**/*`,
    `${dest}/**/*`,
  ])
));

// Minify .js after Babel Compile
gulp.task('minify', () => (
  gulp.src([`${build}/popup-compiled.js`])
    .pipe(minify())
    .pipe(gulp.dest(build))
));

// Minify .css
gulp.task('minify-css', () => (
  gulp.src([`${src}/popup.css`])
    .pipe(cleanCSS())
    .pipe(gulp.dest(build))
));

// Compile .hbs
gulp.task('hbs', () => {
  const source = fs.readFileSync(`${src}/popup.hbs`, 'utf8');
  const template = Handlebars.compile(source);

  try {
    fs.writeFileSync(`${build}/popup.html`, template(properties));
  } catch (ex) {
    throw new Error('Unable to write html from hbs file', ex);
  }
  
  return Promise.resolve();
});

// Project files
const files = [
  `${src}/manifest.json`,
  `${src}/icons/*.png`,
  `${build}/popup-compiled-min.js`, // compiled and minified js
  `${build}/*.html`, // compiled hbs
  `${build}/*.css`, // minified css
];

// Zip or move to destination RAW
gulp.task('zip', () => (
  process.env.ZIP !== 'false'
    ? gulp.src(files)
      .pipe(zip(xpiName))
      .pipe(gulp.dest(dest))
    : gulp.src(files)
      .pipe(gulp.dest(dest))
));

gulp.task('default', gulp.series('minify', 'minify-css', 'hbs', 'zip'));
