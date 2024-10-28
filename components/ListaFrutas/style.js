import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa o espaço vertical total disponível
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffd41f",
    width: "100%",
  },
  containerInputBotao: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
  },
  input: {
    borderColor: "#ffd41f",
    borderWidth: 1,
    borderRadius: 13,
    width: 125,
    height: 40,
    fontSize: 20,
    margin: 10,
    backgroundColor: "white",
    color: "black",
  },
  botao: {
    backgroundColor: "#4CAF50",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  botaoTexto: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
    borderBottomWidth: 2,
    borderBottomColor: "white",
    margin: 10,
    padding: 10,
    shadowColor: "white",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  itemNome: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fc6e0d",
  },
  itemValor: {
    fontSize: 30,
    fontWeight: "bold",
    color: "green",
  },
  totalContainer: {
    width: "100%",
    padding: 20,
    backgroundColor: "#ffd41f",
    alignItems: "center",
  },
  totalTexto: {
    fontSize: 36,
    fontWeight: "bold",
    color: "green",
  },
});

export default styles;
