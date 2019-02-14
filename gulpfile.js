const gulp = require('gulp');
const { clean, compile, minify, template, move, zip } = require('./gulp');
const {
  PROJECT_NAME,
  SRC_DIR,
  BUILD_DIR,
  APP_ENTRY_POINT,
  DIST_DIR,
} = require('./src/modules/constants');

// Project files
const files = [
  `${SRC_DIR}/manifest.json`,
  `${SRC_DIR}/icons/*.png`,
  `${BUILD_DIR}/${PROJECT_NAME}.min.js`,
  `${BUILD_DIR}/*.min.css`,
  `${BUILD_DIR}/*.html`,
].concat(
  !!process.env.DEBUG ? [
    `${SRC_DIR}/*.css`,
    `${BUILD_DIR}/${PROJECT_NAME}.js`,
    `${BUILD_DIR}/${PROJECT_NAME}.js.map`,
  ] : []
);

gulp.task('default', gulp.series(
  // clean build and dist directories
  ...clean([
    `${BUILD_DIR}/**/*`,
    `${DIST_DIR}/**/*`
  ], [
    `${SRC_DIR}/**/*`
  ]),

  // compile code and cat into a single asset
  ...compile(
    APP_ENTRY_POINT,
    `${PROJECT_NAME}.js`, 
    BUILD_DIR
  ),

  // minify code
  ...minify(
    `${BUILD_DIR}/${PROJECT_NAME}.js`, 
    `${SRC_DIR}/${PROJECT_NAME}.css`,
    BUILD_DIR,
  ),

  // compile template
  ...template(
    `${SRC_DIR}/${PROJECT_NAME}.hbs`,
    require('./src/modules/properties'),
    `${BUILD_DIR}/${PROJECT_NAME}.html`
  ),

  // move files
  ...move(
    files,
    DIST_DIR
  ),

  // zip files
  ...zip(
    files,
    `${PROJECT_NAME}.${process.env.ENV === 'chrome' ? 'zip' : 'xpi'}`,
    DIST_DIR
  ),
));
