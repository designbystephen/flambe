export default () => {
  // TODO: prevent browser window from closing when all tabs are removed
  return browser.tabs.create({
    active: false,
  });
};
