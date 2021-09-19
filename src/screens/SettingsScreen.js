import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import vegan from '../../assets/vegan.png'; 
import vegetarian from '../../assets/plant-based.png'; 
import glutenFree from '../../assets/gluten-free.png';
import nonVegan from '../../assets/unclicked-vegan.png'; 
import nonVegetarian from '../../assets/unclicked-plant-based.png'; 
import nonGlutenFree from '../../assets/unclicked-gluten-free.png';

export default function SettingsScreen({navigation}){

    const [restrictions, setRestrictions] = useState([]);
    //const [extra, setExtra] = useState([]);

    useEffect(() => {
        setRestrictions(getData('restrictions'));
        //setExtra(getData('extra'));
    });
    
    const getData = async (key) => {
        try {
            const jsonValue = await AsyncStorage.getItem(key);
            return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch(e) {
            console.log('hey');
            setData(key,[]);
            return [];
        }
    }
      
    const setData = async (key, value) => {
        try {
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem(key, jsonValue)
            setState(()=>{});
        } catch (e) {
        // saving error
        }
    }

    console.log(restrictions);

    const buttonOnPress = (key, arr, value, add) => {
        console.log(arr);
        if(add){
            let arrNew = arr.push(value);
            setData(key,arrNew);
        }
        else{
            let arrNew = arr.splice(arr.indexOf(value), 1)
            setData(key,arrNew);
        }
    }

    return(
      <View style={styles.container}>
        <Text style={styles.title}>
          Choose Your Diet:
        </Text>
        <View style={styles.row}>
            {(restrictions == null || !(restrictions instanceof Array)) ? <View></View> : ((restrictions.includes("vegan")) ? 
                <TouchableOpacity onPress={buttonOnPress('restrictions',restrictions,'vegan',0)}><Image source={vegan} style={{ width: 80, height: 80 }}/></TouchableOpacity> : 
                <TouchableOpacity onPress={buttonOnPress('restrictions',restrictions,'vegan',1)}><Image source={nonVegan} style={{ width: 80, height: 80 }}/></TouchableOpacity>)}
            
        </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 35,
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      backgroundColor: '#ffffff',
    },
    title: {
        fontSize: 34,
        fontWeight: 'bold',
        color: 'black',
        paddingVertical:30
      },
      row: {
        flexDirection: 'row', 
        justifyContent: "space-between", 
        alignItems:"center",
        paddingTop: 30,
        paddingBottom: 30,
        marginHorizontal: 10
    },
    paragraph: {
      margin: 24,
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#34495e',
    },
  });