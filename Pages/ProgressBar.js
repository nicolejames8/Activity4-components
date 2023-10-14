import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { ProgressBar, MD3Colors } from 'react-native-paper';

const MyComponent = () => (
  <View style={styles.container}>
    <ProgressBar progress={0.5} color={MD3Colors.error50} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MyComponent;
