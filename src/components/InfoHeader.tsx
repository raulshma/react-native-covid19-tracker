import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { IconButton } from 'react-native-paper';

export default function InfoHeader() {
  return (
    <View style={styles.view}>
      <View
        style={{
          alignItems: 'flex-start',
        }}>
        <Text style={styles.updateText}>Transmission Update</Text>
        <Text style={styles.date}>Latest Update: 25 Nov 20</Text>
      </View>
      <View>
        <IconButton
          icon="refresh"
          onPress={() => console.log('settings pressed')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    margin: 22,
    marginRight: 9,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  updateText: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 18,
    letterSpacing: 0.4,
    color: 'rgba(14, 51, 96, 255)',
  },
  date: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 12,
    letterSpacing: 0.4,
    color: 'rgba(14, 51, 96, 255)',
    marginTop: 4,
  },
});
