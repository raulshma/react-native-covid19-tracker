import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import {
  Avatar,
  Caption,
  Card,
  DataTable,
  Divider,
  Subheading,
  Text,
} from 'react-native-paper';
import date from 'date-and-time';
import * as Animatable from 'react-native-animatable';

import { CountryData } from '../shared/interface';
import { APP_COLORS } from '../shared/constants';
import { fNum } from '../utils/functions';

const CountryInfoImage = (image: string) => {
  if (!image) {
    return <></>;
  }
  return (
    <Avatar.Image size={40} source={{ uri: image }} style={{ elevation: 2 }} />
  );
};

interface PROPS {
  data: CountryData;
}
const CountryInfo: React.FC<PROPS> = ({ data }) => {
  return (
    <Animatable.View animation={'fadeIn'}>
      <ScrollView contentContainerStyle={styles.country}>
        <Card>
          <Card.Title
            title={data.country}
            subtitle={date.format(new Date(data?.updated), 'MMM, DD hh:mm A')}
            right={() => CountryInfoImage(data.countryInfo.flag)}
            rightStyle={{ paddingRight: 10 }}
          />
          <Card.Content>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title style={styles.content}>
                  Confirmed
                </DataTable.Title>
                <DataTable.Title style={styles.content}>Active</DataTable.Title>
                <DataTable.Title style={styles.content}>
                  Recovered
                </DataTable.Title>
                <DataTable.Title style={styles.content}>
                  Deceased
                </DataTable.Title>
              </DataTable.Header>
              <DataTable.Row>
                <DataTable.Cell style={styles.content}>
                  <Text style={styles.confirmed}>{fNum(data.cases)}</Text>
                </DataTable.Cell>
                <DataTable.Cell style={styles.content}>
                  <Text style={styles.active}>{fNum(data.active)}</Text>
                </DataTable.Cell>
                <DataTable.Cell style={styles.content}>
                  <Text style={styles.recovered}>{fNum(data.deaths)}</Text>
                </DataTable.Cell>
                <DataTable.Cell style={styles.content}>
                  <Text style={styles.deceased}>{fNum(data.recovered)}</Text>
                </DataTable.Cell>
              </DataTable.Row>
            </DataTable>
            <Divider />
            <View style={styles.details}>
              <Subheading>Information</Subheading>
              <View style={styles.innerDetails}>
                <Caption>Continent</Caption>
                <Caption>{data.continent}</Caption>
              </View>
              <View style={styles.innerDetails}>
                <Caption>Population</Caption>
                <Caption>{fNum(data.population)}</Caption>
              </View>
              <View style={styles.innerDetails}>
                <Caption>Tests</Caption>
                <Caption>{fNum(data.tests)}</Caption>
              </View>
              <Divider />
              <Subheading>Today</Subheading>
              <View style={styles.innerDetails}>
                <Caption>Cases</Caption>
                <Caption>+{fNum(data.todayCases)}</Caption>
              </View>
              <View style={styles.innerDetails}>
                <Caption>Recovered</Caption>
                <Caption>+{fNum(data.todayRecovered)}</Caption>
              </View>
              <View style={styles.innerDetails}>
                <Caption>Deceased</Caption>
                <Caption>+{fNum(data.todayDeaths)}</Caption>
              </View>
              <View style={styles.innerDetails}>
                <Caption>Critical</Caption>
                <Caption>{fNum(data.critical)}</Caption>
              </View>
              <Divider />
              <Subheading>Per One Million</Subheading>
              <View style={styles.innerDetails}>
                <Caption>Cases</Caption>
                <Caption>{fNum(data.casesPerOneMillion)}</Caption>
              </View>
              <View style={styles.innerDetails}>
                <Caption>Active</Caption>
                <Caption>{fNum(data.activePerOneMillion)}</Caption>
              </View>
              <View style={styles.innerDetails}>
                <Caption>Recovered</Caption>
                <Caption>{fNum(data.recoveredPerOneMillion)}</Caption>
              </View>
              <View style={styles.innerDetails}>
                <Caption>Deceased</Caption>
                <Caption>{fNum(data.deathsPerOneMillion)}</Caption>
              </View>
              <View style={styles.innerDetails}>
                <Caption>Tests</Caption>
                <Caption>{fNum(data.testsPerOneMillion)}</Caption>
              </View>
              <Divider />
              <Subheading>One Per People</Subheading>
              <View style={styles.innerDetails}>
                <Caption>Case</Caption>
                <Caption>{fNum(data.oneCasePerPeople)}</Caption>
              </View>
              <View style={styles.innerDetails}>
                <Caption>Death</Caption>
                <Caption>{fNum(data.oneDeathPerPeople)}</Caption>
              </View>
              <View style={styles.innerDetails}>
                <Caption>Test</Caption>
                <Caption>{fNum(data.oneTestPerPeople)}</Caption>
              </View>
            </View>
          </Card.Content>
        </Card>
      </ScrollView>
    </Animatable.View>
  );
};

const styles = StyleSheet.create({
  country: {
    margin: 22,
    marginTop: 0,
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  confirmed: {
    color: APP_COLORS.CONFIRMED,
    fontFamily: 'Montserrat-Medium',
  },
  active: { color: APP_COLORS.ACTIVE, fontFamily: 'Montserrat-Medium' },
  recovered: {
    color: APP_COLORS.RECOVERED,
    fontFamily: 'Montserrat-Medium',
  },
  deceased: {
    color: APP_COLORS.DECEASED,
    fontFamily: 'Montserrat-Medium',
  },
  details: { margin: 2, marginTop: 15 },
  innerDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
});

export default CountryInfo;
