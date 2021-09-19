import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function ResultsScreen({route,navigation}){
    const { barcode } = route.params;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>{barcode}</Text>
      </View>
    );
  }