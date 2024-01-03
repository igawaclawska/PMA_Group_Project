import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LocationDetails from "../pages/application/LocationDetails";
import { Explore } from "../pages/application/Explore";

const Stack = createNativeStackNavigator();

const createScreenOptions = () => {
  return {
    headerShown: false,
  };
};

export const ExploreNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ExploreScreen"
        options={createScreenOptions}
        component={Explore}
      />
      <Stack.Screen
        name="LocationDetails"
        options={createScreenOptions}
        component={LocationDetails}
      />
    </Stack.Navigator>
  );
};
