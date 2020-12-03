import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Appbar, DataTable } from 'react-native-paper';
import useSWR from 'swr';
import date from 'date-and-time';

function Header(navigation: any) {
  return (
    <Appbar.Header style={styles.header}>
      <Appbar.BackAction
        onPress={() => (navigation.canGoBack() ? navigation.goBack() : null)}
      />
    </Appbar.Header>
  );
}
const itemsPerPage = 10;
export default function HistoryDetails({ navigation }: any) {
  const { data } = useSWR('https://func.raulshma.xyz/api/c19history', {
    dedupingInterval: 60000,
  });
  const [cases, setCases] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const from = page * itemsPerPage;
  const to = (page + 1) * itemsPerPage;

  React.useEffect(() => {
    try {
      setCases(data.cases.slice(from, to));
    } catch (e) {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, data]);
  if (!data) {
    return <SafeAreaView>{Header(navigation)}</SafeAreaView>;
  }
  return (
    <SafeAreaView>
      {Header(navigation)}
      <ScrollView>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>Date</DataTable.Title>
            <DataTable.Title numeric>Cases</DataTable.Title>
          </DataTable.Header>
          {cases.map((e: { date: string; count: number }) => {
            return (
              <DataTable.Row key={e.date}>
                <DataTable.Cell>
                  {date.format(new Date(e.date), 'MMM, DD')}
                </DataTable.Cell>
                <DataTable.Cell numeric>{e.count}</DataTable.Cell>
              </DataTable.Row>
            );
          })}
          <DataTable.Pagination
            page={page}
            numberOfPages={Math.floor(data.cases.length / itemsPerPage)}
            onPageChange={(p) => setPage(p)}
            label={`${from + 1}-${to} of ${data.cases.length}`}
          />
        </DataTable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({ header: { backgroundColor: 'white' } });
