import React from "react";
import { View, Text, Button } from "react-native";
import { useState } from "react";

const Contador = () => {
  const [count, setCount] = useState(0);

  function contar() {
    setCount(count + 1);
  }

  return (
    <View>
      <Button title="Clik" onPress={contar} />
      <Text>Contador: {count}</Text>
    </View>
  );
};

export default Contador;
