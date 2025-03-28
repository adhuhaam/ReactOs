import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../services/api';

const ProfileScreen = () => {
  const [employee, setEmployee] = useState(null);
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProfileData = async () => {
    try {
      const username = await AsyncStorage.getItem('username');

      const empResponse = await api.get(`employee.php?username=${username}`);
      const docResponse = await api.get(`documents.php?username=${username}`);

      setEmployee(empResponse.data);
      setDocuments(docResponse.data || []);
    } catch (error) {
      console.error('Error loading profile:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfileData();
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#006bad" />
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Profile</Text>

      {employee && (
        <View style={styles.card}>
          <Text style={styles.label}>Name:</Text>
          <Text style={styles.value}>{employee.name}</Text>

          <Text style={styles.label}>Designation:</Text>
          <Text style={styles.value}>{employee.designation}</Text>

          <Text style={styles.label}>Permanent Address:</Text>
          <Text style={styles.value}>{employee.address}</Text>
        </View>
      )}

      <Text style={styles.header}>Documents</Text>
      {documents.map((doc, index) => (
        <View key={index} style={styles.docCard}>
          <Text style={styles.docTitle}>{doc.doc_type}</Text>
          {doc.file_name && (
            <Image
              source={{ uri: `https://hros.rccmaldives.com/assets/document/${doc.file_name}` }}
              style={styles.image}
            />
          )}
        </View>
      ))}
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f1f5f9',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#006bad',
    marginVertical: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    elevation: 2,
  },
  label: {
    fontWeight: 'bold',
    marginTop: 5,
  },
  value: {
    marginBottom: 8,
  },
  docCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    alignItems: 'center',
    elevation: 2,
  },
  docTitle: {
    fontWeight: 'bold',
    marginBottom: 8,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    resizeMode: 'contain',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
