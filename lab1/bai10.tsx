// lab1/bai10.tsx
import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, StyleSheet, Alert } from 'react-native';
import ListItem from '../components/ListItem';

export default function Bai10() {
  const [itemText, setItemText] = useState('');
  const [items, setItems] = useState<string[]>([]);

  const addItem = () => {
    if (itemText.trim() === '') {
      Alert.alert('Không được để trống!!!!!');
      return;
    }

    setItems([...items, itemText]);
    setItemText('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter item"
        value={itemText}
        onChangeText={setItemText}
        style={styles.input}
      />
      <Button title="Add Item" onPress={addItem} />

      <FlatList
        data={items}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <ListItem title={item} />}
        style={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  input: {
    borderColor: '#888',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    height: 40,
  },
  list: {
    marginTop: 20,
  },
});
