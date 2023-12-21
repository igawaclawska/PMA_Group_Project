import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { CustomButton } from "../../components/CustomButton";
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
          <View style={styles.singleButtonWrapper}>
            <CustomButton onPress={clickNavigateBack} value={"Back"} />
          </View>
          <View style={styles.buttonWrapper}>
            <Pressable>
              <Ionicons
                onPress={toggleCamera}
                name="sync"
                size={40}
                color="white"
              />
            </Pressable>
            <CustomRoundButton />
            <Pressable>
              <Ionicons
                onPress={clickNavigateToPhoto}
                name="image"
                size={38}
                color="white"
              />
            </Pressable>
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
  },
});
