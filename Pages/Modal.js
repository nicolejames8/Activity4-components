import React, { useState } from 'react';
import { Modal, Portal, Text, Button, Provider, Title, Paragraph } from 'react-native-paper';

const MyComponent = () => {
  const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = { backgroundColor: 'white', padding: 20 };

  return (
    <Provider>
      <Portal>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
          <Title style={{ marginBottom: 10}}>Welcome Adventurer!</Title>
          <Paragraph>
            
            SASAGEYOOOOOOOOOOOO
          </Paragraph>
          <Button style={{ marginTop: 20 }} onPress={hideModal}>
            Close
          </Button>
        </Modal>
      </Portal>
      <Button style={{ marginTop: 30 }} onPress={showModal}>
        Show Modal
      </Button>
    </Provider>
  );
};

export default MyComponent;
