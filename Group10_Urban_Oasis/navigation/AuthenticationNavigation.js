import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { WelcomePage } from "../pages/authentication/Welcome";
import { LoginOrSignupPage } from "../pages/authentication/LoginOrSignUp";
import { LoginPage } from "../pages/authentication/LoginPage";
import { RegistrationPage } from "../pages/authentication/RegistrationPage";

//This file is responsible for the stack navigation settings (visible for not authenticated users)

const Stack = createNativeStackNavigator();

const createScreenOptionsForIntro = () => {
  return {
    headerShown: false,
  };
};

const createScreenOptionsForAuthentication = () => {
  return {
    title: "",
    headerBackTitle: "Back",
  };
};

//Stack navigation screens
export const AuthenticationNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        options={createScreenOptionsForIntro}
        component={WelcomePage}
      />
      <Stack.Screen
        name="Log in or Sign Up"
        options={createScreenOptionsForIntro}
        component={LoginOrSignupPage}
      />
      <Stack.Screen
        name="Log in"
        options={createScreenOptionsForAuthentication}
        component={LoginPage}
      />
      <Stack.Screen
        name="Sign up"
        options={createScreenOptionsForAuthentication}
        component={RegistrationPage}
      />
    </Stack.Navigator>
  );
};
