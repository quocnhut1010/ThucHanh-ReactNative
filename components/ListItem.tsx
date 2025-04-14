// components/ListItem.tsx
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

type Props = {
  title: string;
};

export default function ListItem({ title }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>• {title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  text: {
    fontSize: 16,
  },
});
