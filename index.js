/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {AppProvider} from './src/context/app';

// Wrap App with context providers
const AppWithProvider = () => (
  <AppProvider>
    <App />
  </AppProvider>
);

AppRegistry.registerComponent(appName, () => AppWithProvider);
