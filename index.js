/*
 * Project: alautun
 * Created Date: Friday, January 7th 2022
 * Author: Sourav Jangra (sourav@radiansys.com)
 * -----
 * Last Modified: Monday, January 10th 2022 6:28:42 pm
 * Modified By: Sourav Jangra
 * -----
 * Copyright (c) 2022 Radiansys Inc
 */

/* eslint-disable @typescript-eslint/no-unsafe-argument */
import 'react-native-gesture-handler';
import React from 'react';
import { AppRegistry } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { enableScreens } from 'react-native-screens';
import { store, persistor } from '@store/index';
import App from './App';
import { name as appName } from './app.json';
import getStorybookUI from './storybook';

enableScreens();

let EntryPoint;
const showStorybook = false;

// eslint-disable-next-line no-undef
if (showStorybook && __DEV__) {
  EntryPoint = getStorybookUI();
} else {
  EntryPoint = function RootApp() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    );
  };
}

// eslint-disable-next-line @typescript-eslint/no-unsafe-return
AppRegistry.registerComponent(appName, () => EntryPoint);
