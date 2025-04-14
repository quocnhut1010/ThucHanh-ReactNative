import React from 'react';
import { NavigationContainer, DrawerActions, useNavigation } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Button, Text } from 'react-native';

import Bai1 from './lab1/bai1';
import Bai2 from './lab1/bai2';
import Bai3 from './lab1/bai3';
import Bai4 from './lab1/bai4';
import Bai5 from './lab1/bai5';
import Bai6 from './lab1/bai6';
import Bai7 from './lab1/bai7';
import Bai8 from './lab1/bai8';
import Bai9 from './lab1/bai9';
import Bai10 from './lab1/bai10';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function HomeScreen() {
  const navigation = useNavigation();

  return (
    
    <View style={{ flex: 1, alignItems: 'center', paddingTop: 20, paddingLeft: 20, paddingRight: 20 }}>
  <Text style={{ fontSize: 18, textAlign: 'center', color: 'red', marginBottom: 20, width: '100%' }}>THỰC HÀNH REACT NATIVE</Text>
  <View style={{ alignItems: 'flex-start', width: '100%' }}>
    <Button title="☰ LAB1" onPress={() => navigation.dispatch(DrawerActions.openDrawer())} />
  </View>
</View>
  );
}

function createLabStack(title: string, Component: React.ComponentType<any>) {
  return () => (
    <Stack.Navigator>
      <Stack.Screen
        name={title}
        component={Component}
        options={({ navigation }) => ({
          title: title.toUpperCase(),
          headerLeft: () => (
            <Button title="☰" onPress={() => navigation.dispatch(DrawerActions.openDrawer())} />
          ),
        })}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Bai1" children={createLabStack('Bai1', Bai1)} />
        <Drawer.Screen name="Bai2" children={createLabStack('Bai2', Bai2)} />
        <Drawer.Screen name="Bai3" children={createLabStack('Bai3', Bai3)} />
        <Drawer.Screen name="Bai4" children={createLabStack('Bai4', Bai4)} />
        <Drawer.Screen name="Bai5" children={createLabStack('Bai5', Bai5)} />
        <Drawer.Screen name="Bai6" children={createLabStack('Bai6', Bai6)} />
        <Drawer.Screen name="Bai7" children={createLabStack('Bai7', Bai7)} />
        <Drawer.Screen name="Bai8" children={createLabStack('Bai8', Bai8)} />
        <Drawer.Screen name="Bai9" children={createLabStack('Bai9', Bai9)} />
        <Drawer.Screen name="Bai10" children={createLabStack('Bai10', Bai10)} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
