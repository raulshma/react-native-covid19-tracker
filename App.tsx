import React, { Suspense } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import {
  DefaultTheme,
  Provider as PaperProvider,
  configureFonts,
} from 'react-native-paper';
import { Fonts } from 'react-native-paper/lib/typescript/src/types';
import useSWR, { mutate } from 'swr';

import BannerCard from './src/components/BannerCard';
import Info from './src/components/Info';
import InfoHeader from './src/components/InfoHeader';
import TopBar from './src/components/TopBar';
import TrendHeader from './src/components/TrendHeader';
import GLOBALDATA_URL from './src/shared/constants';
import GlobalData from './src/shared/interface';
import About from './src/components/About';
import Search from './src/components/Search';
import Spinner from 'react-native-loading-spinner-overlay';
const VaccineInfo = React.lazy(() => import('./src/components/VaccineInfo'));
const HistoryDetails = React.lazy(
  () => import('./src/components/HistoryDetails'),
);

const fontConfig: {
  ['default']: Fonts;
} = {
  default: {
    regular: {
      fontFamily: 'Montserrat-Medium',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'Montserrat-Bold',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'Montserrat-Regular',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'Montserrat-Light',
      fontWeight: 'normal',
    },
  },
};

export const theme = {
  ...DefaultTheme,
  roundness: 2,
  fonts: configureFonts(fontConfig),
};

const Home = ({ navigation }: any) => {
  const { data } = useSWR<GlobalData>(GLOBALDATA_URL);
  return (
    <>
      <TopBar nav={navigation} />
      <ScrollView style={styles.scroll}>
        <BannerCard />
        <InfoHeader data={data} refresh={() => mutate(GLOBALDATA_URL)} />
        <Info data={data} />
        <TrendHeader />
        <Search />
      </ScrollView>
    </>
  );
};
const Drawer = createDrawerNavigator();

export default function App() {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Suspense
          fallback={
            <Spinner
              visible={true}
              textContent={'Loading...'}
              textStyle={{ color: '#FFF' }}
            />
          }>
          <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="History" component={HistoryDetails} />
            <Drawer.Screen name="Vaccine Info" component={VaccineInfo} />
            <Drawer.Screen name="About" component={About} />
          </Drawer.Navigator>
        </Suspense>
      </NavigationContainer>
    </PaperProvider>
  );
}
const styles = StyleSheet.create({
  scroll: {
    // height: '100%',
  },
});
