import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { getFontFamily } from './assets/fonts/helper';
import MainNavigation from './navigation/MainNavigation';
import { NavigationContainer } from '@react-navigation/native';

const App = () =>{
  return(
    <NavigationContainer>
      <MainNavigation/>
    </NavigationContainer>
  );
};
export default App;
