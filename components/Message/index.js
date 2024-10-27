import React from "react";
import { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

const Message = () => {
  const [message, setMessage] = useState("");

  function exibirMensagem() {
    setMessage("exibida");
  }
  return (
    <View>
      <Button title="Exibir mensagem" onPress={exibirMensagem} />
      <Text>{message}</Text>
    </View>
  );
};

export default Message;
