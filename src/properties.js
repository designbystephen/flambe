const { version } = require('./manifest.json');

module.exports = {
  popup: {
    style: 'popup.css',
    script: 'popup-compiled-min.js'
  },
  links: {
    review: 'https://addons.mozilla.org/en-US/firefox/addon/flambe/',
    developer: 'http://designbystephen.com?from=flambe'
  },
  version,
}
