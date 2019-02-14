const gulp = require('gulp');
const del = require('del');

module.export = (clean, ignore=[]) => {
  gulp.task('clean', () => (
    del([
      ...clean,
      ...ignore.map(glob => `!${glob}`),
    ])
  ));

  return ['clean'];
};
