/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import {name as appName} from './app.json';
console.disableYellowBox=true;
import Main from "./src/theme/main/Main";
// import Home from "./src/theme/pages/Home";

AppRegistry.registerComponent(appName, () => Main);
