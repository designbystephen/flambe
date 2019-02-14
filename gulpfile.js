const {
  clean,
  compile,
  minify,
  template,
  move,
  zip,
} = require('./gulp');

// Build constants
const PROJECT_NAME = 'flambe';
const SRC_DIR = './src';
const BUILD_DIR ='./.build';
const APP_ENTRY_POINT = `${SRC_DIR}/app.js`;
const DIST_DIR ='./dist';

// Project files
const files = [
  `${SRC_DIR}/manifest.json`,
  `${SRC_DIR}/icons/*.png`,
  `${BUILD_DIR}/${PROJECT_NAME}.js`,
  `${BUILD_DIR}/${PROJECT_NAME}.min.js`,
  `${BUILD_DIR}/*.css`,
  `${BUILD_DIR}/*.min.css`,
  `${BUILD_DIR}/*.html`,
];

const tasks = [
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
    `${BUILD_DIR}/${PROJECT_NAME}.js`, 
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
    `${PACKAGE_NAME}.xpi`,
    DIST_DIR
  ),
];

gulp.task('default', gulp.series.apply(null, tasks));
