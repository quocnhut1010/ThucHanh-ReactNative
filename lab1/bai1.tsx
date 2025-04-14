import React from 'react';
import { View, Text, Button } from 'react-native';

export default function bai1({ navigation }: any) {
  return (
    <View style={{ flex: 1, flexDirection: 'column' }}>
      
      <View style={{ flex: 0.3, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center' }}>
      </View> 
      <Text style={{ fontSize: 30, color: 'black', textAlign:'center' }}>Bai 1 Hello React Native</Text>
      <View style={{ flex: 0.3, backgroundColor: 'blue' }} />
    </View>
  );
}
