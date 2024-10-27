import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Calcular</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2, // Define a espessura da borda
    borderColor: "black", // Define a cor da borda
    borderRadius: 10, // Deixa os cantos arredondados (opcional)
    padding: 10, // Adiciona espaçamento interno
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  text: {
    fontSize: 40,
    color: "white",
    fontWeight: "bold",
  },
});

export default Header;
