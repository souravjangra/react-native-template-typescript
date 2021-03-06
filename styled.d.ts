/*
 * Project: alautun
 * Created Date: Saturday, January 8th 2022
 * Author: Sourav Jangra (sourav@radiansys.com)
 * -----
 * Last Modified: Saturday, January 8th 2022 12:39:37 pm
 * Modified By: Sourav Jangra
 * -----
 * Copyright (c) 2022 Radiansys Inc
 */

import 'styled-components';
import 'styled-system';

declare module 'styled-components' {
  export interface DefaultTheme {
    space: {
      none: number;
      xs: number;
      sm: number;
      md: number;
      ls: number;
      xl: number;
      xxl: number;
    };
    colors: {
      primary: string;
      secondary: string;
      white: string;
      black: string;
      success: string;
      backgroundColor: string;
      grayLight: string;
    };
    typography: {
      FONT_REGULAR: string;
      FONT_BOLD: string;
    };
    borderWidths: {
      none: number;
      xs: number;
      sm: number;
      md: number;
      ls: number;
      xl: number;
      xxl: number;
    };
    bordersColors: {
      primary: string;
      secondary: string;
      white: string;
      black: string;
      success: string;
    };
    radii: {
      none: number;
      xs: number;
      sm: number;
      md: number;
      ls: number;
      xl: number;
      xxl: number;
    };
    fontSizes: {
      none: number;
      xs: number;
      sm: number;
      md: number;
      ls: number;
      xl: number;
      xxl: number;
    };
    fonts: {
      body: string;
      heading: string;
    };
  }
}
