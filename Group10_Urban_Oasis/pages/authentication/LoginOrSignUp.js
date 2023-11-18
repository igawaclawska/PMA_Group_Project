import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Alert } from "react-native";

export const LoginOrSignupPage = ({ navigation }) => {
  const clickNavigateToLogIn = () => {
    navigation.navigate("Log in");
  };

  const handleAlert = () => {
    Alert.alert(
      'This functionality has not been implemented yet. Use "Continue with Email" instead'
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Log in or Sign up</Text>
      <Text>
        Please select your preferred method to continue setting up your account
      </Text>
      {/* button component added temporarily for simplicity, can be exchanged with a Pressable later */}
      <Button title="Continue with Email" onPress={clickNavigateToLogIn} />
      {/* TODO: Implement these login functionlities */}
      <Button title="Continue with Phone" onPress={handleAlert} />
      <Button title="Continue with Google" onPress={handleAlert} />
      <Button title="Continue with Apple" onPress={handleAlert} />
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
