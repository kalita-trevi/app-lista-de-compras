import React from "react";
import { StyleSheet, View, Text } from "react-native";
import ListaFrutas from "../../components/ListaFrutas";
import Header from "../../components/Header";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Header />
      <ListaFrutas />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#white",
    width: "100%",
    height: "100%",
    flexDirection: "column",
    alignItems: "center",
  },
});
