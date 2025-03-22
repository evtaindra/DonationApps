import React from 'react';
import {SafeAreaView, View} from 'react-native';

import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';

import globalStyle from '../../assets/styles/globalStyle';
//import style from './style';

const Home = () => {
  return (
    <SafeAreaView>
      <View style={globalStyle.backgroundWhite}>
        <Header title={'Mr. Evta Indra Dojo'} type={1} />
        <Button
          title={'Donasi'}
          onPress={() => {
            console.log('you ju');
          }}
        />
        <Button title={'Donasi lagi'} isDisabled={true} />
      </View>
    </SafeAreaView>
  );
};
export default Home;
