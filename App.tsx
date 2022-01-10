/*
 * Project: alautun
 * Created Date: Friday, January 7th 2022
 * Author: Sourav Jangra (sourav@radiansys.com)
 * -----
 * Last Modified: Monday, January 10th 2022 3:09:41 pm
 * Modified By: Sourav Jangra
 * -----
 * Copyright (c) 2022 Radiansys Inc
 */

import React from 'react';
import { FileLogger } from 'react-native-file-logger';
import useAppState from 'react-native-appstate-hook';
import { warn } from '@utils/console';
import { useNavigationMounting } from '@navigation/RootNavigation';
import Router from '@navigation/Router';
import { ManageThemeProvider } from '@hoc/index';

// eslint-disable-next-line @typescript-eslint/no-floating-promises
FileLogger.configure({
  maximumFileSize: 1024 * 1024 * 5, // 5MB,
  maximumNumberOfFiles: 3,
});

function App() {
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
}

export default App;
