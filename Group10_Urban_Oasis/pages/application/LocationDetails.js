import React, { useState, useEffect, useContext } from "react";
import { LocationContext } from "../../location/locationContext";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Alert, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Buttons from "../../components/TakeMeThereButton";
import { useRoute } from "@react-navigation/native";

function ViewLocation({ navigation }) {
  const {
    currentPosition,
    destinationCoords,
    setDestinationCoords,
    directions,
    setDirections,
    recenlyVisited,
    setRecentlyVisited,
  } = useContext(LocationContext);

  const handleTakeMeThere = async ({ location, title, description, image }) => {
    console.log(recenlyVisited);
    console.log(image);

    // set currently pressed location

    setDestinationCoords({
      latitude: location.latitude,
      longitude: location.longitude,
    });

    // push pressed items to recently visited array
    let visitDate = new Date().toDateString();
    const visited = {
      title: title,
      description: description,
      image: image,
      coordinate: location,
      date: visitDate,
    };

    const updatedRecentlyVisited = [...recenlyVisited, visited];
    setRecentlyVisited(updatedRecentlyVisited);

    console.log("Current Position:", currentPosition);
    console.log("Destination Coordinates:", destinationCoords);
  };

  useEffect(() => {
    // Check if destinationCoords is updated
    if (destinationCoords) {
      // Execute logic related to destinationCoords update
      console.log("Destination Coordinates Updated:", destinationCoords);

      // Call any additional functions or trigger navigation here
      // For example, you can fetch directions or trigger navigation
      // Note: The following logic is just an example, modify it based on your requirements
      const fetchData = async () => {
        if (currentPosition && destinationCoords) {
          try {
            const apiKey = "AIzaSyAMZ6HuwBRZ8AIrWYuM8b6itoCpH-4c6WY"; // Replace with your Google Maps API key
            const origin = `${currentPosition.latitude},${currentPosition.longitude}`;
            const destination = `${destinationCoords.latitude},${destinationCoords.longitude}`;
            const apiUrl = `https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&key=${apiKey}`;

            const response = await fetch(apiUrl);
            const data = await response.json();

            if (data.status === "OK" && data.routes.length > 0) {
              const route = data.routes[0];
              const overviewPolyline = route.overview_polyline.points;

              setDirections(overviewPolyline);
            } else {
              console.error("Error fetching directions:", data.status);
            }
          } catch (error) {
            console.error("Error fetching directions:", error);
          }
        }
      };

      fetchData();
    }
  }, [destinationCoords, currentPosition, setDirections, navigation]);

  const clickNavigateBack = () => {
    navigation.goBack();
  };

  // this is used to get the data from the CustomMarker component in Map.js
  const route = useRoute();
  const { location } = route.params;

  const [imageURL, setImageURL] = useState(null);
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    setImageURL(
      "https://images.nationalgeographic.org/image/upload/t_edhub_resource_key_image_large/v1652303287/EducationHub/photos/earth-day.jpg"
    );
  }, []);

  const changeFavorite = () => {
    setFavorite(!favorite);
  };

  return (
    <View style={styles.outerContainer}>
      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <Image
            source={location.uri ? { uri: location.uri } : { uri: imageURL }}
            style={styles.image}
          />
          <Pressable onPress={changeFavorite} style={styles.favContainer}>
            <Image
              source={
                favorite
                  ? require("../../assets/images/fav_filled.png")
                  : require("../../assets/images/fav_noFill.png")
              }
              style={styles.fav}
            />
          </Pressable>
        </View>

        <View style={styles.detailsContainer}>
          <Pressable style={styles.closeIcon} onPress={clickNavigateBack}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </Pressable>
          <View style={styles.detailsTitleContainer}>
            <Text style={styles.detailsTitle}>{location.title}</Text>
          </View>
          <Text style={styles.detailsDescription}>{location.description}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Buttons
            title={"Take me there"}
            onPress={() => {
              handleTakeMeThere({
                location: location.location,
                title: location.title,
                description: location.description,
                image: location.uri ? location.uri : imageURL,
              });

              //set timeout allowing directions to be updated
              // before navigating back to map...

              setTimeout(() => navigation.goBack(), 200);
            }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "white",
    zIndex: 2,
  },
  container: {
    flex: 1,
  },
  closeIcon: {
    alignSelf: "flex-start",
    marginBottom: 8,
  },
  imgContainer: {
    flex: 1.5,
    justifyContent: "flex-start",
    alignItems: "center",
    position: "relative",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  favContainer: {
    position: "absolute",
    bottom: 10,
    right: 10,
    resizeMode: "contain",
    justifyContent: "center",
    alignItems: "center",
  },
  fav: {
    width: 55,
    height: 55,
  },
  detailsContainer: {
    flex: 2,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  detailsTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  detailsTitle: {
    fontSize: 30,
    fontWeight: "700",
    paddingRight: 10,
  },
  detailsDescription: {
    fontSize: 18,
    fontWeight: "300",
    paddingVertical: 15,
    lineHeight: 28,
    color: "#18191A",
  },
  buttonContainer: {
    width: "80%",
    height: 120,
    alignSelf: "center",
    paddingTop: 20,
  },
});

export default ViewLocation;
