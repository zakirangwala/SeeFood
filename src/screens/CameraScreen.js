import React from 'react';
import ScannerScreen from './ScannerScreen';
import ResultsScreen from './ResultsScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function CameraScreen(){
    return(
        <Stack.Navigator initialRouteName="Scanner" 
        screenOptions={{
            headerShown: false
          }}
          >
            <Stack.Screen name="Camera" component={ScannerScreen} />
            <Stack.Screen name="Results" component={ResultsScreen} />
        </Stack.Navigator> 
    );
}