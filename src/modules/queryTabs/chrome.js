export default (query) => (
  new Promise((resolve, reject) => {
    chrome.tabs.query(query, (result) => resolve(result));
  })
);
  