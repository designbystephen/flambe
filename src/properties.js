const { version } = require('./manifest.json');

module.exports = {
  popup: {
    style: 'popup.css',
    script: 'popup-compiled-min.js'
  },
  review: 'https://addons.mozilla.org/en-US/firefox/addon/flambe/',
  version,
}
