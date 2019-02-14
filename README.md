# Flambé
> Adds a \"Clear Tabs and Data\" button in the toolbar allowing you to close your tabs and clear your browser history in one click. Inspired by similar functionality in DuckDuckGo's mobile browser.
 
## Privacy
- No data is collected by this extension (Flambé)

## Extension Permissions
- __tabs__
  - Used to close tabs in browser window
  - Used to create a new blank tab
- __browsingData__
  - Used to clear browsing data

## Starting/Building Project
1. Clone project
2. `$ yarn`
3. `$ yarn build`
4. Defaults to Firefox extension
4. Extension is compressed exported to: `dist/flambe.xpi`

## Package Scripts
- `$ yarn build`: Build project and create "browser" based distributables (Firefox, Edge)
- `$ yarn build:chrome`: Build project and create "chrome" based distributables (Chrome, Opera) 
- `$ yarn debug`: Same as default build, but sets debug options to true (sourcemaps, un-minified code, etc)
- `$ yarn debug:chrome`: Same as chrome build, but sets debug options to true (sourcemaps, un-minified code, etc)
- `$ yarn start`: Starts web extension service and ports application to Developer edition of Firefox

## Credits
- "fire over line" Icon made by Freepik from https://www.flaticon.com 
