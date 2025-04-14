import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Alert} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop:100,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  countText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#007bff',
    marginBottom: 40,
  },
  buttonsContainer: {
    flexDirection: 'row', 
    width: '80%',
    justifyContent: 'space-around', 
  },
  clickButton: {
    backgroundColor: '#28a745',
    borderRadius: 10,
  },
  resetButton: {
    backgroundColor: '#dc3545',
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default function Bai4() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.countText}>You clicked {count} times</Text>
      <View style={styles.buttonsContainer}>
        <Button
          title="Click me"
          onPress={() => setCount(count + 1)}
          color={styles.clickButton.backgroundColor}
        />
        <Button
          title="Reset"
          onPress={() => setCount(0)}
          color={styles.resetButton.backgroundColor}
        />
      </View>
    </View>
  );
}