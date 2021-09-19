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
                <Text style={styles.paragraph_right}>
                  Set your diet and preferences in the settings
                </Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.paragraph_left}>
                Scan the barcode of your food items
                </Text>
                <View style={styles.gap}></View>
                <Image source={barcode} style={{ width: 80, height: 80 }}/>
            </View>
            <View style={styles.row}>
                <Image source={diet} style={{ width: 80, height: 80 }}/>
                <View style={styles.gap}></View>
                <Text style={styles.paragraph_right}>
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
      paddingHorizontal: 30,
      backgroundColor: 'white',
    },
    title: {
      fontSize: 34,
      fontWeight: 'bold',
      color: 'black',
      paddingVertical:30
    },
    paragraph_left: {
      fontSize: 18,
      paddingRight: 50,
      color: 'black',
      fontWeight: 'normal',
      flex: 1
    },
    paragraph_right: {
      fontSize: 18,
      paddingLeft: 50,
      color: 'black',
      fontWeight: 'normal',
      flex: 1,
      textAlign: 'right'
    }
    ,
    row: {
        flexDirection: 'row', 
        justifyContent: "space-between", 
        alignItems:"center",
        paddingTop: 30,
        paddingBottom: 30,
        marginHorizontal: 10
    },
    gap: {
        width: 40
    }
  });