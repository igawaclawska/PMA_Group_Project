import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Button } from "react-native";

export const WelcomePage = ({ navigation }) => {
  const clickNavigate = () => {
    navigation.navigate("Log in or Sign Up");
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image
        style={styles.image}
        source={require("../../assets/images/image-1.jpg")}
      />
      <Text>Welcome to Urban Oasis Finder</Text>
      <Text>
        Discover stunning hidden areas shared by the community and experience
        your city like never before...
      </Text>
      <Text>
        If you are creating a new account, Terms & Conditions and Privacy Policy
        will apply.
      </Text>
      {/* button component added temporarily for simplicity, can be exchanged with a Pressable later.*/}
      <Button title="Get Started" onPress={clickNavigate} />
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

  image: {
    flex: 2,
    maxHeight: 360,
    width: 400,
    resizeMode: "cover",
  },
});
