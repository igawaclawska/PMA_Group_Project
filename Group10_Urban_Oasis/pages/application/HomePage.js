import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MapView from 'react-native-maps';

// map import goes here // 

const defaultLoactions = [
{ title: 'test locatation',
location: {

  "latitude": 10.453921831373197,
  "longitude": 55.61089535500283,
}

, description: 'this is just a test'
}

]

export const HomePage = () => {

const onRegionChange = (region) =>{

  console.log(region);
}



  return (
    
   <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Map view goes Here</Text> 
      <MapView style={styles.map}initialRegion={{ latitude: 55.58376336969238, latitudeDelta: 2.1949835082157563, longitude: 10.4347135309621, longitudeDelta: 2.4010375513883844} } onRegionChange={onRegionChange}></MapView>
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
  map: {
   
    width: '100%',
    height: '100%'
  }
});
