import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MainStack from './MainStack';
import { RootStackNavigation } from './types';

const RootStackNavigator = createStackNavigator<RootStackNavigation>();

const RootStack = () => {
  return (
    <RootStackNavigator.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <RootStackNavigator.Screen
        name="Main"
        options={{
          headerShown: false,
        }}
        component={MainStack}
      />
    </RootStackNavigator.Navigator>
  );
};

export default RootStack;
