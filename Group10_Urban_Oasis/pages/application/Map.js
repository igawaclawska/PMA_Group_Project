import { StatusBar } from "expo-status-bar";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import { useState, useEffect, useRef } from "react";
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from "react-native-maps";
import * as Location from "expo-location";
import * as FileSystem from "expo-file-system";
import { shareAsync } from "expo-sharing";
import mapTheme from "../../globalStyles/mapTheme"; //import map style vector

// default markers (replace below with json-file)
let defaultLocations = [
  {
    title: "First",
    location: {
      latitude: 55.60866491013769,
      longitude: 12.5911277895021,
    },
    description: "Hidden Location #1",
  },
  {
    title: "Second",
    location: {
      latitude: 55.813353748065204,
      longitude: 12.34104207156517,
    },
    description: "Hidden Location #2",
  },
];

export const Map = () => {
  const [draggableMarkerCoord, setDraggableMarkerCoord] = useState({
    latitude: 55.60866491013769,
    longitude: 12.34104207156517,
  });
  const [currentPosition, setCurrentPosition] = useState(null);
  const [count, setCount] = useState(0);
  const mapRef = useRef();

  useEffect(() => {
    // Request permission to access the device's location
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.error("Permission to access location was denied");
        return;
      }

      // Get the current position
      let location = await Location.getCurrentPositionAsync({});
      setCurrentPosition({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
    })();
  }, []); // Run this effect only once when the component mounts

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
    console.log(region);
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
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Map view goes Here</Text>

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
          <Callout>
            <Text>Anything can be displayed from here: {count}</Text>
            <Image
              style={{ width: 80, height: 80, marginLeft: 80, marginTop: 7 }}
              source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
            ></Image>
            <Button
              onPress={() => setCount(count + 1)}
              title="Click me +"
            ></Button>
            <Button
              onPress={takeSnapshotAndShare}
              title="Take SnapShot"
            ></Button>
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
    width: "100%",
    height: "100%",
    zIndex: 1,
  },

  mapOverlay: {
    position: "absolute",
    bottom: 50,
    backgroundColor: "#eee",
    borderWidth: 0.4,
    borderRadius: 5,
    padding: 16,
    left: "25%",
    width: "50%",
    textAlign: "center",
  },
});
