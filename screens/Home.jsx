import React,{useEffect, useState} from 'react';
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
import { updateSelectedCategoryId } from '../redux/reducers/Categories';

const Home = () => {
  const user = useSelector(state => state.user);
  const categories = useSelector(state => state.categories);
  const dispatch = useDispatch();

  const [categoryPage, setCategoryPage] = useState(1);
  const [categoryList, setCategoryList] = useState([]);
  const [isLoadingCategory, setIsLoadingCategory] = useState(false);
  const categoryPageSize = 4;

  const pagination = (items,pageNumber,pageSize) => {
    startIndex = (pageNumber -1)*pageSize;
    const endIndex = startIndex + pageSize;

    if(startIndex >= items.length){
      return [];
    }
    return items.slice(startIndex,endIndex);
  }

  useEffect(() => {
    setIsLoadingCategory(true);
    setCategoryList(pagination(categories.categories,categoryPage,categoryPageSize));
    setCategoryPage(pre => pre+1)
    setIsLoadingCategory(false);
  }, [])
  
 
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
            <Header tiitle={"Select Category"} type={2} />
          </View>

          <FlatList
            onEndReachedThreshold={0.5}
            onEndReached={()=>{
              if(isLoadingCategory){
                return;
              }
              console.log('user reached and start fetch newxt item');
              setIsLoadingCategory(true);
              let newData = pagination(categories.categories,categoryPage,categoryPageSize);
              if(newData.length > 0){
                setCategoryList(preState => [...preState,...newData]);
                setCategoryPage(prevState => prevState+1);
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
                  onPress={(value)=>dispatch(updateSelectedCategoryId(value))}
                />
              </View>
            )}
          />
        </View>
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
  categoryHeader:{
    marginVertical:verticalScale(15)
  },
  categoryItem: {
    marginRight: horizontalScale(10),
  },
});

export default Home;
