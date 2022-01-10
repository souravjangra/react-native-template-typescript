/*
 * Project: alautun
 * Created Date: Saturday, January 8th 2022
 * Author: Sourav Jangra (sourav@radiansys.com)
 * -----
 * Last Modified: Monday, January 10th 2022 3:56:21 pm
 * Modified By: Sourav Jangra
 * -----
 * Copyright (c) 2022 Radiansys Inc
 */

import React from 'react';
import { storiesOf } from '@storybook/react-native';
import Box from '../Box/Box';
import Typography from './Typography';

storiesOf('Typography', module)
  .add('Background Color', () => (
    <Typography bgVariant="primary" width="100%" height={100} />
  ))
  .add('Bordered', () => (
    <Box>
      <Typography bg="blue" size={50} />
    </Box>
  ));
