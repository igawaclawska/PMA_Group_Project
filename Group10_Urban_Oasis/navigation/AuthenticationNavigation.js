import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { WelcomePage } from "../pages/authentication/Welcome";
import { LoginOrSignupPage } from "../pages/authentication/LoginOrSignUp";
import { LoginPage } from "../pages/authentication/LoginPage";
import { RegistrationPage } from "../pages/authentication/RegistrationPage";

const Stack = createNativeStackNavigator();

export const AuthenticationNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={WelcomePage} />
      <Stack.Screen name="Log in or Sign Up" component={LoginOrSignupPage} />
      <Stack.Screen name="Log in" component={LoginPage} />
      <Stack.Screen name="Sign up" component={RegistrationPage} />
    </Stack.Navigator>
  );
};
