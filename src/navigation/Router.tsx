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
import { LinkingOptions, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { navigationRef } from '@navigation/RootNavigation';

import { commonScreens, CommonStackParamList } from '@screens/index';
import { theme } from 'theme';
import RNBootSplash from 'react-native-bootsplash';

const screenOptions = {
  cardStyle: { backgroundColor: theme.colors.white },
  headerShown: false,
};

type ParamList = CommonStackParamList;
export const Stack = createNativeStackNavigator<ParamList>();

const linking: LinkingOptions<ParamList> = {
  prefixes: ['HelloWorld://'],
  config: {
    screens: {},
  },
};

export default function Router() {
  return (
    <NavigationContainer
      linking={linking}
      ref={navigationRef}
      onReady={() => {
        setTimeout(() => {
          RNBootSplash.hide({ fade: true })
            .then(() => {})
            .catch((err) => {});
        }, 3000);
        // eslint-disable-next-line react/jsx-closing-bracket-location
      }}
    >
      <SafeAreaProvider>
        <Stack.Navigator screenOptions={screenOptions}>
          {Object.entries({
            ...commonScreens,
          }).map(([name, props]) => (
            <Stack.Screen
              key={name}
              name={name as keyof ParamList}
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...props}
            />
          ))}
        </Stack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}
