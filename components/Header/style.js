import react from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row", // Alinha os itens horizontalmente
    alignItems: "center", // Centraliza verticalmente
    justifyContent: "center", // Centraliza horizontalmente
    backgroundColor: "#fc6e3d", // Cor de fundo do header
    padding: 15, // Espaçamento interno
    width: "100%", // Largura do header
  },
  icon: {
    width: 50, // Largura do ícone
    height: 50, // Altura do ícone
    marginRight: 10, // Espaçamento entre o ícone e o texto
  },
  text: {
    fontSize: 30, // Tamanho do texto do título
    fontWeight: "bold", // Negrito para o título
    color: "#fff", // Cor do texto
  },
});

export default styles;
