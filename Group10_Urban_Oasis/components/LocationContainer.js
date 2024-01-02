// components/Location.js
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  Alert,
  TouchableOpacity,
} from "react-native";
import { Entypo } from "@expo/vector-icons";

const LocationContainer = ({ title, img, description }) => (
  <View style={styles.card}>
    <View style={styles.cardContent}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: img }} style={styles.image} />
      </View>
      <View style={styles.rightContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => Alert.alert("hi")}
          >
            <Text style={styles.btnText}>Take me there!</Text>
            <Entypo name="location-pin" size={16} color="white" />
          </TouchableOpacity>
        </View>
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
    height: 180,
  },
  imageContainer: {
    marginRight: 10,
  },
  image: {
    width: 100,
    height: "100%",
    borderRadius: 4,
  },
  rightContainer: {
    flex: 1,
    paddingLeft: 5,
    justifyContent: "flex-start",
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    paddingBottom: 5,
  },
  description: {
    fontSize: 14,
    maxHeight: 100,
    overflow: "hidden",
    fontWeight: "300",
    lineHeight: 20,
  },
  buttonContainer: {},
  button: {
    backgroundColor: "#3E9C27",
    width: 150,
    height: 28,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 14,
  },
  btnText: {
    color: "white",
    paddingRight: 3,
    fontWeight: "500",
    fontSize: 14,
  },
});

export default LocationContainer;
