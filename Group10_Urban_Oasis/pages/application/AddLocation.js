import { useState, useContext } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Alert } from "react-native";
import { CustomButton } from "../../components/CustomButton";
import { AuthenticationInputField } from "../../components/AuthenticationInputField";
import { LocationContext } from "../../location/locationContext";
import { Map } from "../../components/Map";
import { Ionicons } from "@expo/vector-icons";
import mainContainerStyle from "../../globalStyles/mainContainer";
import typography from "../../globalStyles/typography";

export const AddLocation = ({ navigation }) => {
  const [locationName, setLocationName] = useState("");
  const [description, setDescription] = useState("");

  const { setDefaultLocations, draggableMarkerCoord } =
    useContext(LocationContext);

  const handleNavigateToExplore = () => {
    navigation.navigate("Explore");
  };

  // https://reactnative.dev/docs/alert
  const createLocationAddedAlert = () =>
    Alert.alert(`Location successfully added!`, "", [
      {
        text: "Go to Explore",
        onPress: () => {
          handleNavigateToExplore(), console.log("Go to Explore Pressed");
        },
        style: "cancel",
      },
      {
        text: "Add new location",
        onPress: () => console.log("Add new location Pressed"),
      },
    ]);

  const addLocation = () => {

    let trimmedLocationName = locationName.trim();
    let trimmedDescription = description.trim();
    
    if (trimmedLocationName.length !== 0) {
      setDefaultLocations(
        (prevLocations) => [
          ...prevLocations,
          {
            title: trimmedLocationName,
            location: {
              latitude: draggableMarkerCoord.latitude,
              longitude: draggableMarkerCoord.longitude,
            },
            description: trimmedDescription,
          },
        ],
        setLocationName(""), //clear input fields after adding a new location
        setDescription(""),
        createLocationAddedAlert()
      );
    } else {
      Alert.alert("To add a new location, you need to provide its name");
    }
  };

  return (
    <View style={[mainContainerStyle, styles.container]}>
      <StatusBar style="auto" />
      <View style={styles.imageWrapper}>
        <Map />
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.mainContent}>
          <View style={styles.textSection}>
            <Text
              style={[
                typography.h2,
                typography.boldFont,
                typography.darkGrayText,
              ]}
            >
              Add current location to community
            </Text>
            <Text style={[typography.paragraph, typography.lightGrayText]}>
              Lorem ipsum dolor sit amet, adipiscing elit, sed eiusmod tempor
              incididunt.
            </Text>
          </View>
          <View style={styles.inputSection}>
            <AuthenticationInputField
              hiddenInput={false}
              placeholder={"Location name"}
              input={locationName}
              setInput={setLocationName}
              icon={
                <Ionicons name="md-location-sharp" size={20} color="#9e9e9e" />
              }
            />
            <AuthenticationInputField
              hiddenInput={false}
              placeholder={"Description"}
              input={description}
              setInput={setDescription}
              isMultiline={true}
              icon={
                <Ionicons
                  name="chatbubble-ellipses-sharp"
                  size={20}
                  color="#9e9e9e"
                />
              }
            />
            <View style={styles.uploadButtonsSection}>
              <View style={styles.uploadButtonWrapper}>
                <CustomButton
                  value={"Upload image"}
                  theme={"secondary"}
                  icon={
                    <Ionicons name="ios-cloud-upload" size={24} color="black" />
                  }
                />
              </View>
              <View style={styles.uploadButtonWrapper}>
                <CustomButton
                  value={"Open camera"}
                  theme={"secondary"}
                  icon={<Ionicons name="camera" size={24} color="black" />}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.buttonWrapper}>
          <CustomButton onPress={addLocation} value={"Add location"} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 46,
  },

  imageWrapper: {
    flex: 3,
  },

  uploadButtonsSection: {
    flexDirection: "row",
    gap: 8,
  },

  uploadButtonWrapper: {
    flex: 1,
  },

  contentContainer: {
    flex: 7,
    width: "100%",
    paddingVertical: 32,
    justifyContent: "space-between",
  },

  mainContent: {
    gap: 24,
  },

  textSection: {
    width: "100%",
    gap: 12,
  },

  inputSection: {
    width: "100%",
  },

  buttonWrapper: {
    width: "100%",
  },
});
