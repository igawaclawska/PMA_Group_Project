import React from "react";
import { View, StyleSheet } from "react-native";
import { useContext, useState } from "react";
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

  const clickNavigateToPhoto = () => {
    navigation.navigate("Photo View");
  };
  const clickNavigateBack = () => {
    navigation.goBack();
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
          <View style={styles.backButtonWrapper}>
            <Ionicons
              onPress={clickNavigateBack}
              name="close-circle-outline"
              size={32}
              color="white"
            />
          </View>
          <View style={styles.buttonWrapper}>
            <Ionicons
              onPress={toggleCamera}
              name="sync"
              size={40}
              color="white"
            />
            <CustomRoundButton />
            <Ionicons
              onPress={clickNavigateToPhoto}
              name="image"
              size={38}
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
    justifyContent: "space-between",
    flex: 1,
  },

  buttonWrapper: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 16,
  },

  backButtonWrapper: {
    width: "100%",
  },
});
