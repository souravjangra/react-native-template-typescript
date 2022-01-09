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

import React from 'react';
import { FileLogger } from 'react-native-file-logger';
import useAppState from 'react-native-appstate-hook';
import { warn } from '@utils/console';
import { ThemeProvider } from 'styled-components';
import { useNavigationMounting } from '@navigation/RootNavigation';
import Router from '@navigation/Router';
import { theme } from 'theme';

FileLogger.configure({
  maximumFileSize: 1024 * 1024 * 5, // 5MB,
  maximumNumberOfFiles: 3,
});

const App = () => {
  useNavigationMounting();

  useAppState({
    onChange: (newAppState) => warn('App state changed to ', newAppState),
    onForeground: () => warn('App went to Foreground'),
    onBackground: () => warn('App went to background'),
  });

  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
};

export default App;
