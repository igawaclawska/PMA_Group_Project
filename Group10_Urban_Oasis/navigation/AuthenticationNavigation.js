import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { WelcomePage } from "../pages/Welcome";
import { LoginOrSignupPage } from "../pages/LoginOrSignUp";
import { LoginPage } from "../pages/LoginPage";
import { RegistrationPage } from "../pages/RegistrationPage";

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
