import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { CustomButton } from "../../components/CustomButton";
import { useContext, useState } from "react";
import { useIsFocused } from "@react-navigation/native";
import { Platform } from "react-native";
import { CameraContext } from "../../camera/cameraContext";
import { Camera } from "expo-camera";
import mainContainerStyle from "../../globalStyles/mainContainer";
import { CustomRoundButton } from "../../components/CustomRoundButton";

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
          <View style={styles.buttonWrapper}>
            <View style={styles.singleButtonWrapper}>
              <CustomButton onPress={clickNavigateBack} value={"Back"} />
            </View>
            {/* <View style={styles.singleButtonWrapper}>
              <CustomButton onPress={toggleCamera} value={"Toggle Camera"} />
            </View> */}
            <View style={styles.singleButtonWrapper}>
            <CustomRoundButton />
            </View>
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

  singleButtonWrapper: {
    flex: 1,
  },

  buttonWrapper: {
    width: "100%",
    flexDirection: "row",
  },
});
