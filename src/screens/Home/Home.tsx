/*
 * Project: alautun
 * Created Date: Saturday, January 8th 2022
 * Author: Sourav Jangra (sourav@radiansys.com)
 * -----
 * Last Modified: Saturday, January 8th 2022 12:17:00 pm
 * Modified By: Sourav Jangra
 * -----
 * Copyright (c) 2022 Radiansys Inc
 */

import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/core';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Box } from '@components/molecules/Box';
import { Button } from '@components/molecules/Button';
import { Typography } from '@components/molecules/Typography';
import { CommonStackParamList } from '@screens/index';
import { theme } from 'theme';

type HomeScreenNavigationProp = NativeStackNavigationProp<
  CommonStackParamList,
  'Home'
>;

type HomeScreenRouteProp = RouteProp<CommonStackParamList, 'Home'>;

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const route = useRoute<HomeScreenRouteProp>();

  return (
    <SafeAreaView style={styles.safeArea}>
      <Box alignItems="center" justifyContent="center" flex={1}>
        {/* <Typography>Home</Typography> */}
        <Button
          onPress={() => {
            navigation.goBack();
          }}>
          {/* <Typography>Back Home</Typography> */}
        </Button>
      </Box>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: theme.colors.backgroundColor,
  },
});

export default HomeScreen;