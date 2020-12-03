import React from 'react';
import { StyleSheet, Text, ToastAndroid, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Card } from 'react-native-paper';

function commingSoon() {
  ToastAndroid.showWithGravity(
    'Comming Soon',
    ToastAndroid.SHORT,
    ToastAndroid.BOTTOM,
  );
}
export default function BannerCard() {
  return (
    <TouchableOpacity onPress={commingSoon} activeOpacity={1}>
      <View style={styles.view}>
        <Card style={styles.card}>
          <Card.Content>
            <View style={styles.content}>
              <Text style={[styles.text, styles.heading]}>
                Take the Self Checkup!
              </Text>
              <Text style={styles.text}>
                Contains several checklist question to check your physical
                condition.
              </Text>
            </View>
          </Card.Content>
        </Card>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  view: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    marginHorizontal: 20,
    backgroundColor: '#FF4B63',
    minHeight: 100,
    borderRadius: 15,
    elevation: 5,
  },
  content: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: 10,
  },
  heading: {
    fontSize: 20,
    fontFamily: 'Montserrat-Bold',
    textAlign: 'right',
  },
  text: {
    fontFamily: 'Montserrat-Medium',
    color: 'white',
  },
});
