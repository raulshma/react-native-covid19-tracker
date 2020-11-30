import React, { useEffect } from 'react';
import { Dimensions, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Appbar } from 'react-native-paper';

export default function HistoryChart({ navigation }: any) {
  const [filteredCases, setFilteredCases] = React.useState<
    {
      date: string;
      num: number;
    }[]
  >();
  useEffect(() => {
    const get = async () => {
      fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=all')
        .then((res) => res.json())
        .then((items) => {
          const new_data = [];
          for (let i in items.cases) {
            new_data.push({ date: i, num: items.cases[i] });
          }
          setFilteredCases(new_data);
        });
    };
    get();
  }, []);
  return (
    <View>
      <Appbar.Header style={styles.header}>
        <Appbar.BackAction
          onPress={() => (navigation.canGoBack() ? navigation.goBack() : null)}
        />
      </Appbar.Header>
    </View>
  );
}

const styles = StyleSheet.create({ header: { backgroundColor: 'white' } });
