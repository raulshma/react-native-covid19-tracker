import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import {
  Caption,
  Divider,
  Headline,
  Paragraph,
  Subheading,
  Surface,
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
  <Surface style={styles.list}>
    <Headline style={{ color: APP_COLORS.DECEASED }}>{candidate}</Headline>
    <Subheading style={{ color: APP_COLORS.TEXT_BLUE }}>
      {trialPhase}
    </Subheading>
    <Divider />
    <Subheading style={{ color: APP_COLORS.TEXT_CHESNUT }}>
      {mechanism}
    </Subheading>
    {sponsors.length && <Caption>Sponsors: {sponsors.join(', ')}</Caption>}
    {institutions.length && (
      <Caption>Institutions: {institutions.join(', ')}</Caption>
    )}
    <Divider />
    <Paragraph style={{ color: APP_COLORS.TEXT_BLACK }}>{details}</Paragraph>
  </Surface>
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
    <SafeAreaView style={{ flex: 1 }}>
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
          bounces={true}
          snapToEnd={true}
          removeClippedSubviews={true}
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
    flex: 1,
    padding: 10,
  },
  list: {
    padding: 22,
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
