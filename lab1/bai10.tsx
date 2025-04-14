import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, FlatList, StyleSheet, Alert, Text } from 'react-native';
import ListItem from '../components/ListItem';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#343a40',
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderColor: '#ced4da',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 16,
    backgroundColor: 'white',
    marginRight: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  addButton: {
    backgroundColor: '#007bff',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  list: {
    marginTop: 10,
  },
  emptyListText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#6c757d',
    marginTop: 20,
  },
});

export default function Bai10() {
  const [itemText, setItemText] = useState('');
  const [items, setItems] = useState<string[]>([]);

  const addItem = () => {
    if (itemText.trim() === '') {
      Alert.alert('Không được để trống!');
      return;
    }

    setItems([...items, itemText]);
    setItemText('');
  };

  const deleteItem = (indexToDelete: number) => {
    setItems(items.filter((_, index) => index !== indexToDelete));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Danh sách công việc</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Nhập công việc mới"
          value={itemText}
          onChangeText={setItemText}
          style={styles.input}
        />
        <TouchableOpacity style={styles.addButton} onPress={addItem}>
          <Text style={styles.addButtonTitle}>Thêm</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={items}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <ListItem title={item} onDelete={() => deleteItem(index)} />
        )}
        style={styles.list}
        ListEmptyComponent={() => (
          <Text style={styles.emptyListText}>Danh sách công việc trống.</Text>
        )}
      />
    </View>
  );
}