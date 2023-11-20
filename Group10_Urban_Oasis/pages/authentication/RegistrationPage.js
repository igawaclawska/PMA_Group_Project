import { StatusBar } from "expo-status-bar";
import { useState, useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { AuthenticationContext } from "../../authentication/AuthenticationContext";
import { AuthenticationInputField } from "../../components/AuthenticationInputField";
import { CustomButton } from "../../components/CustomButton";

export const RegistrationPage = ({ navigation }) => {
  const { onRegister, error, setError, isLoading } = useContext(
    AuthenticationContext
  );
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeated, setPasswordRepeated] = useState("");

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.pageContentWrapper}>
        <Text style={[styles.boldFont, styles.h2, styles.darkGrayText]}>
          Create a new user
        </Text>
        <View>
          <AuthenticationInputField
            hiddenInput={false}
            input={email}
            setInput={setEmail}
            placeholder={"Email"}
          />
          <AuthenticationInputField
            hiddenInput={true}
            input={password}
            setInput={setPassword}
            placeholder={"Password"}
          />
          <AuthenticationInputField
            hiddenInput={true}
            input={passwordRepeated}
            setInput={setPasswordRepeated}
            placeholder={"Repeat Password"}
          />
        </View>

        {/* Error message temporarily disabled */}
        {/* {error && (
        <Text variant="error" style={styles.error}>
          {error}
        </Text>
      )} */}
        <View style={styles.btnWrapper}>
          <CustomButton
            value={"Register"}
            onPress={() => onRegister(email, password, passwordRepeated)}
          />
        </View>
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

  btnWrapper: {
    width: "100%",
    alignItems: "stretch",
  },

  pageContentWrapper: {
    width: "100%",
    gap: 24,
  },

  boldFont: {
    fontWeight: 700,
  },

  h2: {
    fontSize: 20,
  },

  darkGrayText: {
    color: "#1A1C29",
  },
});
