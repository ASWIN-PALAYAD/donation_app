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

const Home = () => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite,globalStyle.flex]}>
       <Search onSearch={(value)=>{console.log(value);}}/>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({})


export default Home