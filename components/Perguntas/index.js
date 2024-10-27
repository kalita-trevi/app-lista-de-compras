import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useState } from "react";
import styles from "../Perguntas/style";

const Perguntas = () => {
  const [count, setCount] = useState(0);

  // Função para determinar a cor do background com base na pontuação
  function getBackgroundColor() {
    return count > 4 ? "green" : "red";
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        1- Você consegue lidar bem com o estresse diário sem se sentir
        constantemente sobrecarregado(a)?
      </Text>
      <TouchableOpacity
        style={styles.botao}
        onPress={() => setCount(count + 1)}
      >
        <Text style={styles.textBotao}>Sim</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.botao}
        onPress={() => setCount(count - 1)}
      >
        <Text style={styles.textBotao}>Não</Text>
      </TouchableOpacity>

      <Text style={styles.text}>
        2- Você costuma ter uma boa noite de sono e acorda se sentindo
        descansado(a)?
      </Text>
      <TouchableOpacity
        style={styles.botao}
        onPress={() => setCount(count + 1)}
      >
        <Text style={styles.textBotao}>Sim</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.botao}
        onPress={() => setCount(count - 1)}
      >
        <Text style={styles.textBotao}>Não</Text>
      </TouchableOpacity>

      <Text style={styles.text}>
        3- Você consegue se concentrar nas suas tarefas diárias sem se sentir
        distraído(a) ou ansioso(a)?
      </Text>
      <TouchableOpacity
        style={styles.botao}
        onPress={() => setCount(count + 1)}
      >
        <Text style={styles.textBotao}>Sim</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.botao}
        onPress={() => setCount(count - 1)}
      >
        <Text style={styles.textBotao}>Não</Text>
      </TouchableOpacity>

      <Text style={styles.text}>
        4- Você sente que consegue equilibrar seu tempo entre trabalho, lazer e
        descanso?
      </Text>
      <TouchableOpacity
        style={styles.botao}
        onPress={() => setCount(count + 1)}
      >
        <Text style={styles.textBotao}>Sim</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.botao}
        onPress={() => setCount(count - 1)}
      >
        <Text style={styles.textBotao}>Não</Text>
      </TouchableOpacity>

      <Text style={styles.text}>
        5- Nos últimos dias, você tem se sentido emocionalmente estável, sem
        grandes oscilações de humor?
      </Text>
      <TouchableOpacity
        style={styles.botao}
        onPress={() => setCount(count + 1)}
      >
        <Text style={styles.textBotao}>Sim</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.botao}
        onPress={() => setCount(count - 1)}
      >
        <Text style={styles.textBotao}>Não</Text>
      </TouchableOpacity>

      {/* Renderização condicional do estilo baseado no valor do count */}
      <Text style={[styles.textR, { backgroundColor: getBackgroundColor() }]}>
        Sua Pontuação: {count}
      </Text>
    </View>
  );
};

export default Perguntas;
