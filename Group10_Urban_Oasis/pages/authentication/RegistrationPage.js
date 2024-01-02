import { StatusBar } from "expo-status-bar";
import { useState, useContext } from "react";
import { StyleSheet, Text, View, KeyboardAvoidingView } from "react-native";
import { AuthenticationContext } from "../../authentication/AuthenticationContext";
import { CustomInputField } from "../../components/CustomInputField";
import { CustomButton } from "../../components/CustomButton";
import mainContainerStyle from "../../globalStyles/mainContainer";
import typography from "../../globalStyles/typography";

export const RegistrationPage = ({ navigation }) => {
  const { onRegister, error, setError, isLoading } = useContext(
    AuthenticationContext
  );
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeated, setPasswordRepeated] = useState("");

  return (
    <KeyboardAvoidingView
      style={mainContainerStyle}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <StatusBar style="auto" />
      <View style={styles.pageContentWrapper}>
        <Text style={[typography.boldFont, typography.h2]}>
          Create a new user
        </Text>
        <View>
          <CustomInputField
            hiddenInput={false}
            input={email}
            setInput={setEmail}
            placeholder={"Email"}
          />
          <CustomInputField
            hiddenInput={true}
            input={password}
            setInput={setPassword}
            placeholder={"Password"}
          />
          <CustomInputField
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
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  btnWrapper: {
    width: "100%",
    alignItems: "stretch",
  },

  pageContentWrapper: {
    width: "100%",
    gap: 24,
  },
});
