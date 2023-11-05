import { StatusBar } from "expo-status-bar";
import { useContext } from "react";
import { AuthenticationContext } from "../../authentication/AuthenticationContext";
import { StyleSheet, Text, View, Button } from "react-native";

export const HomePage = () => {
  const { onLogout } = useContext(AuthenticationContext);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Home Page</Text>
      {/* button component added temporarily for simplicity, can be exchanged with a Pressable later.
      Logout will be later moved to the user settings page */}
      <Button title="Log out" onPress={onLogout} />
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
