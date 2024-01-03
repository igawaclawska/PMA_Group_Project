import React from "react";
import { useContext } from "react";
import { LocationContext } from "../location/locationContext";
import { Callout, Marker } from "react-native-maps";
import { Alert, Text, Image, StyleSheet, View } from "react-native";
import { handleTakeMeThere } from "./Map";

export const CustomMarker = ({
  type,
  coordinate,
  title,
  description,
  onPress,
  uri,
}) => {
  const {
    draggableMarkerCoord,
    setDraggableMarkerCoord,
    draggableMarkerCoordCurrent,
    setDraggableMarkerCoordCurrent,
    currentPosition,
  } = useContext(LocationContext);

  //Renders marker based on its "type" prop
  const renderMarker = (type) => {
    if (type === "draggable") {
      return (
        //Dragable marker with a hardcoded initial position
        <Marker
          draggable
          coordinate={draggableMarkerCoord}
          onDragEnd={(e) => setDraggableMarkerCoord(e.nativeEvent.coordinate)}
          pinColor="#008000"
        />
      );
    } else if (
      type === "draggableCurrentPosition" &&
      currentPosition !== null
    ) {
      return (
        //Dragable marker. Current user position is its initial position
        <Marker
          draggable
          coordinate={draggableMarkerCoordCurrent}
          onDragEnd={(e) =>
            setDraggableMarkerCoordCurrent(e.nativeEvent.coordinate)
          }
          pinColor="#008000"
        />
      );
    } else if (type === "currentPosition" && currentPosition !== null) {
      return (
        //Get current position of user
        <Marker
          title="You are here"
          description="Right here..."
          pinColor="#0000FF"
          coordinate={{
            latitude: currentPosition.latitude,
            longitude: currentPosition.longitude,
          }}
        />
      );
    } else if (type === "addedLocation") {
      return (
        // Basic Marker to display added locations (no callout support)
        <Marker
          coordinate={coordinate}
          title={title}
          description={description}
          pinColor={"#FFC0CB"}
        />
      );
    } else if (type === "addedLocationWithCallout") {
      return (
        // Marker to display added locations (supports callout)
        <Marker
          pinColor="#D4AFEA"
          coordinate={coordinate}
          title={title}
          description={description}
        >
          {/* Callout support its own onPress but does not support having buttons and related elements placed inside it */}
          <Callout
            onPress={
              onPress
                ? onPress
                : () => Alert.alert("Location view to be implemented")
            }
          >
            <View style={styles.calloutContentWrapper}>
              <Image
                style={styles.calloutImage}
                source={
                  //use uri from the location object or hardcoded
                  uri
                    ? { uri: uri, isStatic: true }
                    : {
                        uri: "https://images.nationalgeographic.org/image/upload/t_edhub_resource_key_image_large/v1652303287/EducationHub/photos/earth-day.jpg",
                      }
                }
              ></Image>
              <Text style={styles.calloutTitle}>{title}</Text>
              {description && (
                <Text style={styles.calloutDescription}>{description}</Text>
              )}
              <Text style={styles.calloutClickToAction}>Open location</Text>
            </View>
          </Callout>
        </Marker>
      );
    }
  };

  return renderMarker(type);
};

const styles = StyleSheet.create({
  calloutImage: {
    width: "100%",
    height: 80,
    marginVertical: 6,
    borderRadius: 4,
  },

  calloutTitle: {
    fontWeight: "600",
    fontSize: 14,
    color: "#1A1C29",
    marginBottom: 2,
  },

  calloutDescription: {
    fontSize: 12,
    color: "#797979",
    marginBottom: 4,
  },

  calloutClickToAction: {
    fontWeight: "600",
    textAlign: "center",
    fontSize: 14,
    color: "#3E9C27",
    textDecorationLine: "underline",
    marginTop: 4,
    marginBottom: 8,
  },

  calloutContentWrapper: {
    width: 120,
  },
});
