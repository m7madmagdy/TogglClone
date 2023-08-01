import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';

const Tasks = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tasks List Screen</Text>
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

export default Tasks;
