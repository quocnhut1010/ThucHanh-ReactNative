// lab1/bai6.tsx
import React from 'react';
import { ScrollView, Text, View } from 'react-native';

export default function Bai6() {
  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      {[...Array(20)].map((_, i) => (
        <View
          key={i}
          style={{
            backgroundColor: i % 2 === 0 ? '#f0f0f0' : '#e0e0e0',
            marginBottom: 10,
            padding: 10,
            borderRadius: 5,
          }}
        >
          <Text style={{ fontSize: 16 }}>Item {i + 1}</Text>
        </View>
      ))}
    </ScrollView>
  );
}
