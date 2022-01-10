import React from 'react';
import Box from '@components/molecules/Box';
import Typography from '@components/molecules/Typography';
import { useTheme } from '@hooks/index';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/core';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
/* eslint import/no-cycle: [2, { maxDepth: 1 }] */
import { CommonStackParamList } from '@screens/index';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '@components/molecules/Button';

type HomeScreenNavigationProp = NativeStackNavigationProp<
  CommonStackParamList,
  'Home'
>;

type HomeScreenRouteProp = RouteProp<CommonStackParamList, 'Home'>;

function HomeScreen() {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const route = useRoute<HomeScreenRouteProp>();
  const theme = useTheme();

  return (
    <SafeAreaView>
      <Box alignItems="center" justifyContent="center" flex={1}>
        <Typography>Home</Typography>
        <Button
          onPress={() => {
            navigation.goBack();
          }}>
          <Typography>Back Home</Typography>
        </Button>
      </Box>
    </SafeAreaView>
  );
}

export default HomeScreen;
