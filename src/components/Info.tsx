import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import InfoCard from './InfoCard';

export default function Info() {
  return (
    <View style={styles.view}>
      <InfoCard
        icon="check-circle-outline"
        number={'122,088'}
        type="Confirmed"
      />
      <InfoCard icon="bandage" number={'13,088'} type="Recovered" />
      <InfoCard icon="death-star" number={'2,088'} type="Deceased" />
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
