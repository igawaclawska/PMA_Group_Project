import { StyleSheet, Pressable, View } from "react-native";

import React from "react";

export const CustomRoundButton = ({ onPress }) => {
  return (
    <View onPress={onPress} style={[styles.btnContainer]}>
      <Pressable
        style={({ pressed }) =>
          pressed ? [styles.btn, styles.pressed] : [styles.btn]
        }
      ></Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    height: 56,
    width: 56,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 100,
    marginVertical: 4,
    gap: 6,
  },

  pressed: {
    backgroundColor: "#d6d6d6",
  },

  btnContainer: {
    height: 72,
    width: 72,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#ffffff",
    borderWidth: 3,
    borderRadius: 100,
  },
});
