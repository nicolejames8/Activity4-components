import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { DataTable, Text } from 'react-native-paper';

const MyComponent = () => {
  return (
    <View style={styles.container}>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Name</DataTable.Title>
          <DataTable.Title>Email</DataTable.Title>
          <DataTable.Title>Age</DataTable.Title>
        </DataTable.Header>

        <DataTable.Row>
          <DataTable.Cell>Loid Forger</DataTable.Cell>
          <DataTable.Cell>Loid_Forger@email.com</DataTable.Cell>
          <DataTable.Cell numeric>26</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>Anya Forger</DataTable.Cell>
          <DataTable.Cell>Anya.Forger@email.com</DataTable.Cell>
          <DataTable.Cell numeric>7</DataTable.Cell>
        </DataTable.Row>
      </DataTable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default MyComponent;
