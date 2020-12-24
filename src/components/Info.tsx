import React from 'react';
import { StyleSheet, View } from 'react-native';

import InfoCard from './InfoCard';
import GlobalData from '../shared/interface';
import { fNum } from '../utils/functions';

export default function Info(props: { data: GlobalData | undefined }) {
  return (
    <View style={styles.view}>
      <InfoCard
        delay={1100}
        icon="flash"
        number={fNum(props.data?.cases)}
        type="Confirmed"
      />
      <InfoCard
        delay={1400}
        icon="heart"
        number={fNum(props.data?.recovered)}
        type="Recovered"
      />
      <InfoCard
        delay={1700}
        icon="close-thick"
        number={fNum(props.data?.deaths)}
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
