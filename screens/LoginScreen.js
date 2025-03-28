import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../services/api';

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await api.post('auth/login.php', {
        username,
        password,
      });

      if (response.data.message === 'Login successful') {
        await AsyncStorage.setItem('token', response.data.token);
        await AsyncStorage.setItem('username', response.data.user.username);
        navigation.navigate('Dashboard');
      } else {
        Alert.alert('Login Failed', response.data.message || 'Invalid credentials');
      }
    } catch (err) {
      console.error(err);
      Alert.alert('Error', 'Something went wrong');
    }
  };

  return (
    <View className="flex-1 bg-white justify-center px-6">
      <Text className="text-3xl font-bold text-center text-blue-700 mb-8">HROS Login</Text>

      <Text className="text-gray-700 mb-1">Username</Text>
      <TextInput
        value={username}
        onChangeText={setUsername}
        className="border border-gray-300 rounded-lg px-4 py-2 mb-4"
        placeholder="Enter your username"
      />

      <Text className="text-gray-700 mb-1">Password</Text>
      <TextInput
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        className="border border-gray-300 rounded-lg px-4 py-2 mb-6"
        placeholder="Enter your password"
      />

      <Pressable
        onPress={handleLogin}
        className="bg-blue-600 rounded-lg py-3 items-center"
      >
        <Text className="text-white font-semibold text-lg">Login</Text>
      </Pressable>
    </View>
  );
}
