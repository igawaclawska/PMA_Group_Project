import { StatusBar } from "expo-status-bar";
import { useContext } from "react";
import { AuthenticationContext } from "../../authentication/AuthenticationContext";
import { StyleSheet, View } from "react-native";
import { CustomButton } from "../../components/CustomButton";
import mainContainerStyle from "../../globalStyles/mainContainer";
import { Ionicons } from "@expo/vector-icons";

export const UserAccount = () => {
  const { onLogout } = useContext(AuthenticationContext);

  return (
    <View style={[mainContainerStyle, styles.container]}>
      <StatusBar style="auto" />
      <View style={styles.buttonWrapper}>
        <CustomButton
          value={"Log out"}
          onPress={onLogout}
          icon={<Ionicons name="exit-outline" size={20} color="white" />}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 46,
  },

  buttonWrapper: {
    width: "40%",
  },
});
