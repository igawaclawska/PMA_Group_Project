import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import { AuthenticationInputField } from "../../components/AuthenticationInputField";
import { useState, useContext } from "react";
import { AuthenticationContext } from "../../authentication/AuthenticationContext";
import { Button2 } from "../../components/Button2";

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
      <Text>Login Page</Text>
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
      {/* TODO: Implement a sophisticated error message */}

      <View style={styles.btnWrapper}>
        <Button2 onPress={() => onLogin(email, password)}>Log in</Button2>
        <Button2 theme={"secondary"} onPress={clickNavigateToSignUp}>
          Don't have an account? Sign up
        </Button2>
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

  btnWrapper: {
    width: "98%",
  },
});
