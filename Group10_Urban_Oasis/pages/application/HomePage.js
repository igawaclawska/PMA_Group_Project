import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

// map import goes here // 



export const HomePage = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Home Page</Text>
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
