import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AddLocation } from "../pages/application/AddLocation";
import { CameraView } from "../pages/application/Camera";

const Stack = createNativeStackNavigator();

const createScreenOptions = () => {
  return {
    headerShown: false,
  };
};

export const AddLocationNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Add Location Screen"
        options={createScreenOptions}
        component={AddLocation}
      />
      <Stack.Screen
        name="Camera Screen"
        options={createScreenOptions}
        component={CameraView}
      />
    </Stack.Navigator>
  );
};
