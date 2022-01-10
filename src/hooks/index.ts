/*
 * Project: alautun
 * Created Date: Sunday, January 9th 2022
 * Author: Sourav Jangra (sourav@radiansys.com)
 * -----
 * Last Modified: Sunday, January 9th 2022 11:17:23 pm
 * Modified By: Sourav Jangra
 * -----
 * Copyright (c) 2022 Radiansys Inc
 */

import React, { createContext } from 'react';
import { Appearance } from 'react-native';
import { default as useCustomBackBehaviour } from './useCustomBackBehaviour';
import { default as useStartupTime } from './useStartupTime';
import { ColorSchemeName } from 'react-native';

const defaultMode = Appearance.getColorScheme() || 'light';

const ThemeContext = createContext({
  theme: defaultMode as ColorSchemeName,
  toggleTheme: (mode: any) => console.log(mode),
});

const useTheme = () => React.useContext(ThemeContext);

export {
  useCustomBackBehaviour,
  useStartupTime,
  defaultMode,
  ThemeContext,
  useTheme,
};
