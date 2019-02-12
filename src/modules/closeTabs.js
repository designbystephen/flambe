export default async (tab) => {
  let tabs = [];
  
  //  get tabs in current window
  try {
   tabs = await browser.tabs.query({ currentWindow: true });
  } catch (ex) {
    console.error('Unable to close tabs.', ex);
  }

  // get array of tab ids
  let tabIds = tabs.map(tab => tab.id);

  if (tab && tab.id) {
    tabIds = tabIds.filter(id => id !== tab.id );
  }

  // remove tabs, if we remove all tabs the window will close
  return browser.tabs.remove(tabIds);
};
