/*
 * Project: alautun
 * Created Date: Monday, January 10th 2022
 * Author: Sourav Jangra (sourav@radiansys.com)
 * -----
 * Last Modified: Monday, January 10th 2022 9:59:20 am
 * Modified By: Sourav Jangra
 * -----
 * Copyright (c) 2022 Radiansys Inc
 */

import React, { useEffect, useState } from 'react';
import { Appearance, ColorSchemeName, StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { dark, light } from 'theme';
import { defaultMode, ThemeContext } from '@hooks/index';

const ManageThemeProvider = ({ children }: { children: JSX.Element }) => {
  const [themeState, setThemeState] = useState<ColorSchemeName>(defaultMode);

  const toggleTheme = (mode: ColorSchemeName) => {
    setThemeState(mode);
  };

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      setThemeState(colorScheme);
    });
    return () => subscription.remove();
  }, []);

  return (
    <ThemeContext.Provider value={{ theme: themeState, toggleTheme }}>
      <ThemeProvider theme={themeState === 'dark' ? dark : light}>
        <>
          <StatusBar
            barStyle={themeState === 'dark' ? 'dark-content' : 'light-content'}
          />
          {children}
        </>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ManageThemeProvider;
