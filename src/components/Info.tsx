import React from 'react';
import { StyleSheet, View } from 'react-native';
import numeral from 'numeral';

import InfoCard from './InfoCard';
import GlobalData from '../shared/interface';

export default function Info(props: { data: GlobalData | undefined }) {
  return (
    <View style={styles.view}>
      <InfoCard
        icon="check-circle-outline"
        number={numeral(props.data?.cases).format('0,0')}
        type="Confirmed"
      />
      <InfoCard
        icon="bandage"
        number={numeral(props.data?.recovered).format('0,0')}
        type="Recovered"
      />
      <InfoCard
        icon="death-star"
        number={numeral(props.data?.deaths).format('0,0')}
        type="Deceased"
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
