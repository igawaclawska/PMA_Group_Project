import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Button, Alert } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Buttons from "../../components/Buttons";

function ViewLocation(props) {
  const TAB_ICON = {
    star_empty: "star-outline",
    star_filled: "star",
  };
  const placeholderText =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

  const [imageURL, setImageURL] = useState(null);
  const [locationTitle, setLocationTitle] = useState("Hidden Location #1");
  const [detailsTitle, setDetailsTitle] = useState("Wonderful hidden oasis");
  const [detailsDescription, setDetailsDescription] = useState(placeholderText);

  useEffect(() => {
    setImageURL(
      "https://images.nationalgeographic.org/image/upload/t_edhub_resource_key_image_large/v1652303287/EducationHub/photos/earth-day.jpg"
    );
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{locationTitle}</Text>
      </View>
      <View style={styles.imgContainer}>
        <Image source={{ uri: imageURL }} style={styles.image} />
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.detailsTitleContainer}>
          <Text style={styles.detailsTitle}>{detailsTitle}</Text>
          <AntDesign name="staro" size={24} color="black" />
        </View>
        <Text style={styles.detailsDescription}>{placeholderText}</Text>
        <View style={styles.buttonContainer}>
          <Buttons
            title={"Take me there"}
            onPress={() => Alert.alert("works!")}
          ></Buttons>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgContainer: {
    flex: 1.5,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  titleContainer: {
    width: "100%",
    height: 150,
    paddingTop: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 34,
    fontWeight: "bold",
  },
  detailsContainer: {
    flex: 2,
    paddingHorizontal: 20,
    paddingVertical: 25,
  },
  detailsTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  detailsTitle: {
    fontSize: 28,
    fontWeight: "600",
    paddingRight: 10,
  },
  detailsDescription: {
    fontSize: 18,
    fontWeight: "300",
    paddingVertical: 15,
    lineHeight: 26,
  },
  buttonContainer: {
    width: "60%",
    alignSelf: "center",
    paddingTop: 20,
  },
});

export default ViewLocation;
