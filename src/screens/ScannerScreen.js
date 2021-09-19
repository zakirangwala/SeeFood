import { Camera } from 'expo-camera';
import React, {useState,useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function ScannerScreen({navigation}){
    //camera permissions
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
  
    //check permsissions
    useEffect(() => {
      (async () => {
        const { status } = await Camera.requestPermissionsAsync();
        setHasPermission(status === 'granted');
      })();
    }, []);
  
    if (hasPermission === null) {
      return <View />;
    }
    if (hasPermission === false) {
      return <Text>No access to camera</Text>;
    }
  
    return (
      <View style={styles.container}>
        <Camera style={styles.camera} type={type} 

        barCodeScannerSettings={{
          barCodeTypes: [BarCodeScanner.Constants.BarCodeType.ean13],
        }}
        onBarCodeScanned={(obj) => {
          navigation.navigate('Results',{barcode: obj["data"]});
        }}>
        </Camera>
  {/* 
        <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                //picture = await Camera
                
  
              }}>
               <Entypo name="circle" size={72} color="white" />
            </TouchableOpacity>
          </View>
           */}
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'black',
    },
    camera: {
      width: '100%',
      height: '100%',
    },
    buttonContainer:{
      marginTop: 40,
    },
    button:{},
    text:{}
  });