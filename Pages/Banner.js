import * as React from 'react';
import { Banner } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome'; // Replace 'FontAwesome' with the icon library of your choice

const MyComponent = () => {
  const [visible, setVisible] = React.useState(true);

  return (
    <Banner
      visible={visible}
      actions={[
        {
          label: 'Fix it',
          onPress: () => setVisible(false),
        },
        {
          label: 'Learn more',
          onPress: () => setVisible(false),
        },
      ]}
      icon={({ size }) => (
        <Icon name="exclamation-circle" size={size} color="red" /> 
      )}
    >
      There was a problem processing a transaction on your credit card.
    </Banner>
  );
};

export default MyComponent;
