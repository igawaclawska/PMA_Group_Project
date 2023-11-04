import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

export const LoginPage = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Login Page</Text>
      {/* button component added temporarily for simplicity, can be exchanged with a Pressable later */}
      <Button title="Log in" />
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
