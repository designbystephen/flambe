import browser from './browser';
import chrome from './chrome';

export default process.env.ENV === 'chrome' ? chrome : browser;
