import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Switch } from 'react-native-paper';

const MyComponent = () => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  return (
    <View style={styles.container}>
      <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MyComponent;
