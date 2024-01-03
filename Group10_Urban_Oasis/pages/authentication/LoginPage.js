import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Alert,
  KeyboardAvoidingView,
} from "react-native";
import { CustomInputField } from "../../components/CustomInputField";
import { useState, useContext } from "react";
import { AuthenticationContext } from "../../authentication/AuthenticationContext";
import { CustomButton } from "../../components/CustomButton";
import mainContainerStyle from "../../globalStyles/mainContainer";
import typography from "../../globalStyles/typography";

export const LoginPage = ({ navigation }) => {
  const { onLogin, error, setError, isLoading } = useContext(
    AuthenticationContext
  );
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const clickNavigateToSignUp = () => {
    navigation.navigate("Sign up");
  };

  return (
    <KeyboardAvoidingView
      style={mainContainerStyle}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <StatusBar style="auto" />
      <View style={styles.pageContentWrapper}>
        <Text style={[typography.boldFont, typography.h2]}>Log in</Text>
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
        </View>
        {/* TODO: Implement a sophisticated error message */}

        <View>
          <CustomButton
            value={"Log in"}
            onPress={() => onLogin(email, password)}
          />

          <CustomButton
            value={"Don't have an account? Sign up"}
            theme={"secondary"}
            onPress={clickNavigateToSignUp}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  pageContentWrapper: {
    width: "100%",
    gap: 24,
  },
});
