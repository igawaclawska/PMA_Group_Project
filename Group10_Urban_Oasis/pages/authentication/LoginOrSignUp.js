import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Alert, Pressable } from "react-native";
import { LocationImage } from "../../components/LocationImage";
import { CustomButton } from "../../components/CustomButton";
import { Ionicons } from "@expo/vector-icons";
import mainContainerStyle from "../../globalStyles/mainContainer";
import typography from "../../globalStyles/typography";

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
    <View style={[mainContainerStyle, styles.container]}>
      <StatusBar style="auto" />
      <View style={styles.imageWrapper}>
        <LocationImage path={require("../../assets/images/image-3.jpg")} />
      </View>
      <View style={styles.bottomContainer}>
        <Pressable style={styles.closeIcon} onPress={clickNavigateBack}>
          <Ionicons name="close-circle" size={24} color="gray" />
        </Pressable>
        <View style={styles.textContainer}>
          <Text style={[typography.h2, typography.boldFont]}>
            Log in or Sign up
          </Text>
          <Text
            style={[
              typography.paragraph,
              typography.centeredText,
              typography.lightGrayText,
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
            typography.paragraphSmall,
            typography.centeredText,
            typography.lightGrayText,
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
    paddingTop: 46,
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

  closeIcon: {
    alignSelf: "flex-end",
  },
});
