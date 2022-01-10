/*
 * Project: alautun
 * Created Date: Saturday, January 8th 2022
 * Author: Sourav Jangra
 * -----
 * Last Modified: Monday, January 10th 2022 3:09:41 pm
 * Modified By: Sourav Jangra
 * -----
 * Copyright (c) 2022 Radiansys Inc
 */

import React from 'react';
import styled, { DefaultTheme } from 'styled-components/native';
import {
  LayoutProps,
  layout,
  compose,
  ColorProps,
  color,
  space,
  SpaceProps,
  BordersProps,
  borders,
  variant,
  FlexProps,
  flex,
  flexbox,
  FlexboxProps,
  position,
  PositionProps,
} from 'styled-system';

type VariantTypes = 'primary' | 'secondary';

interface BoxProps
  extends LayoutProps,
    ColorProps,
    SpaceProps,
    BordersProps,
    FlexProps,
    PositionProps,
    FlexboxProps {
  children?: React.ReactNode;
  bgVariant?: VariantTypes;
}

const variantStyle = (theme: DefaultTheme) =>
  variant<BoxProps, VariantTypes, 'bgVariant'>({
    key: 'box',
    prop: 'bgVariant',
    variants: {
      primary: {
        backgroundColor: theme.colors.primary,
      },
      secondary: {
        backgroundColor: theme.colors.secondary,
      },
    },
  });

const Box = styled.View<BoxProps>`
  ${compose(color, layout, space, borders, flex, position, flexbox)}
  ${({ theme }) => variantStyle(theme)}
`;

export default Box;
