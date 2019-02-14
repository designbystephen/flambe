/* globals chrome:false */

import '@babel/polyfill';
import { listen } from './modules/events';
import clearDataAndTabs from './modules/clearDataAndTabs';
import { closeCurrentWindow, openLink } from './modules/window';

listen('[data-action="clear"]', 'click', clearDataAndTabs);
listen('[data-action="cancel"]', 'click', closeCurrentWindow);
listen('[data-action="link"]', 'click', openLink);
