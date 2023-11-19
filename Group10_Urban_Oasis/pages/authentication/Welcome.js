import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { LocationImage } from "../../components/LocationImage";

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
        <Button title="Get Started" onPress={clickNavigate} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  bottomContainer: {
    flex: 1,
    paddingVertical: 40,
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
    lineHeight: 24,
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
