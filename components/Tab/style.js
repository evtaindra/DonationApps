import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  tab: {
    backgroundColor: '#2979F2',
    height: verticalScale(50),
    justifyContent: 'center',
    borderRadius: horizontalScale(45),
  },
  Title: {
    fontFamily: 'Inter',
    fontSize: scaleFontSize(14),
    fontWeight: '500',
    lineHeight: scaleFontSize(19),
    color: '#FFFFFF',
    textAlign: 'center',
  },
  inactiveTitle: {
    color: '#79869F',
  },
  inactiveTab: {
    backgroundColor: '#F3F5F9',
  },
});
export default style;
