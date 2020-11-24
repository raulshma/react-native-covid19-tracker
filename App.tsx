import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import {
  DefaultTheme,
  Provider as PaperProvider,
  configureFonts,
} from 'react-native-paper';
import { Fonts } from 'react-native-paper/lib/typescript/src/types';

import BannerCard from './src/components/BannerCard';
import Info from './src/components/Info';
import InfoHeader from './src/components/InfoHeader';
import TopBar from './src/components/TopBar';
import TrendHeader from './src/components/TrendHeader';

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

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#fff',
    accent: '#f2f2f2',
  },
  fonts: configureFonts(fontConfig),
};

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <TopBar />
      <BannerCard />
      <ScrollView style={styles.scroll}>
        <InfoHeader />
        <Info />
        <TrendHeader />
      </ScrollView>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  scroll: {
    height: '100%',
  },
});

export default App;
