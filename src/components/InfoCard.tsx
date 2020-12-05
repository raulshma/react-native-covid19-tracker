import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { IconButton, Surface, TouchableRipple } from 'react-native-paper';
import { Dimensions } from 'react-native';
import { APP_COLORS } from '../shared/constants';
import FadeInWrapper from './FadeInWrapper';

const windowWidth = Dimensions.get('window').width;

interface Props {
  icon: string;
  number: string | number | undefined;
  type: string;
}

const InfoCard: React.FC<Props> = ({ icon, number, type }) => {
  const color =
    type === 'Confirmed'
      ? APP_COLORS.CONFIRMED
      : type === 'Recovered'
      ? APP_COLORS.RECOVERED
      : APP_COLORS.DECEASED;
  return (
    <FadeInWrapper
      children={
        <Surface style={styles.card}>
          <TouchableRipple
            onPress={() => null}
            rippleColor="rgba(0, 0, 0, .05)">
            <View style={styles.view}>
              <IconButton icon={icon} size={26} color={color} />
              <Text
                style={{ color, fontFamily: 'Montserrat-Bold', fontSize: 18 }}>
                {number}
              </Text>
              <Text
                style={{
                  color,
                  fontFamily: 'Montserrat-Medium',
                  fontSize: 12,
                }}>
                {type}
              </Text>
            </View>
          </TouchableRipple>
        </Surface>
      }
    />
  );
};

const styles = StyleSheet.create({
  card: {
    width: windowWidth / 3 - 20,
    height: 130,
    borderRadius: (windowWidth / 3 - 25) % 12,
    elevation: 3,
  },
  view: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 10,
    height: '100%',
  },
});

export default InfoCard;
