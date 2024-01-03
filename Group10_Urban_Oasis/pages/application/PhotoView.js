import React from "react";
import { View, Text } from "react-native";
import { CustomButton } from "../../components/CustomButton";
import mainContainerStyle from "../../globalStyles/mainContainer";

export const PhotoView = ({ navigation }) => {
  const clickNavigateBack = () => {
    navigation.goBack();
  };

  return (
    <View style={mainContainerStyle}>
      <Text>Photo Preview Page</Text>
      <CustomButton onPress={clickNavigateBack} value={"Go back"} />
    </View>
  );
};
