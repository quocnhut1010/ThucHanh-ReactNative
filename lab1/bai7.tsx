import React, { useState } from 'react';
import { Text, TextInput, View, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 40,
    backgroundColor: '#f0f0f0',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 12,
    marginBottom: 20,
    fontSize: 16,
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: '#007bff',
    borderRadius: 5,
    paddingVertical: 10,
    alignItems: 'center',
  },
  buttonTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default () => {
  const [name, setName] = useState('');

  const handleSubmit = () => {
    if (name.trim() === '') {
          Alert.alert('Không được để trống tên!!!');
          return;
        }
    // Clear the input field
    setName('');

    // Get current time
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    let greeting = '';

    // Determine greeting based on time
    if (currentHour >= 5 && currentHour < 12) {
      greeting = 'Good morning';
    } else if (currentHour >= 12 && currentHour < 18) {
      greeting = 'Good afternoon';
    } else if (currentHour >= 18 && currentHour < 22) {
      greeting = 'Good evening';
    } else {
      greeting = 'Good night';
    }

    // Show alert with greeting and name
    Alert.alert(`${greeting}, ${name}!`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>What is your name?</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        style={styles.input}
        placeholder="Enter name"
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonTitle}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};