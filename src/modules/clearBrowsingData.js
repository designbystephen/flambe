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

    // TODO: Why wouldn't these clear?
    // fileSystems: true,
    // formData: true,
    // indexedDB: true,
    // localStorage: true,
    // passwords: true,
    // serverBoundCertificates: true,
    // serviceWorkers: true,
  });
};
