/* global chrome:false */

import '@babel/polyfill';
import createTab from './createTab';
import clearBrowsingData from './clearBrowsingData';
import closeTabs from './closeTabs';

chrome.browserAction.onClicked.addListener(async () => {
  const tab = await createTab();
  await clearBrowsingData();
  closeTabs(tab);
});
