import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Alert, Pressable } from "react-native";
import { LocationImage } from "../../components/LocationImage";
import { Ionicons } from "@expo/vector-icons";

export const LoginOrSignupPage = ({ navigation }) => {
  const clickNavigateToLogIn = () => {
    navigation.navigate("Log in");
  };

  const clickNavigateBack = () => {
    navigation.goBack();
  };

  const handleAlert = () => {
    Alert.alert(
      'This functionality has not been implemented yet. Use "Continue with Email" instead'
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.imageWrapper}>
        <LocationImage path={require("../../assets/images/image-3.jpg")} />
      </View>
      <View style={styles.bottomContainer}>
        <Pressable style={styles.closeIcon} onPress={clickNavigateBack}>
          <Ionicons name="close-circle" size={24} color="gray" />
        </Pressable>
        <View style={styles.textContainer}>
          <Text style={[styles.h2, styles.boldFont, styles.darkGrayText]}>
            Log in or Sign up
          </Text>
          <Text
            style={[
              styles.paragraph,
              styles.centeredText,
              styles.lightGrayText,
            ]}
          >
            Please select your preferred method to continue setting up your
            account
          </Text>
        </View>
        {/* button component added temporarily for simplicity, can be exchanged with a Pressable later */}
        <View style={styles.buttonsContainer}>
          <Button title="Continue with Email" onPress={clickNavigateToLogIn} />
          {/* TODO: Implement these login functionlities */}
          <Button title="Continue with Phone" onPress={handleAlert} />
          <View style={styles.buttonsContainerHorizontal}>
            <Button title="Google" onPress={handleAlert} />
            <Button title="Apple" onPress={handleAlert} />
          </View>
        </View>
        <Text
          style={[
            styles.paragraphSmall,
            styles.centeredText,
            styles.lightGrayText,
          ]}
        >
          If you are creating a new account, Terms & Conditions and Privacy
          Policy will apply.
        </Text>
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

  imageWrapper: {
    flex: 1,
  },

  bottomContainer: {
    flex: 1,
    paddingVertical: 32,
    alignItems: "center",
    justifyContent: "space-between",
  },

  textContainer: {
    alignItems: "center",
    gap: 16,
  },

  buttonsContainer: {
    gap: 2,
  },

  buttonsContainerHorizontal: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 2,
  },

  h2: {
    fontSize: 20,
  },

  paragraph: {
    fontSize: 16,
    lineHeight: 24,
  },

  paragraphSmall: {
    fontSize: 12,
    lineHeight: 18,
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

  closeIcon: {
    width: "100%",
    marginLeft: "auto",
  },
});
