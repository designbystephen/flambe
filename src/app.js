/* global chrome:false */

import '@babel/polyfill';
import createTab from './createTab';
import clearBrowsingData from './clearBrowsingData';
import closeTabs from './closeTabs';
import showErrors from './showErrors';

chrome.browserAction.onClicked.addListener(async () => {
  let tab;

  try {
    tab = await createTab();
  } catch (ex) {
    showErrors('Unable to create new tab.', ex);
  }

  try {
    await clearBrowsingData();
    throw new Error('Testing');
  } catch (ex) {
    showErrors('Unable to clear browsing data.', ex);
  }
  
  try {
    closeTabs(tab);
  } catch (ex) {
    showErrors('Unable to close tabs.', ex);
  }
});
