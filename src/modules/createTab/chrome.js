export default () => {
  let tab;

  try {
    chrome.tabs.create({
      active: false,
    }, (result) => tab = result);
  } catch(ex) {
    return Promise.reject(ex);
  }

  return Promise.resolve(tab);
};
