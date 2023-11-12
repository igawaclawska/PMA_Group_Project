import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export const LocationDetails = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Location Details Page</Text>
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
