import {StyleSheet, Text, View, Pressable} from 'react-native';
import React, {useRef, useState} from 'react';
import PropTypes from 'prop-types';
import {getFontFamily} from '../assets/fonts/helper';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../assets/styles/scalling';

const Tabs = ({title, isInactive, onPress,tabId}) => {
  const [width, setWidth] = useState(0);
  const textRef = useRef(null);
  const paddingHorizontal = 33;
  const tabwidth = {
    width: horizontalScale(paddingHorizontal * 2 + width),
  };

  return (
    <Pressable
      style={[styles.TabContainer, isInactive && styles.inactiveTab,tabwidth]}
      onPress={() => {
        onPress(tabId);
      }}>
      <Text
        onTextLayout={event => {
          setWidth(event.nativeEvent.lines[0].width)
        }}
        ref={textRef}
        style={[styles.TabTitle, isInactive && styles.inactiveTabTitle]}>
        {title}
      </Text>
    </Pressable>
  );
};

Tabs.default = {
  isInactive: false,
  onPress: () => {},
};

Tabs.propTypes = {
  title: PropTypes.string.isRequired,
  isInactive: PropTypes.bool,
  onPress: PropTypes.func,
  tabId:PropTypes.number.isRequired
};

const styles = StyleSheet.create({
  TabContainer: {
    backgroundColor: '#2979F2',
    height: verticalScale(50),
    justifyContent: 'center',
    borderRadius: horizontalScale(50),
  },
  inactiveTab: {
    backgroundColor: '#F3F5F9',
  },
  inactiveTabTitle: {
    color: '#79869F',
  },
  TabTitle: {
    fontFamily: getFontFamily('Inter'),
    fontSize: scaleFontSize(14),
    fontWeight: '700',
    lineHeight: scaleFontSize(17),
    color: '#FFFFFF',
    textAlign: 'center',
  },
});

export default Tabs;
