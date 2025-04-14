import React from 'react';
import { View, Text, Button, Alert, TouchableOpacity } from 'react-native';

export default function Bai2({ navigation }: any) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 40 }}>
      <TouchableOpacity onPress={() => Alert.alert("Hello!")}>
        <Text style={{
          padding: 10,
          backgroundColor: 'lightblue',
          borderRadius: 5,
          textAlign: 'center'
        }}>
          CustomButton
        </Text>
      </TouchableOpacity>

      <View style={{ marginTop: 20 }}>
        <Button title='Press Me' onPress={() => Alert.alert("Hello!")}/>
      </View>

      <Text style={{ marginTop: 20 }}>Bai2</Text>
    </View>
  );
}
