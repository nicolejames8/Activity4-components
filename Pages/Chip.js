import * as React from 'react';
import { Chip } from 'react-native-paper';

const MyComponent = () => (
  <Chip icon="information"  onPress={() => console.log('Pressed')}>Suggestions</Chip>
);

export default MyComponent;