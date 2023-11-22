import { StyleSheet } from "react-native";

const typography = StyleSheet.create({
  h1: {
    fontSize: 24,
    color: "#1A1C29",
  },

  h2: {
    fontSize: 20,
    color: "#1A1C29",
  },

  paragraph: {
    fontSize: 16,
    lineHeight: 21,
  },

  paragraphSmall: {
    fontSize: 12,
    lineHeight: 18,
  },

  boldFont: {
    fontWeight: 700,
  },

  centeredText: {
    textAlign: "center",
  },

  lightGrayText: {
    color: "#797979",
  },
});

export default typography;
