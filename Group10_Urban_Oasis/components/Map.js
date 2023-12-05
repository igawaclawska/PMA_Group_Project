import { StyleSheet, Dimensions, Text, Pressable } from "react-native";
import { useState, useRef, useContext } from "react";
import { LocationContext } from "../location/locationContext";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { CustomMarker } from "./CustomMarker";
import * as FileSystem from "expo-file-system";
import { shareAsync } from "expo-sharing";
import mapTheme from "../globalStyles/mapTheme"; //import map style vector

// detect screen width
// source: https://reactnative.dev/docs/dimensions
const windowWidth = Dimensions.get("window").width;

export const Map = ({ screenType }) => {
  const { defaultLocations, currentPosition } = useContext(LocationContext);

  const [count, setCount] = useState(0);
  const mapRef = useRef();

  const showDefaultLocations = () => {
    return defaultLocations.map((item, index) => {
      return (
        <CustomMarker
          key={index}
          //Callout support only on the "Explore" screen
          type={
            screenType === "Explore"
              ? "addedLocationWithCallout"
              : "addedLocation"
          }
          coordinate={item.location}
          title={item.title}
          description={item.description}
        />
      );
    });
  };

  // const onRegionChange = (region) => {
  // console log region change
  // console.log(region);
  // };

  const takeSnapshotAndShare = async () => {
    const snapshot = await mapRef.current.takeSnapshot({
      width: 300,
      height: 300,
      result: "base64",
    });
    console.log(snapshot);
    const uri = FileSystem.documentDirectory + "snapshot.jpg";
    await FileSystem.writeAsStringAsync(uri, snapshot, {
      encoding: FileSystem.EncodingType.Base64,
    });
    await shareAsync(uri);
  };

  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      ref={mapRef}
      style={styles.map}
      // onRegionChange={onRegionChange}
      initialRegion={{
        latitude: 55.71679184033459,
        latitudeDelta: 0.8060190506549958,
        longitude: 12.374072260726619,
        longitudeDelta: 0.884737209682612,
      }}
      customMapStyle={mapTheme}
    >
      {/* Maps through array DefaultLocations and displays markers*/}
      {showDefaultLocations()}

      {/* Get current position of user */}
      {screenType === "Explore" && currentPosition && (
        <CustomMarker type={"currentPosition"} />
      )}

      {screenType === "AddLocation" && currentPosition && (
        //Dragable marker
        <CustomMarker type={"draggableCurrentPosition"} />
      )}

      {/* map overlay, anything could be displayed here */}
      {/* <Text style={styles.mapOverlay}>{draggableMarkerCoord.latitude}</Text> */}
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    width: windowWidth,
    height: "100%",
    zIndex: 1,
  },

  //   mapOverlay: {
  //     position: "absolute",
  //     bottom: 50,
  //     backgroundColor: "#eee",
  //     borderWidth: 0.4,
  //     borderRadius: 5,
  //     padding: 16,
  //     left: "25%",
  //     width: "50%",
  //     textAlign: "center",
  //   },
});
