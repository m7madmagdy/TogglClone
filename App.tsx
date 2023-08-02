import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Linking } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage
import Login from './screens/Login';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CreateTask from './screens/CreateTask';
import Tasks from './screens/Tasks';
import { TaskProvider } from './context/TaskContext';

const Stack = createStackNavigator();
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

function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  useEffect(() => {
    checkStoredUserData();
  }, []);

  const checkStoredUserData = async () => {
    try {
      const userDataString = await AsyncStorage.getItem('userData');
      if (userDataString !== null) {
        setUserLoggedIn(true);
      } else {
        setUserLoggedIn(false);
      }
    } catch (error) {
      console.error('Error retrieving user data:', error);
    }
  };

  return (
    <PaperProvider theme={theme}>
        <TaskProvider>
          <NavigationContainer>
            <Stack.Navigator>
              { userLoggedIn ? (
                <Stack.Screen
                  name="MainScreen"
                  component={MainScreen}
                  options={{ headerShown: false }}
                />
              ) : (
              <>
                <Stack.Screen
                  name="Login"
                  component={Login}
                  options={{ headerShown: false }}
                />
                 <Stack.Screen
                  name="MainScreen"
                  component={MainScreen}
                  options={{ headerShown: false }}
                />
              </>
             )}
            </Stack.Navigator>
          </NavigationContainer>
        </TaskProvider>
    </PaperProvider>
  );
}

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#1E90FF',
    accent: '#f1c40f',
  },
};

export default App;
