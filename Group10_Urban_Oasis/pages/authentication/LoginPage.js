import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Alert } from "react-native";
import { AuthenticationInputField } from "../../components/AuthenticationInputField";
import { useState, useContext } from "react";
import { AuthenticationContext } from "../../authentication/AuthenticationContext";
import { CustomButton } from "../../components/CustomButton";

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
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.pageContentWrapper}>
        <Text style={[styles.boldFont, styles.h2, styles.darkGrayText]}>
          Log in
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 12,
    alignItems: "center",
    justifyContent: "center",
  },

  boldFont: {
    fontWeight: 700,
  },

  h2: {
    fontSize: 20,
  },

  pageContentWrapper: {
    width: "100%",
    gap: 24,
  },

  darkGrayText: {
    color: "#1A1C29",
  },
});
