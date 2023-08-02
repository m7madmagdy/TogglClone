import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TextInput, Button, Text } from 'react-native-paper';
import CreateTask from './CreateTask';
import Tasks from './Tasks';
import Profile from './Profile';
import { Icon } from '@rneui/base';

const Tab = createBottomTabNavigator();

function MainScreen() {
  return (
    <Tab.Navigator
    initialRouteName="Create Task"
    >
      <Tab.Screen
        name="Tasks"
        component={Tasks}
          options={{
                  tabBarIcon: ({ color, size }) => (
                    <Icon name="list" color={color} size={size} />
                  ),
                }}
      />
         <Tab.Screen
              name="Create Task"
              component={CreateTask}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Icon name="add" color={color} size={size} />
                ),
              }}
            />
          <Tab.Screen
              name="Profile"
              component={Profile}
                options={{
                        tabBarIcon: ({ color, size }) => (
                          <Icon name="person" color={color} size={size} />
                        ),
                      }}
            />
    </Tab.Navigator>
  );
}

export default MainScreen;
