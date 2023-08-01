import React, { useState } from 'react';
import { View, StyleSheet, Linking } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import { NavigationContainer } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage
import { useNavigation } from '@react-navigation/native';
import MainScreen from './screens/MainScreen';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailValid, setEmailValid] = useState(false);
  const [isPasswordValid, setPasswordValid] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // Add state for password visibility
  const navigation = useNavigation();

  const handleEmailChange = (text: string) => {
    setEmail(text);
    setEmailValid(validateEmail(text));
  };

  const handlePasswordChange = (text: string) => {
    setPassword(text);
    setPasswordValid(text.length >= 8);
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

    const handleLoginPress = async () => {
     try {
       const userData = {
         email,
         password,
       };
       await AsyncStorage.setItem('userData', JSON.stringify(userData));
     } catch (error) {
       console.error('Error saving user data:', error);
     }

     navigation.navigate('MainScreen');
   };

  const handleForgotPasswordPress = () => {
    Linking.openURL('https://toggl.com/track/forgot-password/');
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Login</Text>
      <TextInput
        label="Email"
        value={email}
        onChangeText={handleEmailChange}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCompleteType="email"
        style={styles.input}
      />
      <TextInput
        label="Password"
        value={password}
        onChangeText={handlePasswordChange}
        secureTextEntry={!showPassword} // Use secureTextEntry prop with showPassword state
        autoCapitalize="none"
        autoCompleteType="password"
        style={styles.input}
      />
      <Button onPress={togglePasswordVisibility}>
        {showPassword ? 'Hide Password' : 'Show Password'}
      </Button>
      <Button
        mode="contained"
        onPress={handleLoginPress}
        disabled={!isEmailValid || !isPasswordValid}
        style={styles.loginButton}>
        Login
      </Button>
      <Button onPress={handleForgotPasswordPress}>Forgot Password</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    marginBottom: 16,
  },
  loginButton: {
    margin: 10,
  },
});

export default Login;
