import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import veganImg from "../../assets/vegan.png";
import vegetarianImg from "../../assets/plant-based.png";
import glutenFreeImg from "../../assets/gluten-free.png";
import check from "../../assets/check.png";
import cancel from "../../assets/cancel.png";

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
          if ("ingredients" in res.data.product) {
            var veganCheck = true;
            var vegeterianCheck = true;
            var ingredientsList = res.data.product.ingredients;

            for (var i = 0; i < ingredientsList.length; i++) {
              if (ingredientsList[i].vegan === "no") {
                veganCheck = false;
                break;
              }
            }
            for (var i = 0; i < ingredientsList.length; i++) {
              if (ingredientsList[i].vegetarian === "no") {
                vegeterianCheck = false;
                break;
              }
            }
            setVegan(veganCheck.toString());
            setVegetarian(vegeterianCheck.toString());
          }
          if ("allergens" in res.data.product) {
            if (res.data.product.allergens.includes("gluten")) {
              setGlutenFree(false.toString());
            } else {
              setGlutenFree(true.toString());
            }
          }
          if ("ingredients_text" in res.data.product) {
            setIngredient(res.data.product.ingredients_text.substring(0));
          }
          if ("brands" in res.data.product) {
            setBrand(" " + toTitleCase(res.data.product.brands.toString()));
          }
          if ("product_name" in res.data.product) {
            setName(toTitleCase(res.data.product.product_name.toString()));
          }
          if ("categories" in res.data.product) {
            setCategory(res.data.product.categories);
          }
        }
      }
    }
    fetchData(barcode);
  }, []);

  function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }

  return (
    <View style={styles.container}>
      {response && <Text style={styles.title}>{name}</Text>}

      <View style={styles.row}>
        {vegan && (
          <View style={styles.column}>
            <Text style={styles.heading}>Vegan</Text>
            <View style={styles.gap}></View>
            <Image source={veganImg} style={{ width: 80, height: 80 }} />
            <View style={styles.gap2}></View>
            {vegan === "true" ? (
              <Image source={check} style={{ width: 30, height: 30 }} />
            ) : (
              <Image source={cancel} style={{ width: 30, height: 30 }} />
            )}
          </View>
        )}
        {vegetarian && (
          <View style={styles.column}>
            <Text style={styles.heading}>Vegetarian</Text>
            <View style={styles.gap}></View>
            <Image source={vegetarianImg} style={{ width: 80, height: 80 }} />
            <View style={styles.gap2}></View>
            {vegetarian === "true" ? (
              <Image source={check} style={{ width: 30, height: 30 }} />
            ) : (
              <Image source={cancel} style={{ width: 30, height: 30 }} />
            )}
          </View>
        )}
        {glutenFree && (
          <View style={styles.column}>
            <Text style={styles.heading}>Gluten-Free</Text>
            <View style={styles.gap}></View>
            <Image source={glutenFreeImg} style={{ width: 80, height: 80 }} />
            <View style={styles.gap2}></View>
            {glutenFree === "true" ? (
              <Image source={check} style={{ width: 30, height: 30 }} />
            ) : (
              <Image source={cancel} style={{ width: 30, height: 30 }} />
            )}
          </View>
        )}
      </View>

      {/* {category && <Text>{category}</Text>} */}
      {ingredient && <Text style={styles.title}> Ingredients </Text>}
      {ingredient && <Text style={styles.paragraph}> {ingredient}</Text>}

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
    paddingHorizontal: 35,
    backgroundColor: "white",
  },
  title: {
    fontSize: 34,
    fontWeight: "bold",
    color: "black",
    paddingTop: 30,
    paddingBottom: 15,
  },
  heading: {
    fontSize: 18,
    color: "black",
    fontWeight: "bold",
  },
  paragraph: {
    fontSize: 14,
    color: "black",
    fontWeight: "normal",
    flex: 1,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 10,
  },
  column: {
    flexDirection: "column",
    alignItems: "center",
  },
  gap: {
    height: 10,
  },
  gap2: {
    height: 20,
  },
});
