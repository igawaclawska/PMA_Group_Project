import React from "react";
import { View, Text } from "react-native";
import { CustomButton } from "../../components/CustomButton";
import mainContainerStyle from "../../globalStyles/mainContainer";

export const Camera = ({ navigation }) => {
  const clickNavigateToPhoto = () => {
    navigation.navigate("Photo View");
  };
  const clickNavigateBack = () => {
    navigation.goBack();
  };

  return (
    <View style={mainContainerStyle}>
      <Text>Camera</Text>
      <CustomButton onPress={clickNavigateToPhoto} value={"Go to photo"} />
      <CustomButton onPress={clickNavigateBack} value={"Back"} />
    </View>
  );
};
