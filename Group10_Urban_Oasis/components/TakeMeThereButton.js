import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const Buttons = ({ onPress, title }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#3FC76D",
    padding: 18,
    borderRadius: 28,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600"
  },
});

export default Buttons;
