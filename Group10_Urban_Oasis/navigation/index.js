import { NavigationContainer } from "@react-navigation/native";
import { ApplicationNavigation } from "./ApplicationNavigation";
import { AuthenticationNavigation } from "./AuthenticationNavigation";

export const Navigation = () => {
  const isAuthenticated = false; //temporarily hardcoded, to be replaced with a real data after implementing authentication

  return (
    <NavigationContainer>
      {isAuthenticated ? (
        <ApplicationNavigation />
      ) : (
        <AuthenticationNavigation />
      )}
    </NavigationContainer>
  );
};
