import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Explore } from "../pages/application/Explore";
import { AddLocation } from "../pages/application/AddLocation";
import { RecentlyVisited } from "../pages/application/RecentlyVisited";
import { UserAccount } from "../pages/application/UserAccount";

//This file is responsible for the bottom navigation settings (visible for authenticated users)

const Tab = createBottomTabNavigator();

//object containing icon names
const TAB_ICON = {
  Explore: "earth-sharp",
  RecentVisit: "time",
  AddLocation: "add-circle",
  MyAccount: "md-person-sharp",
};

//dynamically returns the icon component
const tabBarIcon = (iconName) => {
  return ({ size, color }) => (
    <Ionicons name={iconName} size={size} color={color} />
  );
};

//adds styling and assigns correct icons to the routes
const createScreenOptions = ({ route }) => {
  let name = route.name.replace(" ", ""); //removes white space from the route name to match tab icon keys
  const iconName = TAB_ICON[name];
  return {
    headerShown: false,
    tabBarIcon: tabBarIcon(iconName),
    tabBarActiveTintColor: "#3E9C27",
  };
};

//Bottom Navigation tabs and screens
export const ApplicationNavigation = () => {
  return (
    <Tab.Navigator screenOptions={createScreenOptions}>
      <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen name="Recent Visit" component={RecentlyVisited} />
      <Tab.Screen name="Add Location" component={AddLocation} />
      <Tab.Screen name="My Account" component={UserAccount} />
    </Tab.Navigator>
  );
};
