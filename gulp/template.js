const gulp = require('gulp');
const fs = require('fs');
const Handlebars = require('handlebars');

module.exports = (src, properties, output) => {
  gulp.task('template', () => {
    const source = fs.readFileSync(src, 'utf8');
    const template = Handlebars.compile(source);

    try {
      fs.writeFileSync(output, template(properties));
    } catch (ex) {
      return Promise.reject(new Error('Unable to write html from hbs file', ex));
    }
    
    return Promise.resolve();
  });

  return ['template'];
};
