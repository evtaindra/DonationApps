import React from 'react';
import {SafeAreaView, View} from 'react-native';

import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';

import globalStyle from '../../assets/styles/globalStyle';
import Tab from '../../components/Tab/Tab';
import Badge from '../../components/Badge/Badge';
import Search from '../../components/Search/Search';
//import style from './style';

const Home = () => {
  return (
    <SafeAreaView>
      <View style={globalStyle.backgroundWhite}>
        <Header title={'Mr Dojo'} type={1} />
        <Search
          onSearch={value => {
            console.log(value);
          }}
        />

        {/* <Header title={'Mr Dojo'} type={1} />
        <Tab title={'Highlight'} />
        <Tab title={'Highlight'} isInactive={true} />
        <Badge title={'Environment'} />
        <Button title={'Donasi'} />
        <Button title={'Donasi lagi'} isDisabled={true} /> */}
      </View>
    </SafeAreaView>
  );
};
export default Home;
