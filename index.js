/*
 * Project: alautun
 * Created Date: Friday, January 7th 2022
 * Author: Sourav Jangra (sourav@radiansys.com)
 * -----
 * Last Modified: Friday, January 7th 2022 10:51:15 am
 * Modified By: Sourav Jangra
 * -----
 * Copyright (c) 2022 Radiansys Inc
 */

import 'react-native-gesture-handler';
import React from 'react';
import { AppRegistry, LogBox } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { enableScreens } from 'react-native-screens';
import { store, persistor } from '@store/index';
import { Provider } from 'react-redux';
import getStorybookUI from './storybook';
import { PersistGate } from 'redux-persist/integration/react';

enableScreens();

let EntryPoint;
const showStorybook = true;

if (showStorybook && __DEV__) {
  EntryPoint = getStorybookUI();
} else {
  EntryPoint = () => {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    );
  };
}

AppRegistry.registerComponent(appName, () => EntryPoint);
