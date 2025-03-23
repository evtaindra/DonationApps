import React, {useRef, useState} from 'react';
import {Pressable, Text} from 'react-native';
import PropTypes from 'prop-types';
import style from './style';
import {horizontalScale} from '../../assets/styles/scaling';

const Tab = ({title, isInactive = false, onPress = () => {}}) => {
  const [width, setWidth] = useState(0);
  const paddingHorizontal = 33;
  const tabWidth = {width: horizontalScale(paddingHorizontal * 2 + width)};

  return (
    <Pressable
      disabled={isInactive}
      style={[style.tab, isInactive && style.inactiveTab, tabWidth]}
      onPress={onPress}>
      <Text
        onTextLayout={event => {
          setWidth(event.nativeEvent.lines[0].width);
        }}
        style={[style.Title, isInactive && style.inactiveTitle]}>
        {title}
      </Text>
    </Pressable>
  );
};
Tab.propTypes = {
  title: PropTypes.string.isRequired,
  isInactive: PropTypes.bool,
  onPress: PropTypes.func,
};
export default Tab;
