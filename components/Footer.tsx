import React from "react";
// StyleSheet: Ferramenta usada para criar estilos no React Native de maneira similar ao CSS.
import { View, ImageBackground, Text, StyleSheet } from "react-native";

const Footer = () => {
  return (
    <ImageBackground
      source={require("../assets/images/et.webp")} // Imagem de fundo
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text>Footer</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundImage: {
    flex: 1,
    width: "100%", // StyleSheet: Ferramenta usada para criar estilos no React Native de maneira similar ao CSS.
    height: "100%",
    resizeMode: "cover", // Mantém a proporção da imagem e a ajusta na tela
    margin: 0,
  },
});

export default Footer;
