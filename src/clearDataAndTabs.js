import createTab from './createTab';
import clearBrowsingData from './clearBrowsingData';
import closeTabs from './closeTabs';
import { closeCurrentWindow } from './window';

export default async (/* closeBrowser */) => {
  let tab;

  try {
    tab = await createTab();
  } catch (ex) {
    console.error('Unable to create new tab.', ex);
  }

  try {
    await clearBrowsingData();
  } catch (ex) {
    console.error('Unable to clear browsing data.', ex);
  }
  
  try {
    await closeTabs(tab);
  } catch (ex) {
    console.error('Unable to close tabs.', ex);
  }

  closeCurrentWindow();
};
