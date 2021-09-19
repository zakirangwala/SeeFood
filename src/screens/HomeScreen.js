import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { StatusBar } from 'expo-status-bar';
import vegan from '../../assets/vegan.png'; 
import barcode from '../../assets/barcode-scanner.png'; 
import diet from '../../assets/diet.png'; 

export default function HomeScreen(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>
            Get help following your diet
            </Text>
            <View style={styles.row}>
                <Image source={vegan} style={{ width: 80, height: 80 }}/>
                <View style={styles.gap}></View>
                <Text style={styles.paragraph}>
                Set your diet and preferences on the Settings Page
                </Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.paragraph}>
                Scan the barcode of your food
                </Text>
                <View style={styles.gap}></View>
                <Image source={barcode} style={{ width: 80, height: 80 }}/>
            </View>
            <View style={styles.row}>
                <Image source={diet} style={{ width: 80, height: 80 }}/>
                <View style={styles.gap}></View>
                <Text style={styles.paragraph}>
                Find foods that fit your diet
                </Text>
            </View>
        <StatusBar style="dark" />
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 20,
      backgroundColor: 'white',
    },
    title: {
      fontSize: 34,
      fontWeight: 'bold',
      color: 'black',
      paddingVertical:30
    },
    paragraph: {
      fontSize: 18,
      paddingLeft: 10,
      paddingRight: 70,
      color: 'black',
      flex: 1
    },
    row: {
        flexDirection: 'row', 
        justifyContent: "space-between", 
        alignItems:"center",
        paddingTop: 25,
        paddingBottom: 25,
        marginHorizontal: 10
    },
    gap: {
        width: 30
    }
  });