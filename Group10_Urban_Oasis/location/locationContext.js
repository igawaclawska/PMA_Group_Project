import React, { useEffect, useState, createContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Location from "expo-location";
import defaultLocationsDataJson from "../data/defaultLocationsDataJson.json";

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

      //Get current position for the draggable marker as it starting pont
      setDraggableMarkerCoordCurrent({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
    })();
  }, []); // Run this effect only once when the component mounts

  //fetch data from async storage
  useEffect(() => {
    loadInitialData(); //runs only if async storage is empty, adds initial json data to async storage
    fetchDataFromAsyncStorage(); //fetches permanent data from async storage
  }, []);

  const fetchDataFromAsyncStorage = async () => {
    try {
      const data = await AsyncStorage.getItem("ALL_LOCATIONS");
      if (data !== null) {
        setDefaultLocations(JSON.parse(data));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const loadInitialData = async () => {
    if (defaultLocations.length === 0) {
      await AsyncStorage.setItem(
        "ALL_LOCATIONS",
        JSON.stringify(defaultLocationsDataJson)
      );
    }
  };

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
