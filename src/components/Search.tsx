import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Searchbar } from 'react-native-paper';

export default function Search() {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = (query: any) => setSearchQuery(query);

  return (
    <View style={styles.view}>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    margin: 22,
    marginTop: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
