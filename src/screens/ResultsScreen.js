import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function ResultsScreen({ route, navigation }) {
  const { barcode } = route.params;
  const [response, setResponse] = useState(null);
  const [ingredient, setIngredient] = useState(null);
  const [brand, setBrand] = useState(null);
  const [name, setName] = useState(null);
  const [category, setCategory] = useState(null);
  const [vegan, setVegan] = useState(null);
  const [vegetarian, setVegetarian] = useState(null);
  const [glutenFree, setGlutenFree] = useState(null);

  const axios = require("axios");

  useEffect(() => {
    async function fetchData(code) {
      console.log("Fetching Data from API...");
      const res = await axios.get(
        `https://world.openfoodfacts.org/api/v0/product/${encodeURIComponent(
          JSON.stringify(barcode)
        )}`
      );
      console.log(res.request);
      console.log(res.status);
      if ((res.data.status = 1)) {
        console.log(res.data.code);
        setResponse(res);
        if ("product" in res.data) {
          if ("ingredients" in res.data.product){
            var veganCheck = true;
            var vegeterianCheck = true; 
            var ingredientsList = res.data.product.ingredients;

            for(var i=0;i<ingredientsList.length;i++){
              if(ingredientsList[i].vegan === "no"){
                veganCheck = false;
                break;
              }
            }
            for(var i=0;i<ingredientsList.length;i++){
              if(ingredientsList[i].vegetarian === "no"){
                vegeterianCheck = false;
                break;
              }
            }
            setVegan(veganCheck.toString());
            setVegetarian(vegeterianCheck.toString());
          }
          if("allergens" in res.data.product){
            if(res.data.product.allergens.includes("gluten")){
              setGlutenFree(false.toString());
            }
            else{
              setGlutenFree(true.toString());
            }
          }
          if ("ingredients_text" in res.data.product) {
            setIngredient(" " + res.data.product.ingredients_text);
          }
          if ("brands" in res.data.product) {
            setBrand(" " + res.data.product.brands);
          }
          if ("product_name" in res.data.product) {
            setName(res.data.product.product_name);
          }
          if ("categories" in res.data.product) {
            setCategory(res.data.product.categories);
          }
        }
      }
    }
    fetchData(barcode);
  }, []);

  return (
    <View style={styles.container}>
      <Text>{barcode}</Text>
      {response && (
        <Text>
          {brand} {name}
        </Text>
      )}
      {/* {category && <Text>{category}</Text>} */}
      {ingredient && <Text> {ingredient}</Text>}

      {vegan && <Text> {vegan}</Text>}
      {vegetarian && <Text> {vegetarian}</Text>}
      {glutenFree && <Text> {glutenFree}</Text>}
      {/* <Image
        source={{
          uri: "https://static.wikia.nocookie.net/silicon-valley/images/4/49/Jian_Yang.jpg/revision/latest?cb=20210105194213",
        }}
        style={{ width: 400, height: 400 }}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  camera: {
    width: "100%",
    height: "100%",
  },
  buttonContainer: {
    marginTop: 40,
  },
  button: {},
  text: {},
});
