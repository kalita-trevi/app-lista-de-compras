import React from "react";
import { StyleSheet, View } from "react-native";
import ListaFrutas from "../../components/ListaFrutas";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ListaFrutas />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
});
