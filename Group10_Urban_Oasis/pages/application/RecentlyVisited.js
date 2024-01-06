import { StatusBar } from "expo-status-bar";
import { useState, useContext } from "react";
import { FlatList, StyleSheet, Text, View, SafeAreaView } from "react-native";
import { LocationContext } from "../../location/locationContext";

import LocationContainer from "../../components/LocationContainer";

export const RecentlyVisited = () => {
  const [locationData, setLocationData] = useState([
    {
      id: "1",
      title: "Location 1",
      img: "https://images.nationalgeographic.org/image/upload/t_edhub_resource_key_image_large/v1652303287/EducationHub/photos/earth-day.jpg",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
  ]);

  const {
    currentPosition,
    destinationCoords,
    setDestinationCoords,
    directions,
    setDirections,
    recenlyVisited,
    setRecentlyVisited,
  } = useContext(LocationContext);

  const renderLocation = () =>
    recenlyVisited
      .slice()
      .reverse()
      .map((location, index) => (
        <View style={styles.item} key={index}>
          <LocationContainer
            title={location.title}
            img={location.image}
            description={location.description}
            visited={location.date}
            style={styles.locationCard}
          />
        </View>
      ));
  const addNewLocation = () => {
    const newLocation = {
      id: String(locationData.length + 1),
      title: `Location ${locationData.length + 1}`,
      img: "https://images.nationalgeographic.org/image/upload/t_edhub_resource_key_image_large/v1652303287/EducationHub/photos/earth-day.jpg",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    };
    setLocationData([newLocation, ...locationData]);
  };

  // Just need to add the correct data and call the addNewLocation function

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.header}>Recently Visited</Text>

      <View style={styles.listContainer}>
        <FlatList
          data={locationData}
          keyExtractor={(item) => item.id}
          renderItem={renderLocation}
          contentContainerStyle={styles.flatListContainer}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "left",
    justifyContent: "center",
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    paddingVertical: 40,
  },
  listContainer: {
    width: "100%",
    flex: 1,
  },
  flatListContainer: {
    paddingHorizontal: 15,
    paddingTop: 5,
  },
  locationCard: {
    width: "100%",
  },
});
