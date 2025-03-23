//Minggu 1: Fundamental Focus - React Native Style

// Hari Senin - React Native Basics: Component JSX
//File: HelloWorld.js
import React from 'react';
import {View, Text} from 'react-native';

export default function HelloWorld() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Latihan Mengetik React Native</Text>
    </View>
  );
}
