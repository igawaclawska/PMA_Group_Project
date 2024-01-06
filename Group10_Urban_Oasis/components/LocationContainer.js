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
import { Ionicons } from "@expo/vector-icons";

const LocationContainer = ({
  id,
  title,
  visitLocation,
  img,
  description,
  visited,
  onPress,
}) => (
  <View style={styles.card}>
    <View style={styles.cardContent}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: img }} style={styles.image} />
      </View>
      <View style={styles.rightContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>

          <Text
            style={{
              fontSize: 12,
              marginTop: 2,
              marginBottom: 10,
              fontWeight: "300",
            }}
          >
            <Ionicons name="time" size={14} color="#000" />
            {" " + visited}
          </Text>
          <Text style={styles.description}>{description}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={visitLocation}>
            <Text style={styles.btnText}>View location</Text>
            <Ionicons name="navigate-circle-outline" size={22} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>

    <Ionicons
      style={styles.delete}
      onPress={onPress}
      name="trash-outline"
      color="red"
    />
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
    height: 150,
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
    width: 140,
    height: 40,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  btnText: {
    color: "white",
    paddingRight: 3,
    fontWeight: "500",
    fontSize: 14,
  },
  delete: {
    position: "absolute",
    top: 15,
    right: 5,
    paddingRight: 3,
    fontWeight: "500",
    fontSize: 22,
  },
});

export default LocationContainer;
