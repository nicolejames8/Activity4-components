import * as React from 'react';
import { View } from 'react-native';
import { Divider, Text } from 'react-native-paper';

const MyComponent = () => (
  <View>
    <Text style={{padding: 10}}>Greed</Text>
    <Divider />
    <Text style={{padding: 10}}>Pride</Text>
    <Divider />
    <Text style={{padding: 10}}>Lust</Text>
    <Divider />
    <Text style={{padding: 10}}>Sloth</Text>
    <Divider />
    <Text style={{padding: 10}}>Envy</Text>
    <Divider />
  </View>
);

export default MyComponent;