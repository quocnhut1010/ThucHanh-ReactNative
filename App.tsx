import React, { useState } from 'react';
import { NavigationContainer, DrawerActions, useNavigation, ParamListBase } from '@react-navigation/native'; // Import ParamListBase
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack'; // Import NativeStackNavigationProp
import { View, Button, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

// --- Import Lab Components ---
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
import CaculatorApp from './lab2/caculator-app';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

// --- Lab Screen Definitions ---
// Define screen configurations for easier management
interface LabScreen {
  name: string;
  component: React.ComponentType<any>;
  title?: string; // Optional custom title
}

const lab1Screens: LabScreen[] = [
  { name: 'Bai1', component: Bai1 },
  { name: 'Bai2', component: Bai2 },
  { name: 'Bai3', component: Bai3 },
  { name: 'Bai4', component: Bai4 },
  { name: 'Bai5', component: Bai5 },
  { name: 'Bai6', component: Bai6 },
  { name: 'Bai7', component: Bai7 },
  { name: 'Bai8', component: Bai8 },
  { name: 'Bai9', component: Bai9 },
  { name: 'Bai10', component: Bai10 },
];

const lab2Screens: LabScreen[] = [
  { name: 'CaculatorApp', component: CaculatorApp, title: 'Calculator' },
];

// --- Reusable Accordion Section Component for HomeScreen ---
interface AccordionSectionProps {
  title: string;
  screens: LabScreen[];
  navigation: NativeStackNavigationProp<ParamListBase>; // Correct navigation type
}

function AccordionSection({ title, screens, navigation }: AccordionSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <View style={styles.accordionContainer}>
      {/* Header to toggle expansion */}
      <TouchableOpacity
        style={styles.accordionHeader}
        onPress={() => setIsExpanded(!isExpanded)}
      >
        <Text style={styles.accordionTitle}>{title}</Text>
        <Text style={styles.accordionIcon}>{isExpanded ? '-' : '+'}</Text>
      </TouchableOpacity>

      {/* Conditionally render the list of screen links */}
      {isExpanded && (
        <View style={styles.accordionContent}>
          {screens.map((screen) => (
            <TouchableOpacity
              key={screen.name}
              style={styles.accordionItem}
              onPress={() => navigation.navigate(screen.name)} // Navigate to the specific screen
            >
              <Text style={styles.accordionItemText}>{screen.title || screen.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
}


// --- Home Screen Component (Modified with Accordion) ---
function HomeScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>(); // Use correct type

  return (
    <ScrollView contentContainerStyle={styles.homeContainer}>
      <Text style={styles.homeTitle}>THỰC HÀNH REACT NATIVE</Text>

      {/* Accordion Section for LAB 1 */}
      <AccordionSection title="LAB 1" screens={lab1Screens} navigation={navigation} />

      {/* Accordion Section for LAB 2 */}
      <AccordionSection title="LAB 2" screens={lab2Screens} navigation={navigation} />

      {/* Add more AccordionSections for other LABs here */}

    </ScrollView>
  );
}

// --- Stack Navigator Wrapper ---
// Wraps each lab screen in a Stack Navigator with header and drawer button
function createLabStack(title: string, Component: React.ComponentType<any>) {
  const ScreenComponent = () => (
    <Stack.Navigator>
      <Stack.Screen
        name={title + "_Stack"} // Unique name for the stack screen
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
  return ScreenComponent;
}

// --- Custom Drawer Content Component (Remains the same) ---
function CustomDrawerContent(props: any) {
  const [isLab1Expanded, setIsLab1Expanded] = useState(false);
  const [isLab2Expanded, setIsLab2Expanded] = useState(false);

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label="Home"
        onPress={() => props.navigation.navigate('Home')}
        labelStyle={styles.drawerLabel}
      />
      {/* LAB 1 Section */}
      <TouchableOpacity
        style={styles.labHeader}
        onPress={() => setIsLab1Expanded(!isLab1Expanded)}
      >
        <Text style={styles.drawerLabel}>LAB 1</Text>
        <Text style={styles.drawerLabel}>{isLab1Expanded ? '-' : '+'}</Text>
      </TouchableOpacity>
      {isLab1Expanded && (
        <View style={styles.labItemsContainer}>
          {lab1Screens.map((screen) => (
            <DrawerItem
              key={screen.name}
              label={screen.name}
              onPress={() => props.navigation.navigate(screen.name)}
              labelStyle={styles.drawerLabel}
              style={styles.drawerSubItem}
            />
          ))}
        </View>
      )}
      {/* LAB 2 Section */}
      <TouchableOpacity
        style={[styles.labHeader, styles.lab2Header]}
        onPress={() => setIsLab2Expanded(!isLab2Expanded)}
      >
        <Text style={styles.drawerLabel}>LAB 2</Text>
        <Text style={styles.drawerLabel}>{isLab2Expanded ? '-' : '+'}</Text>
      </TouchableOpacity>
      {isLab2Expanded && (
         <View style={styles.labItemsContainer}>
          {lab2Screens.map((screen) => (
            <DrawerItem
              key={screen.name}
              label={screen.title || screen.name}
              onPress={() => props.navigation.navigate(screen.name)}
              labelStyle={styles.drawerLabel}
              style={styles.drawerSubItem}
            />
          ))}
        </View>
      )}
    </DrawerContentScrollView>
  );
}

// --- Main App Component (Navigator setup remains mostly the same) ---
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          headerShown: false, // Default hide header for drawer screens
        }}
      >
         <Drawer.Screen
            name="Home"
            component={HomeScreen}
            options={{
                headerShown: true, // Show header specifically for Home
                title: 'Home',
                headerLeft: ({}) => { // Add drawer toggle button to Home header
                    const navigation = useNavigation();
                    return <Button title="☰" onPress={() => navigation.dispatch(DrawerActions.openDrawer())} />;
                }
            }}
         />
        {/* Register Lab 1 screens */}
        {lab1Screens.map((screen) => (
          <Drawer.Screen
            key={screen.name}
            name={screen.name}
            component={createLabStack(screen.name, screen.component)}
          />
        ))}
        {/* Register Lab 2 screens */}
        {lab2Screens.map((screen) => (
           <Drawer.Screen
            key={screen.name}
            name={screen.name}
            component={createLabStack(screen.title || screen.name, screen.component)}
          />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

// --- Styles ---
const styles = StyleSheet.create({
  homeContainer: {
    flexGrow: 1,
    alignItems: 'center',
    paddingTop: 20, // Adjusted padding
    paddingHorizontal: 15, // Adjusted padding
    paddingBottom: 30,
  },
  homeTitle: {
    fontSize: 20,
    textAlign: 'center',
    color: 'red',
    marginBottom: 25,
    fontWeight: 'bold',
  },
  // Styles for Accordion on Home Screen
  accordionContainer: {
    width: '100%',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    backgroundColor: '#fff', // White background for the accordion section
  },
  accordionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 15,
    backgroundColor: '#f7f7f7', // Light grey background for header
    borderTopLeftRadius: 5, // Rounded corners for the top
    borderTopRightRadius: 5,
    borderBottomWidth: 1, // Separator line
    borderBottomColor: '#ddd',
  },
  accordionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  accordionIcon: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#555',
  },
  accordionContent: {
    paddingHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 5,
  },
  accordionItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  accordionItemText: {
    fontSize: 15,
    color: '#007bff', // Blue color for links
  },
  // Styles for Drawer (remain mostly the same)
  labHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  lab2Header: {
      marginTop: 10,
  },
  labItemsContainer: {},
  drawerLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  drawerSubItem: {
    marginLeft: 20,
  },
});
