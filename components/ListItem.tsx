// components/ListItem.tsx
import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons'; 

type Props = {
  title: string;
  onDelete: () => void;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    borderBottomColor: '#e0e0e0',
    borderBottomWidth: 1,
    borderRadius: 8,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  text: {
    fontSize: 18,
    color: '#333',
    flex: 1, 
  },
  deleteButton: {
    marginLeft: 15,
    padding: 8,
    borderRadius: 5,
    backgroundColor: '#ff6b6b', 
  },
  deleteIcon: {
    color: '#fff', 
  },
});

export default function ListItem({ title, onDelete }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>+ {title}</Text>
      <TouchableOpacity style={styles.deleteButton} onPress={onDelete}>
        <Feather name="trash-2" size={20} color={styles.deleteIcon.color} />
      </TouchableOpacity>
    </View>
  );
}