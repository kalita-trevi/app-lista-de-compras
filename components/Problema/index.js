import React, { useState } from "react";
import { View, Text, Button, StyleSheet, Alert } from "react-native";

const Problema = () => {
  // Estado para o status do problema de Kalita e da resposta de Flávio
  const [kalitaHasProblem, setKalitaHasProblem] = useState(true);
  const [flavioCares, setFlavioCares] = useState(null); // null: sem resposta, true: ele se importa, false: ele tenta filtrar o problema

  // Função para a decisão de Flávio
  const handleFlavioResponse = (cares) => {
    setFlavioCares(cares);
    if (cares) {
      Alert.alert(
        "Flávio ama Kalita.",
        "Ele se importou e resolveu o problema."
      );
    } else {
      Alert.alert("Flávio não ama Kalita.", "Ele tentou filtrar o problema.");
      // Reinicia o ciclo após 2 segundos
      setTimeout(() => {
        setKalitaHasProblem(true);
        setFlavioCares(null);
      }, 2000);
    }
  };

  return (
    <View style={styles.container}>
      {kalitaHasProblem && flavioCares === null ? (
        <>
          <Text style={styles.text}>Kalita tem um problema.</Text>
          <Text style={styles.text}>
            Flávio, você se importa com o problema?
          </Text>
          <View style={styles.buttonContainer}>
            <Button
              title="Sim, eu me importo"
              onPress={() => handleFlavioResponse(true)}
            />
            <Button
              title="Não, eu vou filtrar o problema"
              onPress={() => handleFlavioResponse(false)}
            />
          </View>
        </>
      ) : flavioCares === true ? (
        <Text style={styles.text}>
          Flávio resolveu o problema. Ele ama Kalita!
        </Text>
      ) : (
        <Text style={styles.text}>
          Reiniciando... Kalita tem um problema novamente.
        </Text>
      )}
    </View>
  );
};

// Estilos simples para a interface
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    padding: 20,
  },
});

export default Problema;
