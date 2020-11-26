import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Appbar } from 'react-native-paper';

export default function About({ navigation }: any) {
  return (
    <View>
      <Appbar.Header style={styles.header}>
        <Appbar.BackAction
          onPress={() => (navigation.canGoBack() ? navigation.goBack() : null)}
        />
      </Appbar.Header>
      <ScrollView></ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({ header: { backgroundColor: 'white' } });
