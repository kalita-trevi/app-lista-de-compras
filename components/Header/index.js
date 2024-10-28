import react from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import styles from "./style";
const Header = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/cesta-de-compras.png")}
        style={styles.icon}
      />
      <Text style={styles.text}>Lista de Compras</Text>
    </View>
  );
};

export default Header;
