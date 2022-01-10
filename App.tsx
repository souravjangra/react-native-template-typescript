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

import React, { createContext } from 'react';
import { FileLogger } from 'react-native-file-logger';
import useAppState from 'react-native-appstate-hook';
import { log, warn } from '@utils/console';
import { ThemeProvider } from 'styled-components';
import { useNavigationMounting } from '@navigation/RootNavigation';
import Router from '@navigation/Router';
import { theme } from 'theme';
import { Appearance } from 'react-native';
import { ManageThemeProvider } from '@hoc/index';

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
    <ManageThemeProvider>
      <Router />
    </ManageThemeProvider>
  );
};

export default App;
