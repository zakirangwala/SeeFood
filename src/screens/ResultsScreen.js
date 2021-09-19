import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function ResultsScreen({ route, navigation }) {
  const { barcode } = route.params;
  const [response, setResponse] = useState();

  useEffect(() => {
    async function fetchData(code) {
      const axios = require("axios");
      const url = `https://world.openfoodfacts.org/api/v0/product/${encodeURIComponent(
        JSON.stringify(code)
      )}`;
      console.log("Fetching Data from API...");
      let res = await axios.get(url);
      console.log(await res["status"]);
      setResponse(await res);
    }
    fetchData(barcode);
  }, []);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>{barcode}</Text>
    </View>
  );
}
