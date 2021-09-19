import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { StyleSheet, Text, View } from "react-native";

export default function SettingsScreen({navigation}){
    return(
      <View style={styles.container}>
        <Text style={{fontWeight: 'bold'}}>
          Choose Your Diet:
        </Text>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      backgroundColor: '#ffffff',
    },
    paragraph: {
      margin: 24,
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#34495e',
    },
  });