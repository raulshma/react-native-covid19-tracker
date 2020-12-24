import React, { useRef } from 'react';
import { Animated } from 'react-native';

export default function FadeInWrapper({
  children,
  styles,
  size = 0.9,
  delay = 0,
}: any) {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      delay,
      duration: 600,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim, delay]);
  return (
    <Animated.View
      style={[
        {
          opacity: fadeAnim.interpolate({
            inputRange: [0, 0],
            outputRange: [0, 1],
          }),
          transform: [
            {
              scale: fadeAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [size, 1],
              }),
            },
          ],
        },
        styles,
      ]}>
      {children}
    </Animated.View>
  );
}
