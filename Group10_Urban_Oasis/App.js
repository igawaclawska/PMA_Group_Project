import { Navigation } from "./navigation";
import { AuthenticationContextProvider } from "./authentication/AuthenticationContext";
import { LocationContextProvider } from "./location/locationContext";

export default function App() {
  return (
    <AuthenticationContextProvider>
      <LocationContextProvider>
        <Navigation />
      </LocationContextProvider>
    </AuthenticationContextProvider>
  );
}
