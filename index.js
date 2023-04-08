/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import { Provider } from 'react-redux';
import {store, persistor } from './src/store';
import { PersistGate } from "redux-persist/integration/react";
import database from '@react-native-firebase/database';
import messaging from "@react-native-firebase/messaging";

messaging().setBackgroundMessageHandler(async remoteMessage => {
   console.log('Bildirim alındı', remoteMessage);
});
database().setPersistenceEnabled(true);
const Root = () => (
   <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
         <App />
      </PersistGate>
   </Provider>
)

AppRegistry.registerComponent(appName, () => Root);
