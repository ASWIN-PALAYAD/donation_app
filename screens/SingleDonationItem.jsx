import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import globalStyle from '../assets/styles/globalStyle';
import BackButton from '../components/BackButton';
import { horizontalScale, verticalScale } from '../assets/styles/scalling';

const SingleDonationItem = ({navigation}) => {

    const donationItemInformation = useSelector(state => state.donations?.SelectedDonationInformation);
    console.log(donationItemInformation);

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]} >
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container} >
        <BackButton onPress={()=>navigation.goBack()}/>
      </ScrollView>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container:{
    marginHorizontal:horizontalScale(20),
    marginTop:verticalScale(7)
  }
})

export default SingleDonationItem

