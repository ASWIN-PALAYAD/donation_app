import { StyleSheet, Text, View , Image, Pressable} from 'react-native'
import React from 'react';
import PropTypes from 'prop-types';
import Badge from './Badge';
import Header from './Header';
import { horizontalScale, verticalScale } from '../assets/styles/scalling';


const SingleDonationItem = ({uri,badgeTitle,donationTitle,price,onPress,donationItemId}) => {
  return (
    <Pressable onPress={()=>{onPress(donationItemId)}}>
      <View>
        <View style={styles.badge}>
            <Badge title={badgeTitle}/>
        </View>
       
        <Image source={{uri:uri}} style={styles.image} resizeMode='cover' />
      </View>
      <View style={styles.donationInfromation}>
          <Header tiitle={donationTitle} type={3} color={'#0A043C'} numberOfLines={1}  />
          <View style={styles.price}>
          <Header tiitle={'$' + price.toFixed()} type={3} color={'#156CF7'} />
          </View>
      </View>
    </Pressable>
  )
}

SingleDonationItem.default = {
  onPress : () => {},
}

SingleDonationItem.propTypes = {
  donationItemId:PropTypes.number.isRequired,
    uri:PropTypes.string.isRequired,
    badgeTitle:PropTypes.string.isRequired,
    donationTitle:PropTypes.string.isRequired,
    price:PropTypes.number.isRequired,
    onPress:PropTypes.func
}

const styles = StyleSheet.create({
    image:{
        width:horizontalScale(140),
        height:verticalScale(170),
        borderRadius:horizontalScale(20),
    },
    badge:{
        position:"absolute",
        zIndex:1,
        top:verticalScale(13),
        left:horizontalScale(10)
    },
    donationInfromation:{
        marginTop:verticalScale(16)
    },
    price:{
        marginTop:verticalScale(5)
    }
})

export default SingleDonationItem
