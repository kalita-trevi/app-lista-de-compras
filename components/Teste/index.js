import React from "react";
import { useState } from "react";

import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const Teste = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);

  function soma() {
    const som = parseFloat(num1) + parseFloat(num2);
    setResult(som);
  }

  return (
    <View>
      <TextInput
        placeholder="Digite um numero: "
        keyboardType="numeric"
        value={num1}
        onChangeText={setNum1} //Essa função é chamada sempre que o usuário digita algo no campo de texto,Ela atualiza o estad. setNum1
      />
      <TextInput
        placeholder="Digite um numero: "
        keyboardType="numeric"
        value={num2}
        onChangeText={setNum2}
      />
      <Button title="Clique aqui" onPress={soma} />
      <Text>{result}</Text>
    </View>
  );
};

export default Teste;
