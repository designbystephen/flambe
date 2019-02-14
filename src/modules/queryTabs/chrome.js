export default (query) => {
  let tabs = [];

  try {
    chrome.tabs.query(query, (result) => tabs = result);
  } catch(ex) {
    return Promise.reject(ex);
  }
  
  return Promise.resolve(tabs);
};
  