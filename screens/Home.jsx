import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import globalStyle from '../assets/styles/globalStyle'

const Home = () => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite,globalStyle.flex]}>
        <View>
            <Text>its my home screen</Text>
        </View>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({})


export default Home