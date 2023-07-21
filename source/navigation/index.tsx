import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MainStack from './Main';

const RootStackNav = createStackNavigator();

const RootStack = () => {
  return (
    <RootStackNav.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <RootStackNav.Screen
        name="Main"
        options={{
          headerShown: false,
        }}
        component={MainStack}
      />
    </RootStackNav.Navigator>
  );
};

export default RootStack;
