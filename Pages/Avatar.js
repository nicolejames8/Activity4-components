import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-paper';

const MyComponent = () => (
  <View style={styles.container}>
    <View style={styles.section}>
      <Text style={styles.text}>Image</Text>
      <Avatar.Image size={100} source={require('../assets/doglover.jpg')} />
    </View>
    <View style={styles.section}>
      <Text style={styles.text}>Icon</Text>
      <Avatar.Icon size={100} icon="folder" />
    </View>
    <View style={styles.section}>
      <Text style={styles.text}>Text</Text>
      <Avatar.Text size={100} label="NJ" />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  section: {
    marginBottom: 20,
    alignItems: 'center',
  },
  text: {
    marginBottom: 10, // Add extra space below text
  },
});

export default MyComponent;

