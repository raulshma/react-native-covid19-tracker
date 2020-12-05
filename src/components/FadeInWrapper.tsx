import React, { useRef } from 'react';
import { Animated } from 'react-native';

export default function FadeInWrapper({ children, styles, size = 0.9 }: any) {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 600,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);
  return (
    <Animated.View
      style={[
        {
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
