import { useState, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Alert, Pressable, Image } from "react-native";
import { CustomButton } from "../../components/CustomButton";
import { CustomInputField } from "../../components/CustomInputField";
import { LocationContext } from "../../location/locationContext";
import { CameraContext } from "../../camera/cameraContext";
import { Map } from "../../components/Map";
import { Ionicons } from "@expo/vector-icons";
import { LocationItem } from "../../data/LocationItem"; //Location class used to create location objects
import mainContainerStyle from "../../globalStyles/mainContainer";
import typography from "../../globalStyles/typography";

export const AddLocation = ({ navigation }) => {
  const [locationName, setLocationName] = useState("");
  const [description, setDescription] = useState("");

  const {
    setDefaultLocations,
    draggableMarkerCoord,
    draggableMarkerCoordCurrent,
    setDraggableMarkerCoordCurrent,
    currentPosition,
  } = useContext(LocationContext);

  const { uri, setUri } = useContext(CameraContext);

  const handleNavigateToExplore = () => {
    navigation.navigate("Explore");
  };

  const clickNavigateToCamera = () => {
    navigation.navigate("Camera Screen");
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
    ]);

  const handleGreenMarkerReset = () => {
    //reset draggable marker to its starting point (current position of the user if data available)
    setDraggableMarkerCoordCurrent(
      currentPosition ? currentPosition : draggableMarkerCoord
    );
  };

  const addLocation = async () => {
    let trimmedLocationName = locationName.trim(); //cleans the input up
    let trimmedDescription = description.trim(); //cleans the input up
    let latitude = draggableMarkerCoordCurrent.latitude;
    let longitude = draggableMarkerCoordCurrent.longitude;

    if (trimmedLocationName.length !== 0) {

      let newLocation = new LocationItem(
        trimmedLocationName,
        trimmedDescription,
        latitude,
        longitude,
        uri
      );

      //appends new location object to the defautLocations array
      setDefaultLocations(
        (prevLocations) => [
          ...prevLocations,
          newLocation,
        ]
      );

      try {
        await AsyncStorage.setItem("Location1", JSON.stringify(newLocation));
      } catch (error) {
        // Error saving data
      }

      try {
        let item1 = await AsyncStorage.getItem("Location1");
        console.log(item1);
      } catch (error) {
        console.log(error);
      }

      setLocationName(""),
        setDescription(""),
        console.log(uri),
        createLocationAddedAlert(),
        setUri(null);
      handleGreenMarkerReset();
    } else {
      Alert.alert("To add a new location, you need to provide its name");
      console.log(uri);
    }
  };

  return (
    <View style={[mainContainerStyle, styles.container]}>
      <StatusBar style="auto" />
      <View style={styles.imageWrapper}>
        <Map screenType={"AddLocation"} />
      </View>
      <View style={styles.contentContainer}>
        <Pressable onPress={handleGreenMarkerReset} style={styles.resetButton}>
          <Ionicons name="refresh-circle" size={20} color="#3E9C27" />
          <Text style={styles.resetButtonText}>Reset position</Text>
        </Pressable>
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
              The green marker shows where you are right now. You can add this
              location, or drag the marker to a new spot.
            </Text>
          </View>
          <View style={styles.inputSection}>
            <CustomInputField
              hiddenInput={false}
              placeholder={"Location name"}
              input={locationName}
              setInput={setLocationName}
              icon={
                <Ionicons name="md-location-sharp" size={20} color="#9e9e9e" />
              }
            />
            <CustomInputField
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
            {uri && (
              <Image
                style={styles.imageSection}
                source={{ uri: uri, isStatic: true }}
              />
            )}
            <View style={styles.uploadButtonsSection}>
              <View style={styles.uploadButtonWrapper}>
                <CustomButton
                  onPress={clickNavigateToCamera}
                  value={uri ? "Update picture" : "Take a picture"}
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
    gap: 16,
  },

  textSection: {
    width: "100%",
    gap: 12,
  },

  inputSection: {
    width: "100%",
  },

  imageSection: {
    height: 60,
    width: 60,
    borderRadius: 8,
  },

  buttonWrapper: {
    width: "100%",
  },

  resetButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
    position: "absolute",
    top: 4,
    right: 0,
  },

  resetButtonText: {
    fontWeight: "600",
    color: "#3E9C27",
  },
});
