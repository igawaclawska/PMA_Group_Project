import { Navigation } from "./navigation";
import { AuthenticationContextProvider } from "./authentication/AuthenticationContext";
import LocationViewTest from "./pages/application/ViewLocation";

export default function App() {
  return (
    <LocationViewTest />
    /*<AuthenticationContextProvider>
      <Navigation />
    </AuthenticationContextProvider>*/
  );
}
