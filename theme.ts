/*
 * Project: alautun
 * Created Date: Saturday, January 8th 2022
 * Author: Sourav Jangra (sourav@radiansys.com)
 * -----
 * Last Modified: Sunday, January 9th 2022 11:17:23 pm
 * Modified By: Sourav Jangra
 * -----
 * Copyright (c) 2022 Radiansys Inc
 */

import { DefaultTheme } from 'styled-components';
import { colors, typography } from '@styles/index';

const theme: DefaultTheme = {
  space: {
    none: 0,
    xs: 2,
    sm: 4,
    md: 8,
    ls: 16,
    xl: 32,
    xxl: 64,
  },
  colors: {
    primary: colors.PRIMARY,
    secondary: colors.SECONDARY,
    black: colors.BLACK,
    white: colors.WHITE,
    success: colors.SUCCESS,
    backgroundColor: colors.BACKGROUND_COLOR,
    grayLight: colors.GRAY_LIGHT,
  },
  typography: {
    FONT_REGULAR: typography.FONT_FAMILY_REGULAR,
    FONT_BOLD: typography.FONT_FAMILY_BOLD,
  },
  borderWidths: { none: 0, xs: 2, sm: 4, md: 8, ls: 16, xl: 32, xxl: 64 },
  bordersColors: {
    primary: colors.PRIMARY,
    secondary: colors.SECONDARY,
    black: colors.BLACK,
    white: colors.WHITE,
    success: colors.SUCCESS,
  },
  radii: {
    none: 0,
    xs: 2,
    sm: 4,
    md: 8,
    ls: 16,
    xl: 32,
    xxl: 64,
  },
  fontSizes: {
    none: 0,
    xs: 2,
    sm: 4,
    md: 8,
    ls: 16,
    xl: 32,
    xxl: 64,
  },
  fonts: {
    body: typography.FONT_FAMILY_REGULAR,
    heading: typography.FONT_FAMILY_BOLD,
  },
};

const light = {
  ...theme,
  colors: {
    primary: colors.PRIMARY,
    secondary: colors.SECONDARY,
    black: colors.BLACK,
    white: colors.WHITE,
    success: colors.SUCCESS,
    backgroundColor: colors.BACKGROUND_COLOR,
    grayLight: colors.GRAY_LIGHT,
  },
};

const dark = {
  ...theme,
  colors: {
    primary: colors.PRIMARY,
    secondary: colors.SECONDARY,
    black: colors.BLACK,
    white: colors.WHITE,
    success: colors.SUCCESS,
    backgroundColor: colors.BACKGROUND_COLOR,
    grayLight: colors.GRAY_LIGHT,
  },
};

export { theme, light, dark };
