import React, { useEffect } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Chip, Searchbar } from 'react-native-paper';
import { SEARCH_ITEM, CountryData } from '../shared/interface';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useSWR from 'swr';

import { COUNTRY_URL } from '../shared/constants';
import CountryInfo from './CountryInfo';

const LOCAL_KEY: string = 'search-items';

export default function Search() {
  const [shouldFetch, setShouldFetch] = React.useState<boolean>();
  const [countryUrl, setCountryUrl] = React.useState<string>('');
  const [searchedItems, setSearchedItems] = React.useState<SEARCH_ITEM[]>([]);
  const [searchQuery, setSearchQuery] = React.useState<string>('');
  const { data } = useSWR<CountryData>(shouldFetch ? countryUrl : null);
  //TODO : Refactor
  const chipPressed = async (index: number) => {
    await removeItemFromLocalStorage(index);
    setSearchedItems((old_items: SEARCH_ITEM[]) => {
      old_items.splice(index, 1);
      return old_items.slice();
    });
  };

  const onSearch = async (idx: number = -1) => {
    let searchText: string;
    if (Number(idx) !== -1) {
      searchText = searchedItems[idx].name;
    } else if (searchQuery === '') {
      return;
    } else {
      searchText = searchQuery;
    }
    setCountryUrl(COUNTRY_URL(searchText));
    setShouldFetch(true);
    if (
      idx === -1 &&
      searchedItems.filter(
        (e) => e.name.toLowerCase() === searchQuery.toLowerCase(),
      ).length <= 0
    ) {
      await storeItemToLocalStorage(searchText);
      setSearchedItems((old_items: SEARCH_ITEM[]) => {
        const new_item: SEARCH_ITEM = {
          name: searchText,
        };
        return [...old_items, new_item];
      });
    }
    setSearchQuery('');
  };

  const storeItemToLocalStorage = async (value: string) => {
    try {
      const new_item: SEARCH_ITEM = {
        name: value,
      };
      const jsonValue = JSON.stringify([...searchedItems, new_item]);
      await AsyncStorage.setItem(LOCAL_KEY, jsonValue);
    } catch (e) {
      console.log('failed to save item to local storage');
    }
  };

  const removeItemFromLocalStorage = async (idx: number) => {
    try {
      const items = searchedItems.slice();
      items.splice(idx, 1);
      await AsyncStorage.setItem(LOCAL_KEY, JSON.stringify(items));
    } catch (e) {
      console.log('failed to save item to local storage');
    }
  };

  useEffect(() => {
    const getStoredSearchedItems = async () => {
      try {
        const value = await AsyncStorage.getItem(LOCAL_KEY);
        if (value !== null) {
          const items: SEARCH_ITEM[] = JSON.parse(value);
          setSearchedItems(items);
        }
      } catch (e) {
        console.log('failed to read from storage');
      }
    };
    getStoredSearchedItems();
  }, []);

  return (
    <>
      <View style={styles.view}>
        <Searchbar
          placeholder="Name, iso2, iso3, ID code"
          onIconPress={() => onSearch()}
          onSubmitEditing={() => onSearch()}
          onChangeText={setSearchQuery}
          value={searchQuery}
        />
      </View>
      <ScrollView
        horizontal={true}
        contentContainerStyle={{ ...styles.view, ...styles.searched }}>
        {searchedItems.map((item: SEARCH_ITEM, idx: number) => {
          return (
            <Chip
              closeIconAccessibilityLabel={'Close'}
              onClose={() => chipPressed(idx)}
              onPress={() => onSearch(idx)}
              key={idx}>
              {item.name}
            </Chip>
          );
        })}
      </ScrollView>
      {data && <CountryInfo data={data} />}
    </>
  );
}

const styles = StyleSheet.create({
  view: {
    margin: 22,
    marginTop: 0,
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'nowrap',
    justifyContent: 'flex-start',
  },
  searched: {
    paddingRight: 44,
    alignItems: 'stretch',
  },
});
