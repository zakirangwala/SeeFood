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
    let [lastTapped, setLastTapped] = useState('vegan');
    //const [extra, setExtra] = useState([]);

    useEffect(() => {
        setRestrictions(getData('restrictions'));
        //setExtra(getData('extra'));
    }, []);


    useEffect(() => {
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
            setLastTapped(value);
            setRestrictions(restrictions.concat([value]));
        }
        else {
            setLastTapped(value);
            setRestrictions(restrictions.filter(val => val != value));
        }
    }

    return (
        (restrictions != null && restrictions instanceof Array) && <View style={styles.container}>
            <Text style={styles.title}>
                Choose Your Diet:
            </Text>
            <View style={styles.row}>
                <View style={styles.column}>
                    <Text style={styles.heading}>Vegan</Text>
                    <View style={styles.gap}></View>
                    {((restrictions.includes("vegan")) ?
                        <TouchableOpacity onPress={() => buttonOnPress('vegan', 0)}><Image source={vegan} style={{ width: 80, height: 80 }} /></TouchableOpacity> :
                        <TouchableOpacity onPress={() => buttonOnPress('vegan', 1)}><Image source={nonVegan} style={{ width: 80, height: 80 }} /></TouchableOpacity>)}
                </View>
                <View style={styles.column}>
                    <Text style={styles.heading}>Vegetarian</Text>
                    <View style={styles.gap}></View>
                    {((restrictions.includes("vegetarian")) ?
                        <TouchableOpacity onPress={() => buttonOnPress('vegetarian', 0)}><Image source={vegetarian} style={{ width: 80, height: 80 }} /></TouchableOpacity> :
                        <TouchableOpacity onPress={() => buttonOnPress('vegetarian', 1)}><Image source={nonVegetarian} style={{ width: 80, height: 80 }} /></TouchableOpacity>)}
                </View>
                <View style={styles.column}>
                    <Text style={styles.heading}>Gluten-Free</Text>
                    <View style={styles.gap}></View>
                    {((restrictions.includes("gluten Free")) ?
                        <TouchableOpacity onPress={() => buttonOnPress('gluten Free', 0)}><Image source={glutenFree} style={{ width: 80, height: 80 }} /></TouchableOpacity> :
                        <TouchableOpacity onPress={() => buttonOnPress('gluten Free', 1)}><Image source={nonGlutenFree} style={{ width: 80, height: 80 }} /></TouchableOpacity>)}
                </View>
            </View>
            <View style={styles.desc}>
                <Text style={styles.paragraph}>{lastTapped.charAt(0).toUpperCase() + lastTapped.slice(1)}: Description</Text>
                {(lastTapped === 'vegan') ? <Text>A vegan diet involves eating only foods comprising plants. Those who follow this diet avoid all animal products, including meat, dairy, and eggs.</Text> :
                    ((lastTapped == 'vegetarian') ? <Text>The vegetarian diet involves abstaining from eating meat, fish and poultry, but may continue to eat eggs and dairy products.</Text> :
                        <Text>A gluten-free diet is an eating plan that excludes foods containing gluten, a protein found in wheat, barley, rye and triticale.</Text>)}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 35,
        justifyContent: 'flex-start',
        backgroundColor: '#ffffff',
    },
    heading: {
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold',
    },
    title: {
        fontSize: 34,
        fontWeight: 'bold',
        color: 'black',
        paddingTop: 30,
        paddingBottom: 15
    },
    row: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        paddingBottom: 30,
    },
    paragraph: {
        fontSize: 18,
        marginBottom: 10,
        fontWeight: 'bold',
        color: 'black',
    },
    desc: {
        borderRadius: 5,
        borderWidth: 1,
        padding: 10,
    },
    column: {
        flexDirection: 'column',
        alignItems: 'center'
    },
    gap: {
        height: 10,
    },
});