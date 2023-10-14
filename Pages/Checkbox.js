import * as React from 'react';
import { View, Text } from 'react-native';
import { Checkbox } from 'react-native-paper';

const MyComponent = () => {
  const [carChecked, setcarChecked] = React.useState(false);
  const [MotorcycleChecked, setMotorcycleChecked] = React.useState(false);
  const [tricycleChecked, settricycleChecked] = React.useState(false);

  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <View>
      <Text style={{marginBottom: 20}}>Choose your preferences:</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Checkbox
          status={carChecked ? 'checked' : 'unchecked'}
          onPress={() => {
            setcarChecked(!carChecked);
          }}
        />
        <Text>Car</Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Checkbox
          status={MotorcycleChecked ? 'checked' : 'unchecked'}
          onPress={() => {
            setMotorcycleChecked(!MotorcycleChecked);
          }}
        />
        <Text>Motorcycle</Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Checkbox
          status={tricycleChecked ? 'checked' : 'unchecked'}
          onPress={() => {
            settricycleChecked(!tricycleChecked);
          }}
        />
        <Text>Tricycle</Text>
      </View>
    </View>
    </View>
  );
};

export default MyComponent;
