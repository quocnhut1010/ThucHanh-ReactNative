
import React from 'react';
import { View, Alert } from 'react-native';
import MyButton from '../components/MyButton';

export default function Bai3() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <MyButton
        text="Click Here"
        onPress={() => Alert.alert('Pressed!')}
        style={{ backgroundColor: 'orange', padding: 12 }}
      />
    </View>
  );
}
