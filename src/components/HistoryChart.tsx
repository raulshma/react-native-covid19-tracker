import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Appbar, Caption, Card, Subheading, Surface } from 'react-native-paper';
import { StackedBarChart, XAxis, YAxis } from 'react-native-svg-charts';
import useSWR from 'swr';
import { APP_COLORS, MONTHS } from '../shared/constants';
import { fNum } from '../utils/functions';

import { fetcherAll } from '../utils/jsFunctions';

function Header(navigation: any) {
  return (
    <Appbar.Header style={styles.header}>
      <Appbar.BackAction
        onPress={() => (navigation.canGoBack() ? navigation.goBack() : null)}
      />
    </Appbar.Header>
  );
}

export default function HistoryChart({ navigation }: any) {
  const { data } = useSWR<any>(
    'https://disease.sh/v3/covid-19/historical/all?lastdays=all',
    fetcherAll,
    { dedupingInterval: 60000 },
  );
  const keys = ['cases', 'recovered', 'deaths'];
  const colors = [
    APP_COLORS.CONFIRMED,
    APP_COLORS.RECOVERED,
    APP_COLORS.DECEASED,
  ];
  if (!data) {
    return <SafeAreaView>{Header(navigation)}</SafeAreaView>;
  }
  return (
    <SafeAreaView>
      {Header(navigation)}
      <ScrollView>
        <View style={{ padding: 22 }}>
          <StackedBarChart
            style={{ height: 200 }}
            keys={keys}
            colors={colors}
            data={data.arr}
            animate={true}
            numberOfTicks={data.count}
            animationDuration={1000}
            contentInset={{ top: 30, bottom: 30 }}
          />
          <XAxis
            data={data.arr}
            contentInset={{ left: 26, right: 26 }}
            svg={{ fontSize: 12, fill: 'black' }}
            style={{ marginHorizontal: -10 }}
            numberOfTicks={data.count}
            formatLabel={(value) => {
              return `${value + 1}`;
            }}
          />
        </View>
        <Surface style={{ padding: 22, marginBottom: 50 }}>
          {data.arr.map((e: any, idx: number) => {
            return (
              <View key={idx}>
                <Subheading>{MONTHS[idx + 1]}</Subheading>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Caption>Cases</Caption>
                  <Caption>{fNum(e.cases)}</Caption>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Caption>Recovered</Caption>
                  <Caption>{fNum(e.recovered)}</Caption>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Caption>Cases</Caption>
                  <Caption>{fNum(e.deaths)}</Caption>
                </View>
              </View>
            );
          })}
        </Surface>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({ header: { backgroundColor: 'white' } });
