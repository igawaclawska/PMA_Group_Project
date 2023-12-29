import React, { useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { useContext } from "react";
import { useIsFocused } from "@react-navigation/native";
import { Platform } from "react-native";
import { CameraContext } from "../../camera/cameraContext";
import { Camera } from "expo-camera";
import mainContainerStyle from "../../globalStyles/mainContainer";
import { CustomRoundButton } from "../../components/CustomRoundButton";
import { Ionicons } from "@expo/vector-icons";

export const CameraView = ({ navigation }) => {
  const isAndroid = Platform.OS === "android";
  const isFocused = useIsFocused();

  const { type, uri, setCamera, toggleCamera, snapAndSave } =
    useContext(CameraContext);

  const showAlert = () =>
    Alert.alert(
      "Photo taken",
      "Photo has been taken and saved to your gallery",
      [
        {
          text: "Use this photo",
          onPress: () => {
            clickNavigateBack(), console.log("Use this photo Pressed");;
          },
        },
        {
          text: "Take another photo",
          onPress: () => console.log("Take another photo Pressed"),
        },
      ]
    );

  const clickNavigateBack = () => {
    navigation.goBack();
  };

  const clickTakeAPhoto = async () => {
    try {
      await snapAndSave();
    } catch (error) {
      console.log(error);
    } finally {
      console.log(uri);
      showAlert();
    }
  };

  return (
    <>
      {isFocused && (
        <Camera
          style={[mainContainerStyle, styles.container]}
          ref={(ref) => setCamera(ref)}
          type={type}
          useCamera2Api={isAndroid}
          ratio="1:2"
        >
          <View style={styles.buttonWrapper}>
            <Ionicons
              onPress={clickNavigateBack}
              name="close-circle-outline"
              size={40}
              color="white"
            />
            <CustomRoundButton onPress={clickTakeAPhoto} />
            <Ionicons
              onPress={toggleCamera}
              name="sync"
              size={40}
              color="white"
            />
          </View>
        </Camera>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 46,
    paddingBottom: 24,
    alignItems: "center",
    justifyContent: "flex-end",
    flex: 1,
  },

  buttonWrapper: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 16,
  },
});
