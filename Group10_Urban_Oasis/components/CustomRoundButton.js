import { StyleSheet, Pressable, View, Text } from "react-native";

import React from "react";

export const CustomRoundButton = () => {
  return (
    <Pressable style={styles.btnContainer}>
      <View style={styles.btn}></View>
    </Pressable>
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

  btnContainer: {
    height: 72,
    width: 72,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#ffffff",
    borderWidth: 4,
    borderRadius: 100,

  }
});
