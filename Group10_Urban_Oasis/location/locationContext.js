import React, { useEffect, useState, createContext } from "react";
import * as Location from "expo-location";
import defaultLocationsData from "../data/defaultLocationsData";

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
  const [defaultLocations, setDefaultLocations] = useState([]);
  const [draggableMarkerCoord, setDraggableMarkerCoord] = useState({
    latitude: 55.60866491013769,
    longitude: 12.34104207156517,
  });
  const [currentPosition, setCurrentPosition] = useState(null);
  const [draggableMarkerCoordCurrent, setDraggableMarkerCoordCurrent] =
    useState(null);

  useEffect(() => {
    // Request permission to access the device's location
    const requestLocationPermission = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.error("Permission to access location was denied");
        return;
      }
    };

    // Function to update the current position
    const updateCurrentPosition = async () => {
      try {
        let location = await Location.getCurrentPositionAsync({});
        setCurrentPosition({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        });
      } catch (error) {
        console.error("Error updating current position:", error);
      }
    };

    // Initial request for location permission
    requestLocationPermission();

    // Update the current position every 5 seconds (adjust the interval as needed)
    const locationUpdateInterval = setInterval(updateCurrentPosition, 5000);

    // Clean up the interval when the component is unmounted
    return () => clearInterval(locationUpdateInterval);
  }, []); // Run this effect only once when the component mounts

  useEffect(() => {
    setDefaultLocations(defaultLocationsData);
  }, []);

  return (
    <LocationContext.Provider
      value={{
        defaultLocations,
        setDefaultLocations,
        draggableMarkerCoord,
        setDraggableMarkerCoord,
        draggableMarkerCoordCurrent,
        setDraggableMarkerCoordCurrent,
        currentPosition,
        setCurrentPosition,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
