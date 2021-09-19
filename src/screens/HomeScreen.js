import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen(){
    return(
        <View style={styles.container}>
        <Text style={styles.paragraph}>
          Hello, world!
        </Text>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#ecf0f1',
    },
    paragraph: {
      margin: 24,
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#34495e',
    },
  });