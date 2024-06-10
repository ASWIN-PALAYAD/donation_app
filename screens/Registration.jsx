import {StyleSheet, Text, View, SafeAreaView, Pressable} from 'react-native';
import React, {useState} from 'react';
import globalStyle from '../assets/styles/globalStyle';
import {ScrollView} from 'react-native-gesture-handler';
import Input from '../components/Input';
import {horizontalScale, scaleFontSize, verticalScale} from '../assets/styles/scalling';
import Header from '../components/Header';
import Button from '../components/Button';
import {Routes} from '../navigation/Routes';
import BackButton from '../components/BackButton';
import {createUser} from '../api/user';
import { getFontFamily } from '../assets/fonts/helper';

const Registration = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <View style={styles.BackButton}>
        <BackButton onPress={() => navigation.goBack()} />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}>
        <View style={globalStyle.marginBottom24}>
          <Header tiitle={'Hellow and Welcome'} />
        </View>
        <View style={globalStyle.marginBottom24}>
          <Input
            label="First & Last Name"
            placeholder={'Enter Your Full name'}
            onChangeText={value => setFullName(value)}
          />
        </View>
        <View style={globalStyle.marginBottom24}>
          <Input
            label="Email"
            placeholder={'Enter your email'}
            keyboardType={'email-address'}
            onChangeText={value => setEmail(value)}
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

        {error.length > 0 && <Text style={styles.errorStyle}>{error}</Text>}

        {success.length > 0 && (
          <Text style={styles.successStyle}>{success}</Text>
        )}

        <View style={globalStyle.marginBottom24}>
          <Button
            isDisabled={
              fullName.length <= 2 || email.length <= 5 || Password.length <= 3
            }
            title="Register"
            onPress={async () => {
              let user = await createUser(fullName, email, Password);
              if (user.error) {
                setError(user.error);
              } else {
                setError('');
                setSuccess('You have success fully registered');
                setTimeout(() => navigation.goBack(), 3000);
              }
            }}
          />
        </View>
        <Pressable
          style={styles.registerLink}
          onPress={() => navigation.navigate(Routes.Login)}>
          <Header
            tiitle={'hava an account, Please Login'}
            type={3}
            color={'#156CF7'}
          />
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
  registerLink: {
    alignItems: 'center',
  },
  BackButton: {
    marginLeft: horizontalScale(14),
    marginTop: verticalScale(7),
  },
  errorStyle: {
    fontFamily:getFontFamily('Inter'),
    fontSize:scaleFontSize(16),
    color:'#FF0000',
    marginBottom:verticalScale(24)
    
  },
  successStyle:{
    fontFamily:getFontFamily('Inter'),
    fontSize:scaleFontSize(16),
    color:'#28a745',
    marginBottom:verticalScale(24)
    
  }
});

export default Registration;
