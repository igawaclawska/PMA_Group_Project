import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

export const HomePage = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Home Page</Text>
      {/* button component added temporarily for simplicity, can be exchanged with a Pressable later.
      Logout will be later moved to the user settings page */}
      <Button title="Log out" />
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
