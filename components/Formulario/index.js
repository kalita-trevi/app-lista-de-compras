import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  FlatList,
} from "react-native";

const Formulario = () => {
  const teste = ["kil", "banana", "kil", "dan"];
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [dados, setDados] = useState([]);

  function hendlerSubmit() {
    if (nome === "" || email === "") {
      alert("Preencha todos os campos");
    } else {
      alert("Dados enviados com sucesso");
      setDados([
        ...dados,
        {
          nome: nome,
          email: email,
        },
      ]);
      setNome("");
      setEmail("");

      console.log(dados);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Preencha o Formulário</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        style={styles.input}
        placeholder="Digite seu email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <Button title="Clique aqui" onPress={hendlerSubmit} />
      <Text>---------------------------------------</Text>
      <Button title="Limpar Dados" onPress={() => setDados([])} />

      <Text>LISTA DE DADOS</Text>
      <FlatList
        data={dados}
        keyExtractor={(item) => item.email}
        renderItem={({ item }) => (
          <Text>
            {item.nome} - {item.email}
          </Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default Formulario;
