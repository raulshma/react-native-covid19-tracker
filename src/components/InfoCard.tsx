import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, IconButton } from 'react-native-paper';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

interface Props {
  icon: string;
  number: string | number;
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
    <Card style={styles.card}>
      <View style={styles.view}>
        <IconButton
          icon={icon}
          size={26}
          color={color}
          onPress={() => console.log('settings pressed')}
        />
        <Text style={{ color, fontFamily: 'Montserrat-Bold', fontSize: 18 }}>
          {number}
        </Text>
        <Text style={{ color, fontFamily: 'Montserrat-Medium', fontSize: 12 }}>
          {type}
        </Text>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    width: windowWidth / 3 - 25,
    height: 130,
    backgroundColor: '#F5F5F5',
  },
  view: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
  },
});

export default InfoCard;
