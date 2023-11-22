import { Navigation } from "./navigation";
import { AuthenticationContextProvider } from "./authentication/AuthenticationContext";

export default function App() {
  return (
    <AuthenticationContextProvider>
      <Navigation />
    </AuthenticationContextProvider>
  );
}
