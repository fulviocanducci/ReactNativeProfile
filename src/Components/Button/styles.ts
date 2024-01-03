import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginTop: 6,
    marginBottom: 6,
  },
  pressable: {
    width: "90%",
    flexDirection: "column",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#515354",
    elevation: 4,
    borderRadius: 5,
  },
  text: {
    color: "#EFF18B",
    fontSize: 25,
    fontWeight: "bold",
    width: "100%",
    verticalAlign: "middle",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
  },
});
