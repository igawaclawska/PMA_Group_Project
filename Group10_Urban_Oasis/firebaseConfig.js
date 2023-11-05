// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCA3rCWTw2VeercNkucylsh1YJrR72D38A",
  authDomain: "urban-oasis-a66d0.firebaseapp.com",
  projectId: "urban-oasis-a66d0",
  storageBucket: "urban-oasis-a66d0.appspot.com",
  messagingSenderId: "682647272581",
  appId: "1:682647272581:web:df98c34545483f2583fdec",
  measurementId: "G-36W1HMN2JR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service.
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
