import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { WelcomePage } from "../pages/authentication/Welcome";
import { LoginOrSignupPage } from "../pages/authentication/LoginOrSignUp";
import { LoginPage } from "../pages/authentication/LoginPage";
import { RegistrationPage } from "../pages/authentication/RegistrationPage";

//This file is responsible for the stack navigation settings (visible for not authenticated users)

const Stack = createNativeStackNavigator();

const createScreenOptions = () => {
  return {
    headerShown: false,
  };
};

//Stack navigation screens
export const AuthenticationNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" options={createScreenOptions} component={WelcomePage} />
      <Stack.Screen name="Log in or Sign Up" component={LoginOrSignupPage} />
      <Stack.Screen name="Log in" component={LoginPage} />
      <Stack.Screen name="Sign up" component={RegistrationPage} />
    </Stack.Navigator>
  );
};
