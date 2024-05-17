import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import {getFontFamily} from '../assets/fonts/helper';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../assets/styles/scalling';

const Button = ({title, isDisabled,onPress}) => {
  return (
    <Pressable
      disabled={isDisabled}
      style={[styles.buttonContainer,isDisabled && styles.buttonDisabled]}
      onPress={() => {
        onPress()
      }}>
      <Text style={styles.buttonTitle}>{title}</Text>
    </Pressable>
  );
};

Button.default = {
  isDisabled: false,
  onPress:()=>{}
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
  onPress:PropTypes.func
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#2979F2',
    height: verticalScale(55),
    justifyContent: 'center',
    borderRadius: horizontalScale(50),
  },
  buttonDisabled:{
    opacity:0.5
  },    
  buttonTitle: {
    fontFamily: getFontFamily('Inter'),
    fontSize: scaleFontSize(16),
    fontWeight: '700',
    lineHeight: scaleFontSize(19),
    color: '#FFFFFF',
    textAlign: 'center',
  },
});

export default Button;
