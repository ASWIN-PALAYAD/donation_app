import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { horizontalScale } from '../assets/styles/scalling';

const BackButton = ({onPress}) => {
  return (
    <Pressable onPress={()=>onPress()} style={styles.container} >
        <FontAwesomeIcon icon={faArrowLeft} />
    </Pressable>
  )
}

BackButton.propTypes = {
    onPress: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#FAFAFA",
        borderRadius:horizontalScale(26),
        alignItems:'center',
        justifyContent:'center',
        width:horizontalScale(44),
        height:horizontalScale(44),
    }
})

export default BackButton

