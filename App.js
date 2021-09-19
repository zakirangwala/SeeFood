import { StatusBar } from 'expo-status-bar';
import React, {useState,useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
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
let barcode = "";

function ScannerScreen({navigation}){
  //camera permissions
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  //check permsissions
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type} onBarCodeScanned={(obj) => {
        navigation.navigate('Results',{barcode: obj["data"]});
      }}>
      </Camera>
{/* 
      <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              //picture = await Camera
              

            }}>
             <Entypo name="circle" size={72} color="white" />
          </TouchableOpacity>
        </View>
         */}
    </View>
  );
}

function ResultsScreen({route,navigation}){
  const { barcode } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{barcode}</Text>
    </View>
  );
}

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  camera: {
    width: '100%',
    height: '70%',
  },
  buttonContainer:{
    marginTop: 40,
  },
  button:{},
  text:{}
});
