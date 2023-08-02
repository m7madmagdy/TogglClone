import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Text, Card, Button } from 'react-native-paper';
import { useTaskContext } from '../context/TaskContext'; // Import deleteTask

const Tasks = () => {
  const { tasks, deleteTask } = useTaskContext();

  const calculateDuration = (startTime, endTime) => {
    const diff = endTime - startTime;
    const hours = Math.floor(diff / (60 * 60 * 1000));
    const minutes = Math.floor((diff % (60 * 60 * 1000)) / (60 * 1000));
    return `${hours}h ${minutes}m`;
  };

  const handleDeleteTask = (taskId) => {
    deleteTask(taskId); // Call the deleteTask function from context
  };

  const renderItem = ({ item }) => (
    <Card style={styles.card}>
      <Card.Content>
        <Text>{item.name}</Text>
        <Text>{item.description}</Text>
        <Text>Duration: {calculateDuration(item.startTime, item.endTime)}</Text>
      </Card.Content>
      <Card.Actions>
        <Button labelStyle={styles.deleteButton} onPress={() => handleDeleteTask(item.id)}>Delete</Button>
      </Card.Actions>
    </Card>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  card: {
    marginBottom: 16,
  },
  deleteButton:{
    color: 'red'
  },
});

export default Tasks;
