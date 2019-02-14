import queryTabs from './queryTabs';

const getCurrentWindowTabs = async () => {
  let tabs = [];

  try {
    tabs = await queryTabs({ currentWindow: true });
  } catch(e) {
    console.error('Unable to query tabs.', ex);
  }

  return tabs.map(tab => tab.id);
};

export default async (tab) => {
  let tabs = await getCurrentWindowTabs();

  if (tab && tab.id) {
    tabs = tabs.filter(id => id !== tab.id );
  }

  // remove tabs, if we remove all tabs the window will close
  return chrome.tabs.remove(tabs);
};
