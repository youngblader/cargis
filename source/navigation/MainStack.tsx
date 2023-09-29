import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Orders, OrderDetails } from '../screens';

import { MainStackNavigation } from './types';
import { colors } from '../styles';

const MainStackNavigator = createStackNavigator<MainStackNavigation>();

const MainStack = () => {
  return (
    <MainStackNavigator.Navigator
      initialRouteName="Orders"
      screenOptions={{
        cardStyle: {
          backgroundColor: colors.white,
        },
      }}>
      <MainStackNavigator.Screen
        name="Orders"
        options={{
          headerShown: false,
        }}
        component={Orders}
      />
      <MainStackNavigator.Screen
        name="OrderDetails"
        options={{
          headerShown: false,
          cardStyle: {
            backgroundColor: colors.white,
          },
        }}
        component={OrderDetails}
      />
    </MainStackNavigator.Navigator>
  );
};

export default MainStack;
