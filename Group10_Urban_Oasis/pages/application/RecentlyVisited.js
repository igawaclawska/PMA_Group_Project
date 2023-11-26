import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

import Location from "../../components/location";

export const RecentlyVisited = () => {
  const [locationData, setLocationData] = useState([
    {
      id: "1",
      title: "Location 1",
      img: "https://images.nationalgeographic.org/image/upload/t_edhub_resource_key_image_large/v1652303287/EducationHub/photos/earth-day.jpg",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: "2",
      title: "Location 2",
      img: "https://images.nationalgeographic.org/image/upload/t_edhub_resource_key_image_large/v1652303287/EducationHub/photos/earth-day.jpg",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    // Add more items as needed
  ]);

  const renderLocation = ({ item }) => (
    <View style={styles.item}>
      <Location
        title={item.title}
        img={item.img}
        description={item.description}
        style={styles.locationCard}
      />
    </View>
  );

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
      <TouchableOpacity style={styles.addButton} onPress={addNewLocation}>
        <Text style={styles.addButtonText}>Add New Item</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
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
  addButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "lightblue",
    borderRadius: 5,
    marginBottom: 20,
  },
  addButtonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  locationCard: {
    width: "100%", // Ensure the item container fills the entire width
  },
});
