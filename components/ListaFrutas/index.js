import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native";
import styles from "./style";

const ListaFrutas = () => {
  const [nome, setNome] = useState("");
  const [valor, setValor] = useState("");
  const [produtos, setProdutos] = useState([]);

  function handlerSubmit() {
    if (nome === "") {
      alert("Preencha o campo");
    } else {
      setProdutos([{ nome, valor: parseFloat(valor) }, ...produtos]);
      setNome("");
      setValor("");
    }
  }

  function calcularTotal() {
    return produtos.reduce(
      (total, produto) => total + parseFloat(produto.valor),
      0
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerInputBotao}>
        <TextInput
          style={styles.input}
          placeholder="Digite o produto"
          value={nome}
          onChangeText={setNome}
        />
        <TextInput
          style={styles.input}
          placeholder="valor: R$"
          value={valor}
          keyboardType="numeric"
          onChangeText={setValor}
        />
        <TouchableOpacity style={styles.botao} onPress={handlerSubmit}>
          <Text style={styles.botaoTexto}>Adicionar</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        style={{ width: "100%", height: 400 }}
        data={produtos}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemNome}>{item.nome}</Text>
            <Text style={styles.itemValor}>R$ {item.valor.toFixed(2)}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />

      {/* Exibe o total fixo abaixo da FlatList */}
      <View style={styles.totalContainer}>
        <Text style={styles.totalTexto}>
          Total: R$ {calcularTotal().toFixed(2)}
        </Text>
      </View>
    </View>
  );
};

export default ListaFrutas;
