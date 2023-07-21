import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import RootStack from './source/navigation';

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <RootStack />
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default App;
