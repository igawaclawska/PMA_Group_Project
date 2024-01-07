import React, { useEffect, useState, createContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Location from "expo-location";
import defaultLocationsDataJson from "../data/defaultLocationsDataJson.json";

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
  const [defaultLocations, setDefaultLocations] = useState([]);
  const [destinationCoords, setDestinationCoords] = useState(null);
  const [directions, setDirections] = useState(null);
  const [recentlyVisited, setRecentlyVisited] = useState([]);
  const [draggableMarkerCoord, setDraggableMarkerCoord] = useState({
    latitude: 55.60866491013769,
    longitude: 12.34104207156517,
  });
  const [currentPosition, setCurrentPosition] = useState(null);
  const [draggableMarkerCoordCurrent, setDraggableMarkerCoordCurrent] =
    useState(null);
  const [region, setRegion] = useState({});

  // Function to request location permission and update current position
  const requestLocationPermissionAndUpdatePosition = async () => {
    try {
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

      // Get current position for the draggable marker as its starting point
      setDraggableMarkerCoordCurrent({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
    } catch (error) {
      console.error("Error updating current position:", error);
    }
  };

  // useEffect to fetch initial location immediately upon app start
  useEffect(() => {
    requestLocationPermissionAndUpdatePosition();
  }, []); // Run this effect only once when the component mounts

  // useEffect to start the interval for updating the current position every 5 seconds
  useEffect(() => {
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

    // Update the current position every 5 seconds (adjust the interval as needed)
    const locationUpdateInterval = setInterval(updateCurrentPosition, 5000);

    // Clean up the interval when the component is unmounted
    return () => clearInterval(locationUpdateInterval);
  }, []); // Run this effect only once when the component mounts

  //fetch default locations data from async storage
  useEffect(() => {
    fetchDataFromAsyncStorage();
    console.log(`default locations: ${defaultLocations}`);
  }, [defaultLocations.length]);

  const fetchDataFromAsyncStorage = async () => {
    try {
      const data = await AsyncStorage.getItem("ALL_LOCATIONS");
      if (data !== null) {
        setDefaultLocations(JSON.parse(data));
      } else {
        return loadInitialData();
      }
    } catch (error) {
      console.log(error);
    }
  };

  //add json data to Async Storage if no default locations data available
  const loadInitialData = async () => {
    try {
      await AsyncStorage.setItem(
        "ALL_LOCATIONS",
        JSON.stringify(defaultLocationsDataJson)
      );
      const initialData = await AsyncStorage.getItem("ALL_LOCATIONS");
      setDefaultLocations(JSON.parse(initialData));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <LocationContext.Provider
      value={{
        defaultLocations,
        setDefaultLocations,
        destinationCoords,
        setDestinationCoords,
        directions,
        setDirections,
        recentlyVisited,
        setRecentlyVisited,
        draggableMarkerCoord,
        setDraggableMarkerCoord,
        draggableMarkerCoordCurrent,
        setDraggableMarkerCoordCurrent,
        currentPosition,
        setCurrentPosition,
        region,
        setRegion,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
