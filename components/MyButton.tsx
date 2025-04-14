// components/MyButton.tsx
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle } from 'react-native';

type MyButtonProps = {
  text: string;
  onPress: () => void;
  style?: ViewStyle;
};

const MyButton = ({ text, onPress, style }: MyButtonProps) => (
  <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
    <Text style={styles.text}>{text}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    padding: 10,
    backgroundColor: 'orange',
    borderRadius: 5,
  },
  text: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default MyButton;
