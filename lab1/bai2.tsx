import React from 'react';
import { View, Text, Button, Alert, TouchableOpacity, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    backgroundColor: '#fff',
  },
  customButton: {
    padding: 15,
    backgroundColor: '#ffc107', // Màu vàng cam
    borderRadius: 20,
    textAlign: 'center',
    elevation: 3,
  },
  customButtonText: {
    color: '#333',
    fontSize: 16,
    fontWeight: 'bold',
  },
  defaultButtonContainer: {
    marginTop: 30,
    width: '60%',
  },
  bai2Text: {
    marginTop: 40,
    fontSize: 32,
    fontWeight: 'bold',
    color: '#dc3545', // Màu đỏ
  },
  emoji: {
    fontSize: 40,
    marginBottom: 20,
  },
});

export default function Bai2({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>👋</Text>
      <TouchableOpacity onPress={() => Alert.alert("Hello!")}>
        <Text style={styles.customButton}>
          <Text style={styles.customButtonText}>Nhấn nút này</Text>
        </Text>
      </TouchableOpacity>

      <View style={styles.defaultButtonContainer}>
        <Button title='Press Me' onPress={() => Alert.alert("Hi there!")} color="#008000" /> 
      </View>

      <Text style={styles.bai2Text}>Bài 2</Text>
    </View>
  );
}