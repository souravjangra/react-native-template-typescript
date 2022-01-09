import React from 'react';
import { storiesOf } from '@storybook/react-native';
import Box from '../Box/Box';
import Button from './Button';

storiesOf('Button', module)
  .add('Background Color', () => (
    <Button bgVariant="primary" width={'100%'} height={100} />
  ))
  .add('Bordered', () => {
    return (
      <Box>
          <Button bg="blue" size={50} />
      </Box>
    );
  });