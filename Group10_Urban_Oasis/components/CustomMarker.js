import React from "react";
import { useContext } from "react";
import { LocationContext } from "../location/locationContext";
import { Callout, Marker } from "react-native-maps";
import { Alert, Text, Image } from "react-native";

export const CustomMarker = ({
  type,
  coordinate,
  title,
  description,
  onPress,
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
    } else if (type === "draggableCurrentPosition") {
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
    } else if (type === "currentPosition") {
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
            <Image
              style={{ width: "100%", height: 80, marginTop: 7 }}
              source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
            ></Image>
            <Text>{title}</Text>
            {description && <Text>{description}</Text>}
            <Text>Click to Display location</Text>
          </Callout>
        </Marker>
      );
    }
  };

  return renderMarker(type);
};
