import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import globalStyle from '../assets/styles/globalStyle'
import Header from '../components/Header'
import Button from '../components/Button'

const Home = () => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite,globalStyle.flex]}>
       <Header tiitle={'Aswin S.'} type={1}/>
       <Button title='Donate' onPress={()=>{console.log('presed me');}}/>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({})


export default Home