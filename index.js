import { registerRootComponent } from 'expo';
import App from './App.js';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
