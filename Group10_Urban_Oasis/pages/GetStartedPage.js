import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

export const GetStartedPage = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Get Started Page</Text>
      {/* button component added temporarily for simplicity, can be exchanged with a Pressable later */}
      <Button title="Log in" />
      <Button title="Register" />
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
