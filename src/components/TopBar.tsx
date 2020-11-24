import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { IconButton } from 'react-native-paper';

export const TOPBAR_HEIGHT = 90;

const TopBar: React.FC = () => {
  return (
    <View style={styles.view}>
      <IconButton icon="menu" onPress={() => console.log('settings pressed')} />
      <Text style={styles.title}>Covid 19 Tracker</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: TOPBAR_HEIGHT,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Montserrat-Regular',
    marginLeft: 6,
    marginBottom: 2,
  },
});

export default TopBar;
