//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScannerScreen from './src/screens/ScannerScreen';
import ResultsScreen from './src/screens/ResultsScreen';

//import { Entypo } from '@expo/vector-icons';
//import firebase from 'firebase/app';

//firebase services
//import "firebase/auth";
//import "firebase/database";
// import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

// const firebaseConfig = {
//   apiKey: 'api-key',
//   authDomain: 'seefood-3cd7b.firebaseapp.com',
//   databaseURL: 'https://project-id.firebaseio.com',
//   projectId: 'seefood-3cd7b',
//   storageBucket: 'seefood-3cd7b.appspot.com',
//   messagingSenderId: 'sender-id',
//   appId: 'app-id',
//   measurementId: 'G-measurement-id',
// };

//firebase.initializeApp(firebaseConfig);

const Stack = createNativeStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Scanner">
        <Stack.Screen name="Scanner" component={ScannerScreen} />
        <Stack.Screen name="Results" component={ResultsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


