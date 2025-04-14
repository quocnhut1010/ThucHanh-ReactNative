// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Button, ScrollView } from 'react-native';

// Import 10 screens
import bai1 from './lab1/bai1';
import bai2 from './lab1/bai2';
import bai3 from './lab1/bai3';
import bai4 from './lab1/bai4';
import bai5 from './lab1/bai5';
import bai6 from './lab1/bai6';
import bai7 from './lab1/bai7';
import bai8 from './lab1/bai8';
import bai9 from './lab1/bai9';
import bai10 from './lab1/bai10';


const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }: any) {
  const screens = [
    'bai1','bai2','bai3','bai4','bai5','bai6','bai7','bai8','bai9','bai10',
  ];

  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      {screens.map((lab1, index) => (
        <View key={index} style={{ marginVertical: 10 }}>
          <Button title={`Go to ${lab1}`} onPress={() => navigation.navigate(lab1)} />
        </View>
      ))}
    </ScrollView>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="bai1" component={bai1} />
        <Stack.Screen name="bai2" component={bai2} />
        <Stack.Screen name="bai3" component={bai3} />
        <Stack.Screen name="bai4" component={bai4} />
        <Stack.Screen name="bai5" component={bai5} />
        <Stack.Screen name="bai6" component={bai6} />
        <Stack.Screen name="bai7" component={bai7} />
        <Stack.Screen name="bai8" component={bai8} />
        <Stack.Screen name="bai9" component={bai9} />
        <Stack.Screen name="bai10" component={bai10} />
        {/* <Stack.Screen name="Screen3" component={Screen3} />
        <Stack.Screen name="Screen4" component={Screen4} />
        <Stack.Screen name="Screen5" component={Screen5} />
        <Stack.Screen name="Screen6" component={Screen6} />
        <Stack.Screen name="Screen7" component={Screen7} />
        <Stack.Screen name="Screen8" component={Screen8} />
        <Stack.Screen name="Screen9" component={Screen9} />
        <Stack.Screen name="Screen10" component={Screen10} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
