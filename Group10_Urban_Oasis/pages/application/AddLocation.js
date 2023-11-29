import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { CustomButton } from "../../components/CustomButton";
import { AuthenticationInputField } from "../../components/AuthenticationInputField";
import { LocationImage } from "../../components/LocationImage";
import { Ionicons } from "@expo/vector-icons";
import mainContainerStyle from "../../globalStyles/mainContainer";
import typography from "../../globalStyles/typography";
import { Map } from "../../components/Map";

export const AddLocation = () => {
  const [locationName, setLocationName] = useState("");
  const [description, setDescription] = useState("");

  return (
    <View style={[mainContainerStyle, styles.container]}>
      <StatusBar style="auto" />
      <View style={styles.imageWrapper}>
        <Map/>
        {/* <LocationImage path={require("../../assets/images/location.png")} /> */}
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
          <CustomButton value={"Add location"} />
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
