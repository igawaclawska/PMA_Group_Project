import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ApplicationNavigation } from "./ApplicationNavigation";
import LocationDetails from "../pages/application/LocationDetails";

const Stack = createNativeStackNavigator();

const createScreenOptionsForApp = () => {
  return {
    headerShown: false,
  };
};

// creating a nested navigation with the first "App" as the whole app navigation
export const LocationDetailNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="App"
        component={ApplicationNavigation}
        options={createScreenOptionsForApp}
      />
      <Stack.Screen
        name="LocationDetails"
        component={LocationDetails}
        options={createScreenOptionsForApp}
      />
    </Stack.Navigator>
  );
};
