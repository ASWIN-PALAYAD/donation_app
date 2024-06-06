import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import globalStyle from '../assets/styles/globalStyle';
import BackButton from '../components/BackButton';
import {horizontalScale, scaleFontSize, verticalScale} from '../assets/styles/scalling';
import Badge from '../components/Badge';
import Header from '../components/Header';
import { getFontFamily } from '../assets/fonts/helper';
import Button from '../components/Button';

const SingleDonationItem = ({navigation, route}) => {
  const donationItemInformation = useSelector(
    state => state.donations?.SelectedDonationInformation,
  );
  const categoryInformation = route.params.categoryInformation;

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <BackButton onPress={() => navigation.goBack()} />
        <Image
          source={{uri: donationItemInformation.image}}
          style={styles.image}
        />
        <View style={styles.badge} >
          <Badge title={categoryInformation.name} />
        </View>
        <Header type={1} tiitle={donationItemInformation.name} />
        <Text style={styles.description} >
            {donationItemInformation.description}
            {donationItemInformation.description}
            {donationItemInformation.description}
            {donationItemInformation.description}
            {donationItemInformation.description}
            {donationItemInformation.description}
            
        </Text>
      </ScrollView>
      <View style={styles.button}>
        <Button title={'Donate'} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: horizontalScale(20),
    marginTop: verticalScale(7),
  },
  image: {
    marginTop: verticalScale(12),
    marginBottom: verticalScale(24),
    width: '100%',
    height: verticalScale(240),
    borderRadius: horizontalScale(5),
  },
  badge:{
    marginBottom:verticalScale(16)
  },
  description:{
    marginTop:verticalScale(7),
    marginHorizontal:horizontalScale(7),
    fontFamily: getFontFamily('inter'),
    fontWeight:'400',
    fontSize:scaleFontSize(14),
    marginBottom:verticalScale(10)
  },
  button:{
    marginHorizontal:horizontalScale(20)
  }
});

export default SingleDonationItem;
