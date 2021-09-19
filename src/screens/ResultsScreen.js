import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function ResultsScreen({ route, navigation }) {
  const { barcode } = route.params;
  const [response, setResponse] = useState(null);
  const [ingredient, setIngredient] = useState(null);
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
        if ("ingredients_text" in res.data.product) {
          setIngredient(res.data.product.ingredients_text);
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
          {response.data.product.brands} {response.data.product.product_name}
        </Text>
      )}
      {ingredient && <Text>{ingredient}</Text>}
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
