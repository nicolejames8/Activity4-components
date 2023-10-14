import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { IconButton, Tooltip } from 'react-native-paper';

const MyComponent = () => (
  <View style={styles.container}>
    <Tooltip title="Selected Camera" style={styles.tooltip}>
      <IconButton icon="camera" size={24} onPress={() => {}} />
    </Tooltip>

    <Tooltip title="Selected Music" style={styles.tooltip}>
      <IconButton icon="music" size={24} onPress={() => {}} />
    </Tooltip>

    <Tooltip title="Selected Message" style={styles.tooltip}>
      <IconButton icon="message" size={24} onPress={() => {}} />
    </Tooltip>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tooltip: {
    backgroundColor: 'lightgray',
    borderRadius: 10,
    marginBottom: 20, 
  },
});

export default MyComponent;
