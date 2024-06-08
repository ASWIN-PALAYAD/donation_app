import {StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {getFontFamily} from '../assets/fonts/helper';
import {scaleFontSize, verticalScale} from '../assets/styles/scalling';

const Input = ({label, placeholder,onChangeText,keyboardType,secureTextEntry}) => {
  const [value, setValue] = useState('');

  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        keyboardType={keyboardType}
        value={value}
        placeholder={placeholder ? placeholder : null }
        secureTextEntry={secureTextEntry}
        onChangeText={val => {setValue(val); onChangeText(val)}}
      />
    </View>
  );
};

Input.default = {
    onChangeText: ()=> {},
    keyboardType:'default',
    secureTextEntry:false
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange:PropTypes.func,
  keyboardType:PropTypes.string,
  secureTextEntry:PropTypes.bool
};

const styles = StyleSheet.create({
  label: {
    fontFamily: getFontFamily('inter'),
    fontWeight: '400',
    fontSize: scaleFontSize(12),
    lineHeight: scaleFontSize(15),
    color: '#36455A',
  },
  input: {
    paddingVertical: verticalScale(12),
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(167,167,167,0.5)',
  },
});

export default Input;
