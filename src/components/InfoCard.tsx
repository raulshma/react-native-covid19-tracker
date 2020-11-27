import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, IconButton, Surface, TouchableRipple } from 'react-native-paper';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

interface Props {
  icon: string;
  number: string | number | undefined;
  type: string;
}

const InfoCard: React.FC<Props> = ({ icon, number, type }) => {
  const color =
    type === 'Confirmed'
      ? '#FF5050'
      : type === 'Recovered'
      ? '#21CF55'
      : '#0E3360';
  return (
    <Surface style={styles.card}>
      <TouchableRipple onPress={() => null} rippleColor="rgba(0, 0, 0, .05)">
        <View style={styles.view}>
          <IconButton icon={icon} size={26} color={color} />
          <Text style={{ color, fontFamily: 'Montserrat-Bold', fontSize: 18 }}>
            {number}
          </Text>
          <Text
            style={{ color, fontFamily: 'Montserrat-Medium', fontSize: 12 }}>
            {type}
          </Text>
        </View>
      </TouchableRipple>
    </Surface>
  );
};

const styles = StyleSheet.create({
  card: {
    width: windowWidth / 3 - 20,
    height: 130,
    backgroundColor: '#F5F5F5',
    borderRadius: (windowWidth / 3 - 25) % 10,
    elevation: 1,
  },
  view: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 10,
    height: '100%',
  },
});

export default InfoCard;
