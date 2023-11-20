import React from "react";
import { StyleSheet, Pressable, Text, View } from "react-native";

export const CustomButton = ({ value, onPress, theme, icon }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) =>
        pressed
          ? [
              [styles.btn],
              theme !== "secondary"
                ? [styles.primaryPressed]
                : [styles.secondaryPressed],
            ]
          : [
              [styles.btn],
              theme !== "secondary" ? [styles.primary] : [styles.secondary],
            ]
      }
    >
      {icon}
      {value && (
        <Text
          style={
            theme !== "secondary" ? styles.btnText : styles.btnSecondaryText
          }
        >
          {value}
        </Text>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  btn: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginVertical: 4,
    gap: 6,
  },

  primary: {
    backgroundColor: "#3FC76D",
  },

  primaryPressed: {
    backgroundColor: "#3E9C27",
  },

  secondaryPressed: {
    backgroundColor: "#F3F3F3",
    borderColor: "#F3F3F3",
    borderWidth: 1,
  },

  secondary: {
    borderColor: "#D7D7D7",
    borderWidth: 1,
  },

  btnText: {
    color: "white",
    fontWeight: "700",
    gap: 16,
  },

  btnSecondaryText: {
    color: "#1A1C29",
    fontWeight: "600",
  },
});
