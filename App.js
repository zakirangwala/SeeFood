import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
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

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
