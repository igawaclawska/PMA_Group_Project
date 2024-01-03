import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Map } from "../../components/Map";
import mainContainerStyle from "../../globalStyles/mainContainer";

export const Explore = ({ navigation }) => {
  return (
    <View style={[mainContainerStyle, styles.container]}>
      <StatusBar style="auto" />
      <View>
        <Map navigation={navigation} screenType={"Explore"} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 46,
  },
});
