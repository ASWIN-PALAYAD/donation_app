import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import globalStyle from '../assets/styles/globalStyle'
import Header from '../components/Header'
import Button from '../components/Button'
import Tabs from '../components/Tabs'
import Badge from '../components/Badge'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Search from '../components/Search'
import SingleDonationItem from '../components/SingleDonationItem'
import { horizontalScale } from '../assets/styles/scalling'

const Home = () => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite,globalStyle.flex]}>
       {/* <Search onSearch={(value)=>{console.log(value);}}/> */}
       <View style={styles.ItemContainer}>
         <SingleDonationItem 
            badgeTitle={"Environment"}
            donationTitle={"Tree Cactus"}
            price={44}
            uri={"https://img.pixers.pics/pho_wat(s3:700/FO/44/24/64/31/700_FO44246431_ab024cd8251bff09ce9ae6ecd05ec4a8.jpg,525,700,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,305,650,jpg)/stickers-cactus-cartoon-illustration.jpg.jpg"}
         />
         <SingleDonationItem 
            badgeTitle={"Environment"}
            donationTitle={"Tree Cactus"}
            price={44}
            uri={"https://img.pixers.pics/pho_wat(s3:700/FO/44/24/64/31/700_FO44246431_ab024cd8251bff09ce9ae6ecd05ec4a8.jpg,525,700,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,305,650,jpg)/stickers-cactus-cartoon-illustration.jpg.jpg"}
         />
       </View>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  ItemContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    padding:horizontalScale(24)
  }
})


export default Home