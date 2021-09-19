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

            {(restrictions != null && restrictions instanceof Array) && <View style={styles.column}>
                <View style={restrictions.includes("vegan") ? styles.desc : styles.descNon}>
                    <Text style={restrictions.includes("vegan") ? styles.paragraph : styles.paragraphNon}>Vegan</Text>
                    <Text style={restrictions.includes("vegan") ? {} : { color: 'lightgrey' }}>A vegan diet involves eating only foods comprising plants. Those who follow this diet avoid all animal products, including meat, dairy, and eggs.</Text>
                </View>
                <View style={restrictions.includes("vegetarian") ? styles.desc : styles.descNon}>
                    <Text style={restrictions.includes("vegetarian") ? styles.paragraph : styles.paragraphNon}>Vegetarian</Text>
                    <Text style={restrictions.includes("vegetarian") ? {} : { color: 'lightgrey' }}>The vegetarian diet involves abstaining from eating meat, fish and poultry, but may continue to eat eggs and dairy products.</Text>
                </View>
                <View style={restrictions.includes("gluten Free") ? styles.desc : styles.descNon}>
                    <Text style={restrictions.includes("gluten Free") ? styles.paragraph : styles.paragraphNon}>Gluten-Free</Text>
                    <Text style={restrictions.includes("gluten Free") ? {} : { color: 'lightgrey' }}>A gluten-free diet is an eating plan that excludes foods containing gluten, a protein found in wheat, barley, rye and triticale.</Text>
                </View>

            </View>}


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
    paragraphNon: {
        fontSize: 18,
        marginBottom: 10,
        fontWeight: 'bold',
        color: 'lightgrey',
    },
    desc: {
        borderRadius: 5,
        borderWidth: 1,
        padding: 10,
        width: '100%',
        marginBottom: 10,
    },
    descNon: {
        borderRadius: 5,
        borderWidth: 1,
        padding: 10,
        width: '100%',
        marginBottom: 10,
        borderColor: 'lightgrey',
    },
    column: {
        flexDirection: 'column',
        alignItems: 'center'
    },
    gap: {
        height: 10,
    },
});