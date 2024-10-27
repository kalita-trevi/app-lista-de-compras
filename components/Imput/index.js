// components/Input.js
import React from "react";
import { TextInput, StyleSheet, View, Text } from "react-native";
import { styles } from "./style";

const Input = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  keyboardType,
}) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType || "default"}
        style={styles.input}
      />
    </View>
  );
};

export default Input;
