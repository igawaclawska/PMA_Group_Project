import React from "react";
import { StyleSheet, Pressable, Text } from "react-native";

export const CustomButton = ({ children, onPress, theme }) => {
  return (
    <Pressable
      onPress={onPress}
      style={
        theme !== "secondary"
          ? [styles.btn, styles.primary]
          : [styles.btn, styles.secondary]
      }
    >
      <Text
        style={theme !== "secondary" ? styles.btnText : styles.btnSecondaryText}
      >
        {children}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  btn: {
    flexDirection: "row",
    justifyContent: "center",

    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginVertical: 4,
  },

  primary: {
    backgroundColor: "#3FC76D",
  },

  secondary: {
    borderColor: "#D7D7D7",
    borderWidth: 1,
  },

  btnText: {
    color: "white",
    fontWeight: "700",
  },

  btnSecondaryText: {
    color: "#1A1C29",
    fontWeight: "600",
  },
});
