/*
 * Project: alautun
 * Created Date: Friday, January 7th 2022
 * Author: Sourav Jangra (sourav@radiansys.com)
 * -----
 * Last Modified: Sunday, January 9th 2022 11:17:23 pm
 * Modified By: Sourav Jangra
 * -----
 * Copyright (c) 2022 Radiansys Inc
 */

/* eslint-disable global-require */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  getStorybookUI,
  configure,
  addDecorator,
} from '@storybook/react-native';
// eslint-disable-next-line import/no-extraneous-dependencies
import { withKnobs } from '@storybook/addon-knobs';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme';
import { store } from '@store/index';

const getStorybookUIRoot = () => {
  require('./rn-addons');
  addDecorator(withKnobs);
  addDecorator((storyFn) => <Provider store={store}>{storyFn()}</Provider>);
  addDecorator((storyFn) => <SafeAreaProvider>{storyFn()}</SafeAreaProvider>);
  addDecorator((storyFn) => (
    <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
  ));

  configure(() => {
    require('../src/components/stories');
  }, module);
  return getStorybookUI({
    asyncStorage:
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      require('@react-native-async-storage/async-storage').default || null,
  });
};

export default getStorybookUIRoot;
