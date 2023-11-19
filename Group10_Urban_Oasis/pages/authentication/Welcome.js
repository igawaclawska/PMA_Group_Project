import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { LocationImage } from "../../components/LocationImage";
import { Button2 } from "../../components/Button2";

export const WelcomePage = ({ navigation }) => {
  const clickNavigate = () => {
    navigation.navigate("Log in or Sign Up");
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.imageWrapper}>
        <LocationImage path={require("../../assets/images/image-1.jpg")} />
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.appDescriptionContainer}>
          <Text style={[styles.h1, styles.boldFont, styles.darkGrayText]}>
            Welcome to Urban Oasis Finder
          </Text>
          <Text
            style={[
              styles.paragraph,
              styles.centeredText,
              styles.lightGrayText,
            ]}
          >
            Discover stunning hidden areas shared by the community and
            experience your city like never before...
          </Text>
        </View>
        {/* button component added temporarily for simplicity, can be exchanged with a Pressable later.*/}
        <Button2 onPress={clickNavigate}>Get Started</Button2>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 46,
    paddingHorizontal: 12,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
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

  h1: {
    fontSize: 24,
  },

  paragraph: {
    fontSize: 16,
    lineHeight: 21,
  },

  boldFont: {
    fontWeight: 700,
  },

  centeredText: {
    textAlign: "center",
  },

  darkGrayText: {
    color: "#1A1C29",
  },

  lightGrayText: {
    color: "#797979",
  },
});
