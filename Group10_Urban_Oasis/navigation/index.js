import { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { ApplicationNavigation } from "./ApplicationNavigation";
import { AuthenticationNavigation } from "./AuthenticationNavigation";
import { AuthenticationContext } from "../authentication/AuthenticationContext";

export const Navigation = () => {
  const { isAuthenticated } = useContext(AuthenticationContext);

  return (
    <NavigationContainer>
      {!isAuthenticated ? (
        <ApplicationNavigation />
      ) : (
        <AuthenticationNavigation />
      )}
    </NavigationContainer>
  );
};
