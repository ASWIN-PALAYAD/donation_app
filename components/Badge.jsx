import {StyleSheet, Text, View} from 'react-native';
import React, {useRef, useState} from 'react';
import PropTypes from 'prop-types';
import {getFontFamily} from '../assets/fonts/helper';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../assets/styles/scalling';

const Badge = ({title}) => {
  const [width, setWidth] = useState(0);
  const textRef = useRef(null);
  const paddingHorizontal = 10;
  const tabwidth = {
    width: horizontalScale(paddingHorizontal * 2 + width),
  };

  return (
    <View
      style={[styles.BadgeContainer,tabwidth]}
      >
      <Text
        onTextLayout={event => {
          setWidth(event.nativeEvent.lines[0].width)
        }}
        ref={textRef}
        style={styles.BadgeTitle}>
        {title}
      </Text>
    </View>
  );
};


Badge.propTypes = {
  title: PropTypes.string.isRequired,
 
};

const styles = StyleSheet.create({
  BadgeContainer: {
    backgroundColor: '#145855',
    height: verticalScale(22),
    justifyContent: 'center',
    borderRadius: horizontalScale(50),
  },
  BadgeTitle: {
    fontFamily: getFontFamily('Inter'),
    fontSize: scaleFontSize(10),
    fontWeight: '600',
    lineHeight: scaleFontSize(17),
    color: '#FFFFFF',
    textAlign: 'center',
  },
});

export default Badge;
