import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import vegan from '../../assets/vegan.png';
import vegetarian from '../../assets/plant-based.png';
import glutenFree from '../../assets/gluten-free.png';
import nonVegan from '../../assets/unclicked-vegan.png';
import nonVegetarian from '../../assets/unclicked-plant-based.png';
import nonGlutenFree from '../../assets/unclicked-gluten-free.png';

export default function SettingsScreen({ navigation }) {

    let [restrictions, setRestrictions] = useState('');
    //const [extra, setExtra] = useState([]);

    useEffect(() => {
        setRestrictions(getData('restrictions'));
        //setExtra(getData('extra'));
    }, []);


    useEffect(() => {
        console.log(restrictions);
        setData('restrictions', restrictions);
    }, [restrictions]);


    const getData = (key) => {
        try {
            const jsonValue = AsyncStorage.getItem(key);
            return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch (e) {
            setData(key, []);
            return [];
        }
    }

    const setData = async (key, value) => {
        try {
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem(key, jsonValue)
        } catch (e) {
            // saving error
        }
    }

    const buttonOnPress = (value, add) => {
        if (add) {
            setRestrictions(restrictions.concat([value]));
        }
        else {
            setRestrictions(restrictions.filter(val => val != value));
        }
    }

    return (
        (restrictions != null && restrictions instanceof Array) && <View style={styles.container}>
            <Text style={styles.title}>
                Choose Your Diet:
            </Text>
            <View style={styles.row}>
                {((restrictions.includes("vegan")) ?
                    <TouchableOpacity onPress={() => buttonOnPress('vegan', 0)}><Image source={vegan} style={{ width: 80, height: 80 }} /></TouchableOpacity> :
                    <TouchableOpacity onPress={() => buttonOnPress('vegan', 1)}><Image source={nonVegan} style={{ width: 80, height: 80 }} /></TouchableOpacity>)}
                <View style={styles.gap}></View>
                {((restrictions.includes("vegetarian")) ?
                    <TouchableOpacity onPress={() => buttonOnPress('vegetarian', 0)}><Image source={vegetarian} style={{ width: 80, height: 80 }} /></TouchableOpacity> :
                    <TouchableOpacity onPress={() => buttonOnPress('vegetarian', 1)}><Image source={nonVegetarian} style={{ width: 80, height: 80 }} /></TouchableOpacity>)}
                {((restrictions.includes("glutenFree")) ?
                    <TouchableOpacity onPress={() => buttonOnPress('glutenFree', 0)}><Image source={glutenFree} style={{ width: 80, height: 80 }} /></TouchableOpacity> :
                    <TouchableOpacity onPress={() => buttonOnPress('glutenFree', 1)}><Image source={nonGlutenFree} style={{ width: 80, height: 80 }} /></TouchableOpacity>)}

            </View>
            <Text style={styles.title}>
                Extra Dietary Restrictions:
            </Text>
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
        paddingVertical: 30
    },
    row: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
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
    }
});