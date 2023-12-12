import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AddLocation } from "../pages/application/AddLocation";
import { Camera } from "../pages/application/Camera";
import { PhotoView } from "../pages/application/PhotoView";

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
        component={Camera}
      />
      <Stack.Screen
        name="Photo View"
        options={createScreenOptions}
        component={PhotoView}
      />
    </Stack.Navigator>
  );
};
