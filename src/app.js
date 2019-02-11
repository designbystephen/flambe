/* global chrome:false */

import '@babel/polyfill';
import { listen } from './events';
import clearDataAndTabs from './clearDataAndTabs';
import { closeCurrentWindow, openLink } from './window';

listen('[data-action="clear"]', 'click', clearDataAndTabs);
listen('[data-action="cancel"]', 'click', closeCurrentWindow);
listen('[data-action="link"]', 'click', openLink);
