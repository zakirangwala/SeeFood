import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function ResultsScreen({ route, navigation }) {
  const { barcode } = route.params;
  const [response, setResponse] = useState(null);
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
      }
      setResponse(res);
    }
    fetchData(barcode);
  }, []);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>{barcode}</Text>
      {response && (
        <Text>
          {response.data.product.brands} {response.data.product.product_name}
        </Text>
      )}
      {/* {response.data.product.ingredients_text && (
        <Text>{response.data.product.ingredients_text}</Text>
      )} */}
    </View>
  );
}
