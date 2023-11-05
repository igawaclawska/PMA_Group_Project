import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import { AuthenticationInputField } from "../components/AuthenticationInputField";
import { useState, useContext } from "react";
import { AuthenticationContext } from "../authentication/AuthenticationContext";

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

      {/* button component added temporarily for simplicity,
      can be exchanged with a Pressable later */}
      <Button title="Log in" onPress={() =>  onLogin(email, password) } />
      <Button
        title="Don't have an account? Sign up"
        onPress={(clickNavigateToSignUp)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
