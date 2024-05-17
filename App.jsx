import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MainNavigation from './navigation/MainNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { getFontFamily } from './assets/fonts/helper'

const App = () => {
  return (
    <NavigationContainer>
        <MainNavigation/>
    </NavigationContainer>
  )
}


const styles = StyleSheet.create({})

export default App
