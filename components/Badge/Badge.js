import React, {useRef, useState} from 'react';
import {Text, View} from 'react-native';
import PropTypes from 'prop-types';
import style from './style';
import {horizontalScale} from '../../assets/styles/scaling';

const Badge = ({title}) => {
  const [width, setWidth] = useState(0);
  const paddingHorizontal = 15;
  const totalWidth = horizontalScale(paddingHorizontal * 2 + width);

  return (
    <View style={[style.badge, {width: totalWidth, paddingHorizontal}]}>
      <Text
        onTextLayout={event => {
          const newWidth = event.nativeEvent.lines[0].width;
          if (newWidth !== width) {
            setWidth(newWidth);
          }
        }}
        style={style.badgeTitle}>
        {title}
      </Text>
    </View>
  );
};
Badge.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Badge;
