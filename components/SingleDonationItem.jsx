import { StyleSheet, Text, View , Image} from 'react-native'
import React from 'react';
import PropTypes from 'prop-types';
import Badge from './Badge';
import Header from './Header';
import { horizontalScale, verticalScale } from '../assets/styles/scalling';


const SingleDonationItem = ({uri,badgeTitle,donationTitle,price}) => {
  return (
    <View>
      <View>
        <View style={styles.badge}>
            <Badge title={badgeTitle}/>
        </View>
       
        <Image source={{uri:uri}} style={styles.image} resizeMode='contain' />
      </View>
      <View style={styles.donationInfromation}>
          <Header tiitle={donationTitle} type={3} color={'#0A043C'} />
          <View style={styles.price}>
          <Header tiitle={'$' + price.toFixed()} type={3} color={'#156CF7'} />
          </View>
      </View>
    </View>
  )
}

SingleDonationItem.PropTypes = {
    uri:PropTypes.string.isRequired,
    badgeTitle:PropTypes.string.isRequired,
    donationTitle:PropTypes.string.isRequired,
    price:PropTypes.number.isRequired
}

const styles = StyleSheet.create({
    image:{
        width:horizontalScale(155),
        height:verticalScale(170)
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
