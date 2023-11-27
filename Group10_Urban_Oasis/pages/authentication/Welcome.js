import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { LocationImage } from "../../components/LocationImage";
import { CustomButton } from "../../components/CustomButton";
import mainContainerStyle from "../../globalStyles/mainContainer";
import typography from "../../globalStyles/typography";

export const WelcomePage = ({ navigation }) => {
  const clickNavigate = () => {
    navigation.navigate("Log in or Sign Up");
  };

  return (
    <View style={[mainContainerStyle, styles.container]}>
      <StatusBar style="auto" />
      <View style={styles.imageWrapper}>
        <LocationImage path={require("../../assets/images/image-1.jpg")} />
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.appDescriptionContainer}>
          <Text style={[typography.h1, typography.boldFont]}>
            Welcome to Urban Oasis Finder
          </Text>
          <Text
            style={[
              typography.paragraph,
              typography.centeredText,
              typography.lightGrayText,
            ]}
          >
            Discover stunning hidden areas shared by the community and
            experience your city like never before...
          </Text>
        </View>
        {/* button component added temporarily for simplicity, can be exchanged with a Pressable later.*/}
        <CustomButton value={"Get Started"} onPress={clickNavigate} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 46,
  },

  bottomContainer: {
    flex: 1,
    width: "100%",
    paddingVertical: 32,
    justifyContent: "space-between",
  },

  appDescriptionContainer: {
    alignItems: "center",
    gap: 16,
  },

  imageWrapper: {
    flex: 2,
  },
});
