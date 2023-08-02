import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage
import { useNavigation } from '@react-navigation/native';

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const userDataString = await AsyncStorage.getItem('userData');
      if (userDataString) {
        const userData = JSON.parse(userDataString);
        setUserData(userData);
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('userData');
      setUserData(null);
      navigation.navigate('Login');
      console.log('Logout');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <View style={styles.container}>
       <Text>You are logged in</Text>

      {userData ? (
        <View>
          <Text style={styles.userData}>{userData.email}</Text>
          <Button onPress={handleLogout} style={styles.logoutButton} labelStyle={styles.logoutText}>
            Logout
          </Button>
        </View>
      ) : (
      <Button onPress={handleLogout} style={styles.logoutButton} labelStyle={styles.logoutText}>
           Logout
      </Button>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  userData:{
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
  },
   logoutButton: {
      marginTop: 16,
      backgroundColor: '#ff0000',
    },
  logoutText: {
    color: '#fff',
  },
});

export default Profile;
