import React from 'react';
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
      <BannerCard />
      <ScrollView style={styles.scroll}>
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
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Info" component={About} />
        </Drawer.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
const styles = StyleSheet.create({
  scroll: {
    height: '100%',
  },
});
