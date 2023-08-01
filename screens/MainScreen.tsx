import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TextInput, Button, Text } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CreateTask from './CreateTask';
import Tasks from './Tasks';

const Tab = createBottomTabNavigator();

function MainScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Create Task"
        component={CreateTask}
      />
      <Tab.Screen
        name="Tasks"
        component={Tasks}
      />
    </Tab.Navigator>
  );
}

export default MainScreen;
