import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { RadioButton, Text } from 'react-native-paper';

const MyComponent = () => {
  const [checked, setChecked] = React.useState('first');

  return (
    <View style={styles.container}>
      <Text style={{marginBottom: 20}}>Do I love her: </Text>
      <View style={styles.radioGroup}>
        <View style={styles.radioOption}>
          <RadioButton
            value="yes"
            status={checked === 'yes' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('yes')}
          />
          <Text>Yes</Text>
        </View>

        <View style={styles.radioOption}>
          <RadioButton
            value="no"
            status={checked === 'no' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('no')}
          />
          <Text>No</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioGroup: {
    flexDirection: 'column',
  },
  radioOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
});

export default MyComponent;
