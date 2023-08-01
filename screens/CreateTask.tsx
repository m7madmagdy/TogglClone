import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';

const CreateTask = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Create Task Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text:{
    fontSize: 20,
    fontWeight: 'bold',
  }
});

export default CreateTask;
