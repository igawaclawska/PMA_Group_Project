import React, { useEffect, useState, createContext } from "react";
import { onAuthStateChanged } from "firebase/auth";

import { auth } from "../firebaseConfig";
import { loginRequest, registerUser } from "./AuthenticationService";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
      setIsLoading(false);
    });
  }, []);

  //TODO: Make login / signup validation more sophisticated
  //create more detailed error messages

  const onLogin = (email, password) => {
    setIsLoading(true);
    loginRequest(email, password)
      .then((user) => {
        setUser(user);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error.toString());
      });
  };

  const onRegister = (email, password, passwordRepeated) => {
    setIsLoading(true);
    if (password !== passwordRepeated) {
      setError("Error: Password do not match");
      setIsLoading(false);
      return;
    }
    registerUser(email, password)
      .then((u) => {
        setUser(u);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.toString());
      });
  };

  const onLogout = () => {
    setUser(null);
    auth.signOut();
  };

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        error,
        isLoading,
        setError,
        onLogin,
        onRegister,
        onLogout,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
