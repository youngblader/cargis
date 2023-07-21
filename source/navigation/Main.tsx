import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Orders, DetailOrder} from '../screens';
import {colors} from '../styles';

const MainStackNav = createStackNavigator();

const MainStack = () => {
  return (
    <MainStackNav.Navigator
      initialRouteName="Orders"
      screenOptions={{
        cardStyle: {
          backgroundColor: colors.white,
        },
      }}>
      <MainStackNav.Screen
        name="Orders"
        options={{
          headerShown: false,
        }}
        component={Orders}
      />
      <MainStackNav.Screen
        name="DetailOrder"
        options={{
          headerShown: false,
        }}
        component={DetailOrder}
      />
    </MainStackNav.Navigator>
  );
};

export default MainStack;
