export default async (tab) => {
  //  get tabs in current window
  const tabs = await browser.tabs.query({ currentWindow: true });

  // get array of tab ids
  let tabIds = tabs.map(tab => tab.id);

  if (tab && tab.id) {
    tabIds = tabIds.filter(id => id !== tab.id );
  }

  // remove tabs, if we remove all tabs the window will close
  return browser.tabs.remove(tabIds);
};
