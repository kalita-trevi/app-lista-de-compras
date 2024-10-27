import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import styles from "./style";

const Color = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");
  const [color, setColor] = useState("");

  function soma() {
    const som = parseFloat(num1) + parseFloat(num2);
    setResult(som);
    changeColor(som); // Chame a função changeColor após calcular a soma
  }

  function changeColor(som) {
    if (som > 10) {
      setColor("green"); // Defina a cor como verde se a soma for maior que 10
    } else {
      setColor("red"); // Defina a cor como vermelho caso contrário
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite um número: "
        keyboardType="numeric"
        value={num1}
        onChangeText={setNum1}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite um número: "
        keyboardType="numeric"
        value={num2}
        onChangeText={setNum2}
      />
      <Button title="Clique aqui" onPress={soma} />
      {/* Aqui usamos o estado `color` no estilo */}
      <Text style={[styles.text, { color: color }]}>{result}</Text>
    </View>
  );
};

export default Color;
