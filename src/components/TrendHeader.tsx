import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function TrendHeader() {
  return (
    <View style={styles.view}>
      <Text
        style={{
          fontFamily: 'Montserrat-Medium',
          fontSize: 16,
          letterSpacing: 0.4,
          color: 'rgba(14, 51, 96, 255)',
        }}>
        Search Country Data
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    margin: 22,
    marginTop: 0,
  },
});
