import { Navigation } from "./navigation";
import { AuthenticationContextProvider } from "./authentication/AuthenticationContext";
import { LocationContextProvider } from "./location/locationContext";
import { CameraContextProvider } from "./camera/cameraContext";

export default function App() {
  return (
    <AuthenticationContextProvider>
      <CameraContextProvider>
        <LocationContextProvider>
          <Navigation />
        </LocationContextProvider>
      </CameraContextProvider>
    </AuthenticationContextProvider>
  );
}
