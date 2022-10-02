import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
// import Textword from './src/components/text.js';
// import OneButton from './src/components/button.js';
// import Attention from './src/components/attention.js';
// import HomeScreen from './src/screens/HomeScreen.js';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Frontscreen from './src/screens/frontscreen';
import HomeScreen from './src/screens/HomeScreen';
import OneButton from './src/components/button';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Frontscreen'>
        <Stack.Screen name="Frontscreen" component={Frontscreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="OneButton" component={OneButton} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


