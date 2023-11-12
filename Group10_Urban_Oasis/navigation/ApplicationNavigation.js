import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomePage } from "../pages/application/HomePage";
import { AddLocation } from "../pages/application/AddLocation";
import { RecentlyVisited } from "../pages/application/RecentlyVisited";
import { UserAccount } from "../pages/application/UserAccount";

const Tab = createBottomTabNavigator();

//removes default header
const createScreenOptions = () => {
  return {
    headerShown: false,
  };
};

export const ApplicationNavigation = () => {
  return (
    <Tab.Navigator screenOptions={createScreenOptions}>
      <Tab.Screen name="Explore" component={HomePage} />
      <Tab.Screen name="Recent Visit" component={RecentlyVisited} />
      <Tab.Screen name="Add Location" component={AddLocation} />
      <Tab.Screen name="User Account" component={UserAccount} />
    </Tab.Navigator>
  );
};
