import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from "react-native";
import { useState, useRef, useContext } from "react";
import { LocationContext } from "../location/locationContext";
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from "react-native-maps";
import * as FileSystem from "expo-file-system";
import { shareAsync } from "expo-sharing";
import mapTheme from "../globalStyles/mapTheme"; //import map style vector

// detect screen width
// source: https://reactnative.dev/docs/dimensions
const windowWidth = Dimensions.get("window").width;

export const Map = () => {
  const {
    defaultLocations,
    setDefaultLocations,
    draggableMarkerCoord,
    setDraggableMarkerCoord,
    currentPosition,
    setCurrentPosition,
  } = useContext(LocationContext);

  const [count, setCount] = useState(0);
  const mapRef = useRef();

  const showDefaultLocations = () => {
    return defaultLocations.map((item, index) => {
      return (
        <Marker
          key={index}
          coordinate={item.location}
          title={item.title}
          description={item.description}
          pinColor={"#FFC0CB"}
        />
      );
    });
  };

  const onRegionChange = (region) => {
    // console log region change
    // console.log(region);
  };

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
      onRegionChange={onRegionChange}
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

      {/* Dragable marker */}
      <Marker
        draggable
        coordinate={draggableMarkerCoord}
        onDragEnd={(e) => setDraggableMarkerCoord(e.nativeEvent.coordinate)}
        pinColor="#008000"
      />

      {/* Marker to display anything insde using callout */}

      <Marker
        pinColor="#D4AFEA"
        coordinate={{
          latitude: 55.671652929902606,
          longitude: 12.398517827563387,
        }}
      >
        {/* Callout support its own onPress but does not support having buttons and related elements placed inside it */}
        <Callout onPress={takeSnapshotAndShare}>
          <Text>Anything can be displayed from here: {count}</Text>
          <Image
            style={{ width: 80, height: 80, marginLeft: 80, marginTop: 7 }}
            source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
          ></Image>
          <Button onPress={() => setCount(count + 1)} title="Click me +" />
          <Button onPress={takeSnapshotAndShare} title="Take SnapShot" />
        </Callout>
      </Marker>

      {/* Get current position of user */}

      {currentPosition && (
        <Marker
          title="You are here"
          description="Right here..."
          pinColor="#0000FF"
          coordinate={{
            latitude: currentPosition.latitude,
            longitude: currentPosition.longitude,
          }}
        />
      )}
      {/* map overlay, anything could be displayed here */}
      <Text style={styles.mapOverlay}>{draggableMarkerCoord.latitude}</Text>
    </MapView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 46,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
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
