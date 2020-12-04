import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import {
  Caption,
  Divider,
  Headline,
  Paragraph,
  Subheading,
  Title,
} from 'react-native-paper';
import useSWR from 'swr';
import { APP_COLORS } from '../shared/constants';
import { Datum, VaccineData } from '../shared/interface';

import { NavigationHeader } from './HistoryDetails';

interface ItemInterface {
  index: number;
  item: Datum;
}

const Item = ({
  candidate,
  details,
  mechanism,
  sponsors,
  trialPhase,
  institutions,
}: Datum) => (
  <View style={styles.list}>
    <Headline>{candidate}</Headline>
    <Subheading>{trialPhase}</Subheading>
    <Divider />
    <Subheading>{mechanism}</Subheading>
    {sponsors.length && <Caption>Sponsors: {sponsors.join(', ')}</Caption>}
    {institutions.length && (
      <Caption>Institutions: {institutions.join(', ')}</Caption>
    )}
    <Divider />
    <Paragraph style={{ color: APP_COLORS.TEXT_BLACK }}>{details}</Paragraph>
  </View>
);
const renderItem = (data: ItemInterface) => {
  return <Item {...data.item} />;
};
export default function VaccineInfo({ navigation }: any) {
  const { data } = useSWR<VaccineData>(
    'https://disease.sh/v3/covid-19/vaccine',
  );
  if (!data) return <>{NavigationHeader(navigation)}</>;
  return (
    <SafeAreaView>
      {NavigationHeader(navigation)}
      <View style={styles.scrollView}>
        <View style={styles.titleHead}>
          <Title>Total Candidates</Title>
          <Title>{data.totalCandidates}</Title>
        </View>
        <Divider />
        <Caption>Source: {data.source}</Caption>
        <Divider />
        <FlatList
          data={data.data}
          renderItem={renderItem}
          keyExtractor={(item, idx) => item.candidate + idx}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    padding: 10,
  },
  list: {
    paddingVertical: 22,
  },
  titleHead: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
});
