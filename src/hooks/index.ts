/*
 * Project: alautun
 * Created Date: Sunday, January 9th 2022
 * Author: Sourav Jangra (sourav@radiansys.com)
 * -----
 * Last Modified: Monday, January 10th 2022 3:09:41 pm
 * Modified By: Sourav Jangra
 * -----
 * Copyright (c) 2022 Radiansys Inc
 */

import React, { createContext } from 'react';
import { Appearance, ColorSchemeName } from 'react-native';
import useCustomBackBehaviour from './useCustomBackBehaviour';
import useStartupTime from './useStartupTime';

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
