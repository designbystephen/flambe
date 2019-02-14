export default () => (
  new Promise((resolve, reject) => {
    chrome.tabs.create(
      {active: false},
      (result) => resolve(result)
    );
  })
);
