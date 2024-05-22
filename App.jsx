import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MainNavigation from './navigation/MainNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { getFontFamily } from './assets/fonts/helper';
import { Provider } from 'react-redux';
import store, { persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';


const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <NavigationContainer>
            <MainNavigation/>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  )
}


const styles = StyleSheet.create({})

export default App
