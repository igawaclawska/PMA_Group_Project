import React from "react";
import { StyleSheet, Image, Dimensions } from "react-native";

// detect screen width
// source: https://reactnative.dev/docs/dimensions
const windowWidth = Dimensions.get("window").width;

export const LocationImage = ({ path }) => {
  return <Image style={styles.image} source={path} />;
};

const styles = StyleSheet.create({
  image: {
    flex: 2,
    maxHeight: 360,
    width: windowWidth,
    resizeMode: "cover",
  },
});
