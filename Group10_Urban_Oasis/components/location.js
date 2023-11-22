// components/Location.js
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Location = ({ title, img, description }) => (
  <View style={styles.card}>
    <View style={styles.cardContent}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: img }} style={styles.image} />
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 8,
    marginBottom: 15,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  imageContainer: {
    marginRight: 10,
  },
  image: {
    width: 120,
    height: 150,
    borderRadius: 4,
  },
  rightContainer: {
    flex: 1,
    paddingLeft: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    paddingBottom: 5,
  },
  description: {
    fontSize: 12,
    maxHeight: 80,
    overflow: "hidden",
  },
});

export default Location;
