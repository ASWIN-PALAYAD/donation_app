import React, {useEffect, useState} from 'react';
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  FlatList,
} from 'react-native';
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
import {
  resetCategories,
  updateSelectedCategoryId,
} from '../redux/reducers/Categories';
import {
  resetDonation,
  updateSelectedDonationId,
} from '../redux/reducers/Donations';
import {Routes} from '../navigation/Routes';

const Home = ({navigation}) => {
  const user = useSelector(state => state.user);
  const categories = useSelector(state => state.categories);
  const donations = useSelector(state => state.donations);
  const dispatch = useDispatch();

  //   dispatch(resetToInitialState());
  // dispatch(resetCategories());
  // dispatch(resetDonation());

  // console.log("donation", donations);

  const [categoryPage, setCategoryPage] = useState(1);
  const [categoryList, setCategoryList] = useState([]);
  const [isLoadingCategory, setIsLoadingCategory] = useState(false);
  const [donationItems, setDonationItems] = useState([]);
  const categoryPageSize = 4;

  const pagination = (items, pageNumber, pageSize) => {
    startIndex = (pageNumber - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    if (startIndex >= items.length) {
      return [];
    }
    return items.slice(startIndex, endIndex);
  };

  useEffect(() => {
    const items = donations.items.filter(value =>
      value.categoryIds.includes(categories.selectedCategoryId),
    );
    setDonationItems(items);
  }, [categories.selectedCategoryId]);

  useEffect(() => {
    setIsLoadingCategory(true);
    setCategoryList(
      pagination(categories.categories, categoryPage, categoryPageSize),
    );
    setCategoryPage(pre => pre + 1);
    setIsLoadingCategory(false);
  }, []);

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
        <Pressable style={styles.highlightedImageContainer}>
          <Image
            source={require('../assets/images/highlighted_image.png')}
            resizeMode="contain"
            style={styles.highlightedImage}
          />
        </Pressable>
        {/* categories list section */}

        <View style={styles.categories}>
          <View style={styles.categoryHeader}>
            <Header tiitle={'Select Category'} type={2} />
          </View>

          <FlatList
            onEndReachedThreshold={0.5}
            onEndReached={() => {
              if (isLoadingCategory) {
                return;
              }
              // console.log('user reached and start fetch newxt item');
              setIsLoadingCategory(true);
              let newData = pagination(
                categories.categories,
                categoryPage,
                categoryPageSize,
              );
              if (newData.length > 0) {
                setCategoryList(preState => [...preState, ...newData]);
                setCategoryPage(prevState => prevState + 1);
              }
              setIsLoadingCategory(false);
            }}
            data={categoryList}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <View style={styles.categoryItem} key={item.categoryId}>
                <Tabs
                  tabId={item.categoryId}
                  title={item.name}
                  isInactive={item.categoryId != categories.selectedCategoryId}
                  onPress={value => dispatch(updateSelectedCategoryId(value))}
                />
              </View>
            )}
          />
        </View>

        {/* donation display section */}
        {donationItems?.length > 0 && (
          <View style={styles.donationItemsContainer}>
            {donationItems.map(value => {

                const categoryInformation = categories.categories.find(
                  val => val.categoryId === categories.selectedCategoryId,
                )

              return (
                <View
                  key={value.donationItemId}
                  style={styles.singleDonationItem}>
                  <SingleDonationItem
                    badgeTitle={categoryInformation.name}
                    onPress={selectedDonationId => {
                      dispatch(updateSelectedDonationId(selectedDonationId));
                      navigation.navigate(Routes.SingleDonationItem, {
                        categoryInformation
                      });
                    }}
                    donationTitle={value.name}
                    donationItemId={value.donationItemId}
                    uri={value.image}
                    price={parseFloat(value.price)}
                  />
                </View>
              );
            })}
          </View>
        )}
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
  highlightedImageContainer: {
    marginHorizontal: horizontalScale(24),
  },
  highlightedImage: {
    width: '100%',
    height: verticalScale(160),
  },
  categories: {
    marginLeft: horizontalScale(24),
  },
  categoryHeader: {
    marginVertical: verticalScale(15),
  },
  categoryItem: {
    marginRight: horizontalScale(10),
  },
  donationItemsContainer: {
    marginTop: verticalScale(20),
    marginHorizontal: horizontalScale(24),
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  singleDonationItem: {
    maxWidth: '45%',
    marginBottom: verticalScale(23),
  },
});

export default Home;
