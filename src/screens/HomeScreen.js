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
                <Image source={vegan} style={{ width: 100, height: 100 }}/>
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
                <Image source={barcode} style={{ width: 100, height: 100 }}/>
            </View>
            <View style={styles.row}>
                <Image source={diet} style={{ width: 100, height: 100 }}/>
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
      fontSize: 36,
      fontWeight: 'bold',
      color: 'black',
      paddingVertical:30
    },
    paragraph: {
      fontSize: 22,
      color: 'black',
      flex: 1
    },
    row: {
        flexDirection: 'row', 
        justifyContent: "space-between", 
        alignItems:"center",
        paddingBottom:50,
        marginHorizontal: 10
    },
    gap: {
        width: 30
    }
  });