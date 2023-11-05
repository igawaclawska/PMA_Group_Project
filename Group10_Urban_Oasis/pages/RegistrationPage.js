import { StatusBar } from "expo-status-bar";
import { useState, useContext } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { AuthenticationContext } from "../authentication/AuthenticationContext";
import { AuthenticationInputField } from "../components/AuthenticationInputField";

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
      <Text>Registration Page</Text>
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

      {error && (
        <Text variant="error" style={styles.error}>
          {error}
        </Text>
      )}
      {/* button component added temporarily for simplicity,
      can be exchanged with a Pressable later */}
      <Button
        title="Register"
        onPress={() => onRegister(email, password, passwordRepeated)}
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
