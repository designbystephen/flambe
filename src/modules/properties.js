const { PROJECT_NAME } = require('./constants');
const { version } = require('../manifest.json');

module.exports = {
  popup: {
    style: `${PROJECT_NAME}.min.css`,
    script: `${PROJECT_NAME}.min.js`
  },
  links: {
    review: 'https://addons.mozilla.org/en-US/firefox/addon/flambe/',
    developer: 'http://designbystephen.com?from=flambe'
  },
  version,
};
