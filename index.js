/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import {name as appName} from './app.json';
console.disableYellowBox=true;
import OnboardingLogin from "./src/theme/login/Onboarding_Login";
import Main from "./src/theme/main/Main";
// import Home from "./src/theme/pages/Home";
// import Login from "./src/theme/login/Login";

AppRegistry.registerComponent(appName, () => Main);
