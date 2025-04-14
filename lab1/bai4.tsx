// lab1/bai4.tsx
import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

export default function Bai4() {
  const [count, setCount] = useState(0);

  return (
    <View style={{ padding: 40 }}>
      <Text>You clicked {count} times</Text>
      <Button title="Click me" onPress={() => setCount(count + 1)} />
      <Button title="Reset" onPress={() => setCount(0)} />
    </View>
  );
}
