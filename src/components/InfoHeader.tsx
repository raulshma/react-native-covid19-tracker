import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { IconButton } from 'react-native-paper';
import date from 'date-and-time';

import GlobalData from '../shared/interface';

export default function InfoHeader(props: {
  data: GlobalData | undefined;
  refresh: Function;
}) {
  const refreshData = () => {
    props.refresh();
  };
  return (
    <View style={styles.view}>
      <View
        style={{
          alignItems: 'flex-start',
        }}>
        <Text style={styles.updateText}>Transmission Update</Text>
        <Text style={styles.date}>
          Latest Update:{' '}
          {props.data
            ? date.format(new Date(props.data?.updated), 'MMM, DD hh:mm A')
            : '-'}
        </Text>
      </View>
      <View>
        <IconButton icon="refresh" onPress={refreshData} />
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
