import {StyleSheet, Text, View, SafeAreaView, Pressable} from 'react-native';
import React, {useState} from 'react';
import globalStyle from '../assets/styles/globalStyle';
import {ScrollView} from 'react-native-gesture-handler';
import Input from '../components/Input';
import {horizontalScale} from '../assets/styles/scalling';
import Header from '../components/Header';
import Button from '../components/Button';
import { Routes } from '../navigation/Routes';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [Password, setPassword] = useState('');

  console.log(Password);

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}>
        <View style={globalStyle.marginBottom24} >
          <Header tiitle={'Welcome Back'} />
        </View>
        <View style={globalStyle.marginBottom24}>
        <Input
          label="Email"
          placeholder={'Enter your email'}
          keyboardType={'email-address'}
          onChangeText={value => setEmail(value)}
            secureTextEntry={false}
        />
        </View>
        <View style={globalStyle.marginBottom24}>
        <Input
          label="Password"
          placeholder={'Enter your Password'} 
          onChangeText={value => setPassword(value)}
          secureTextEntry={true}
        />
        </View>
        <View style={globalStyle.marginBottom24}>
          <Button title='Login'  />
        </View>
        <Pressable style={styles.registerLink} onPress={()=>navigation.navigate(Routes.Registration)}>
          <Header tiitle={"Don't hava an account, Please Register here"} type={3} color={'#156CF7'}/>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: horizontalScale(24),
    flex: 1,
    justifyContent: 'center',
  },
  registerLink:{
    alignItems:'center'
  }
});

export default Login;
