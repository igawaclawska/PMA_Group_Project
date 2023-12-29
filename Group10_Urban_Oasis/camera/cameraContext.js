import React, { createContext, useEffect, useState } from "react";
import { CameraType } from "expo-camera";

import { hasCameraPermission, snapAndSavePhoto } from "./cameraServices.js";

export const CameraContext = createContext();

export const CameraContextProvider = ({ children }) => {
  const [hasPermission, setHasPermission] = useState(false);
  const [camera, setCamera] = useState(null);
  const [type, setType] = useState(CameraType.back);
  const [uri, setUri] = useState(null); //uri of all images taken and saved to gallery

  useEffect(() => {
    (async () => {
      const permission = await hasCameraPermission();
      setHasPermission(permission);
    })();
  }, []);

  const toggleCamera = () => {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  };

  const snapAndSave = async () => {
    if (hasPermission) {
      let asset = await snapAndSavePhoto(camera);
      setUri(asset.localUri);
    }
  };

  return (
    <CameraContext.Provider
      value={{ type, uri, setUri, setCamera, toggleCamera, snapAndSave }}
    >
      {children}
    </CameraContext.Provider>
  );
};
