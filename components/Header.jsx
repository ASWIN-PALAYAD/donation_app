import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import {getFontFamily} from '../assets/fonts/helper';
import {scaleFontSize} from '../assets/styles/scalling';

const Header = ({tiitle, type,color}) => {
  const styleToApply = () => {
    switch (type) {
      case 1:
        return styles.HeaderText1;
      case 2:
        return styles.HeaderText2;
      case 3:
        return styles.HeaderText3;
      default:
        return styles.HeaderText1;
    }
  };

  return (
    <View style={styles.HeaderContainer}>
      <Text style={[styleToApply(type),color && {color:color}]}>{tiitle}</Text>
    </View>
  );
};

Header.default = {
  tiitle: '',
  type: 1,
  default:'#000000'
};

Header.propTypes = {
  tiitle: PropTypes.string,
  type: PropTypes.number,
  color:PropTypes.string
};

const styles = StyleSheet.create({
  HeaderContainer: {},
  HeaderText1: {
    fontFamily: getFontFamily('Inter'),
    fontSize: scaleFontSize(24),
    lineHeight: scaleFontSize(29),
    fontWeight: '600',
    color: 'black',
  },
  HeaderText2: {
    fontFamily: getFontFamily('Inter'),
    fontSize: scaleFontSize(18),
    lineHeight: scaleFontSize(22),
    fontWeight: '600',
    color: 'black',
  },
  HeaderText3: {
    fontFamily: getFontFamily('Inter'),
    fontSize: scaleFontSize(16),
    lineHeight: scaleFontSize(19),
    fontWeight: '600',
    color: 'black',
  },
});

export default Header;
