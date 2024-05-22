import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useRef, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'; 
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../assets/styles/scalling';
import {getFontFamily} from '../assets/fonts/helper';
import PropTypes, { string } from 'prop-types';

const Search = ({onSearch,placeholder}) => {
  const [search, setSearch] = useState('');

  const textInputRef = useRef(null);
  const handleFocus = () => {
    textInputRef.current.focus();
  };

  const handleSearch = (searchValue)=> {
    setSearch(searchValue);
    onSearch(searchValue)    
  }

  return (
    <Pressable style={styles.searchInputContainer} onPress={handleFocus}>
      <FontAwesomeIcon
        icon={faSearch}
        color={'#25C0FF'}
        size={scaleFontSize(22)}
      />
      <TextInput style={styles.searchInput} ref={textInputRef} 
      value={search} onChangeText={(value)=>handleSearch(value)} placeholder={placeholder}  />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  searchInputContainer: {
    flexDirection: 'row',
    paddingHorizontal: horizontalScale(16),
    backgroundColor: '#F3F5F9',
    height: verticalScale(40),
    alignItems: 'center',
    borderRadius: horizontalScale(15),
  },
  searchInput: {
    marginLeft: horizontalScale(6),
    flex: 1,
    height: '100%',
    fontFamily: getFontFamily('Inter'),
    fontSize: scaleFontSize(14),
    lineHeight: scaleFontSize(14),
    color: '#6867A',
  },
});

Search.defultProps = {
  onSearch: () => {},
  placeholder: 'Search'
};

Search.propTypes = {
  onSearch: PropTypes.func,
  placeholder:PropTypes.string
};

export default Search;
