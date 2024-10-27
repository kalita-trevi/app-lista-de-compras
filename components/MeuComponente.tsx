import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

const MeuComponente = () => {
  return (
    <View>
      <Text style={styles.text}>Meu Header</Text>
      <Text>Meu Componente</Text>
      <TextInput placeholder="digite seu nome" keyboardType="numeric" />
      <Button title="Clique aqui" />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: "blue",
  },
});

export default MeuComponente;
