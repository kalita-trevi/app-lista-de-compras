import React, { useState } from "react";
import { View, Text, FlatList, TextInput, Button } from "react-native";
import styles from "./style";

const ListaFrutas = () => {
  const [nome, setNome] = useState("");
  const [frutas, setFrutas] = useState([]);

  function hendlerSubmit() {
    if (nome === "") {
      alert("Preencha o campo");
    } else {
      alert("Fruta adicionada"); // exibe uma mensagem
      setFrutas([...frutas, nome]); // adiciona o nome na lista
      setNome("");
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Adicionar Fruta</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o nome da fruta"
        value={nome}
        onChangeText={setNome}
      />
      <Button title="Clique aqui" onPress={hendlerSubmit} />

      <FlatList
        style={{ width: 280 }} // apenas largura aqui
        data={frutas}
        renderItem={({ item }) => (
          <Text style={styles.list}>{item}</Text> // Aplicando estilo diretamente no <Text>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default ListaFrutas;
