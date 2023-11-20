import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Alert, Pressable } from "react-native";
import { LocationImage } from "../../components/LocationImage";
import { CustomButton } from "../../components/CustomButton";
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
        <View style={styles.buttonsContainer}>
          <CustomButton
            value={"Continue with Email"}
            onPress={clickNavigateToLogIn}
          />
          {/* TODO: Implement these login functionlities */}
          <CustomButton
            value={"Continue with Phone"}
            theme={"secondary"}
            onPress={handleAlert}
          />
          <View style={styles.buttonsContainerHorizontal}>
            <View style={styles.horizontalButtonWrapper}>
              <CustomButton
                icon={<Ionicons name="logo-google" size={18} color="black" />}
                theme={"secondary"}
                onPress={handleAlert}
              />
            </View>
            <View style={styles.horizontalButtonWrapper}>
              <CustomButton
                icon={<Ionicons name="md-logo-apple" size={18} color="black" />}
                theme={"secondary"}
                onPress={handleAlert}
              />
            </View>
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
    width: "100%",
    paddingVertical: 32,
    justifyContent: "space-between",
  },

  textContainer: {
    alignItems: "center",
    gap: 16,
  },

  buttonsContainer: {},

  buttonsContainerHorizontal: {
    flexDirection: "row",
    gap: 8,
  },

  horizontalButtonWrapper: {
    flex: 1,
  },

  h2: {
    fontSize: 20,
  },

  paragraph: {
    fontSize: 16,
    lineHeight: 21,
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
    alignSelf: "flex-end",
  },
});
