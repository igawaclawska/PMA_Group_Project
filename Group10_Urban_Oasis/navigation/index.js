import { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { ApplicationNavigation } from "./ApplicationNavigation";
import { AuthenticationNavigation } from "./AuthenticationNavigation";
import { AuthenticationContext } from "../authentication/AuthenticationContext";
import { LocationDetailNav } from "./LocationDetailNav";

export const Navigation = () => {
  const { isAuthenticated } = useContext(AuthenticationContext);

  return (
    <NavigationContainer>
      {isAuthenticated ? <LocationDetailNav /> : <AuthenticationNavigation />}
    </NavigationContainer>
  );
};
