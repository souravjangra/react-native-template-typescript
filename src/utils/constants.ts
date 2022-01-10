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

import { Dimensions, PixelRatio, Platform, ScaledSize } from 'react-native';

type Mode = 'width' | 'height';
type Scale = number;

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT }: ScaledSize =
  Dimensions.get('window');

const widthScale: Scale = SCREEN_WIDTH / 375;
const heightScale: Scale = SCREEN_HEIGHT / 812;

export const normalize = (size: number, based: Mode = 'width'): number => {
  const newSize: number =
    based === 'height' ? size * heightScale : size * widthScale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

// for width  pixel
export const wp = (size: number): number => normalize(size, 'width');

// for height  pixel
export const hp = (size: number): number => normalize(size, 'height');

// for font  pixel
export const fp = (size: number): number => hp(size);

// for Margin and Padding vertical pixel
export const pv = (size: number): number => hp(size);

// for Margin and Padding horizontal pixel
export const ph = (size: number): number => wp(size);

export const IS_IOS = Platform.OS === 'ios';
