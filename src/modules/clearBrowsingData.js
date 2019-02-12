export default () => {
  return browser.browsingData.remove({
    // clear since beginning of time
    since: 0,
  }, {
    // clear these datum
    cache: true,
    cookies: true,
    downloads: true,
    history: true,

    // TODO: clear these entries
    // fileSystems: true,
    // formData: true,
    // indexedDB: true,
    // localStorage: true,
    // passwords: true,
    // serverBoundCertificates: true,
    // serviceWorkers: true,
  });
};
