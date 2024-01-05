import {
  StyleSheet,
  Dimensions,
  Text,
  Pressable,
  View,
  TouchableOpacity,
} from "react-native";
import { useState, useRef, useContext, useEffect } from "react";
import { LocationContext } from "../location/locationContext";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { CustomMarker } from "./CustomMarker";
import * as FileSystem from "expo-file-system";
import { shareAsync } from "expo-sharing";
import mapTheme from "../globalStyles/mapTheme"; //import map style vector
import { Polyline } from "react-native-maps";
import polyline from "@mapbox/polyline";
import { Ionicons } from "@expo/vector-icons";

// detect screen width
// source: https://reactnative.dev/docs/dimensions
const windowWidth = Dimensions.get("window").width;

export const Map = ({ navigation, screenType }) => {
  const {
    defaultLocations,
    currentPosition,
    destinationCoords,
    setDestinationCoords,
    directions,
    setDirections,
    recenlyVisited,
    setRecentlyVisited,
    region,
    setRegion,
  } = useContext(LocationContext);

  const [count, setCount] = useState(0);

  const mapRef = useRef();

  const showDefaultLocations = () => {
    if (defaultLocations !== null) {
      //prevent errors if defautLocations array is empty
      return defaultLocations?.map((item, index) => {
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
            uri={item.uri}
            onPress={() => {
              navigation.navigate("LocationDetails", {
                location: item,
              });
            }}
          />
        );
      });
    }
  };

  const onRegionChange = (newRegion) => {
    // Update the state with the new region
    setRegion(newRegion);
  };

  const handleRecenter = () => {
    setRegion({
      latitude: currentPosition ? currentPosition.latitude : 55.60866491013769,
      latitudeDelta: 0.004,
      longitude: currentPosition ? currentPosition.longitude : 12.5911277895021,
      longitudeDelta: 0.003,
    });
  };

  const handleZoom = () => {
    // Adjust the zoom level based on the count

    let zoomLevel = 0.004;

    if (count === 0) {
      zoomLevel = 0.003;
    }
    if (count === 1) {
      zoomLevel = 0.012;
    }

    if (count === 2) {
      zoomLevel = 0.044;
    }

    if (count === 3) {
      zoomLevel = 0.088;
    }
    if (count === 4) {
      zoomLevel = 1.0;
    }
    console.log(count);
    console.log(zoomLevel);
    setTimeout(() => {
      setRegion((prevRegion) => ({
        ...prevRegion,
        latitudeDelta: zoomLevel,
        longitudeDelta: zoomLevel,
      }));
    }, 120);
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
    <>
      <View>
        <MapView
          provider={PROVIDER_GOOGLE}
          ref={mapRef}
          style={styles.map}
          //onRegionChangeComplete={onRegionChange}
          // onLongPress={handleRecenter}
          initialRegion={{
            latitude: currentPosition
              ? currentPosition.latitude
              : 55.60866491013769,
            latitudeDelta: 0.004,
            longitude: currentPosition
              ? currentPosition.longitude
              : 12.5911277895021,
            longitudeDelta: 0.003,
          }}
          region={region}
          customMapStyle={mapTheme}
          gestureEnabled={true} // Ensure this property is set to true
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

          {/* Draw Route (Polyline) */}
          {screenType === "Explore" && directions && (
            <Polyline
              coordinates={polyline.decode(directions).map((point) => ({
                latitude: point[0],
                longitude: point[1],
              }))}
              strokeWidth={5}
              strokeColor="#b33b72"
            />
          )}
        </MapView>
      </View>
      {/* control buttons */}
      {screenType === "Explore" && (
        <View style={styles.container}>
          <Pressable
            title="recenter"
            onPress={() => {
              handleRecenter();
              setCount(0);
            }}
            style={styles.recenter}
          >
            <Ionicons name="navigate-circle-outline" size={23} color="#fff" />
          </Pressable>

          <TouchableOpacity
            title="zoomOut"
            onPress={() => {
              setCount(Math.min(4, count + 1));
              handleZoom();
            }}
            style={styles.zoomOut}
            disabled={count === 5 ? true : false}
          >
            <Ionicons name="remove-circle-outline" size={23} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity
            title="zoomIn"
            onPress={() => {
              setCount(Math.max(0, count - 1));
              handleZoom();
            }}
            disabled={count === -1 ? true : false}
            style={styles.zoomIn}
          >
            <Ionicons name="add-circle-outline" size={23} color="#fff" />
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  map: {
    width: windowWidth,
    height: "100%",
    zIndex: 4,
  },

  container: {
    position: "relative",
    flex: 1, // Make sure the container takes the full height
  },

  recenter: {
    position: "absolute",
    bottom: 16,
    left: 10,
    alignSelf: "left", // Center the button horizontally
    backgroundColor: "#000",
    padding: 10,
    borderRadius: 10,
    opacity: 0.7,
  },

  zoomIn: {
    position: "absolute",
    bottom: 16,
    right: 70,
    alignSelf: "right", // Center the button horizontally
    backgroundColor: "#4285F4",
    opacity: 0.7,
    padding: 10,
    borderRadius: 10,
  },
  zoomOut: {
    position: "absolute",
    bottom: 16,
    right: 20,
    alignSelf: "right", // Center the button horizontally
    backgroundColor: "#4285F4",
    opacity: 0.7,
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    position: "relative",
    bottom: 17,
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
