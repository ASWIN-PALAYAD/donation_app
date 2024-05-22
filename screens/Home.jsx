import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
} from 'react-native';
import React from 'react';
import globalStyle from '../assets/styles/globalStyle';
import Header from '../components/Header';
import Tabs from '../components/Tabs';
import Search from '../components/Search';
import SingleDonationItem from '../components/SingleDonationItem';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../assets/styles/scalling';
import {useDispatch, useSelector} from 'react-redux';
import {getFontFamily} from '../assets/fonts/helper';
import {getFontScale} from 'react-native-device-info';
import {resetToInitialState} from '../redux/reducers/User';

const Home = () => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  // console.log(user);
  // dispatch(resetToInitialState());

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* user info section */}
        <View style={styles.header}>
          <View>
            <Text style={styles.headerIntroText}>Hello,</Text>
            <View style={styles.userName}>
              <Header
                tiitle={user.firstName + ' ' + user.lastName[0] + '. 👋'}
              />
            </View>
          </View>
          <Image
            source={{uri: user.profileImage}}
            style={styles.profileImage}
            resizeMode="contain"
          />
        </View>

        {/* search section */}
        <View style={styles.searachBox}>
          <Search placeholder={'Search'} />
        </View>
        {/* highlighted image section */}
        <Pressable style={styles.highlightedImageContainer} >
          <Image
            source={require('../assets/images/highlighted_image.png')}
            resizeMode="contain"
            style={styles.highlightedImage}
          />
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: verticalScale(20),
    marginHorizontal: horizontalScale(24),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerIntroText: {
    fontFamily: getFontFamily('Inter'),
    fontSize: scaleFontSize(16),
    lineHeight: scaleFontSize(19),
    fontWeight: '400',
    color: '#636776',
  },
  userName: {
    marginTop: verticalScale(5),
  },
  profileImage: {
    width: horizontalScale(50),
    height: verticalScale(50),
  },
  searachBox: {
    marginHorizontal: horizontalScale(24),
    marginTop: verticalScale(20),
  },
  highlightedImageContainer:{
    marginHorizontal:horizontalScale(24)
  },
  highlightedImage:{
    width:'100%',
    height:verticalScale(160)
  }
});

export default Home;
