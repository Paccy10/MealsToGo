import React, { useRef, useState, useEffect, useContext } from "react";
import { TouchableOpacity, View } from "react-native";
import styled from "styled-components";
import { Camera } from "expo-camera";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { Text } from "../../../components/typography/text.component";
import { AuthContext } from "../../../services/auth/auth.context";

const ProfileCamera = styled(Camera)`
  width: 100%;
  height: 100%;
`;

export const CameraScreen = () => {
  const cameraRef = useRef();
  const [hasPermission, setHasPermission] = useState(null);
  const { user } = useContext(AuthContext);

  const snap = async () => {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();
      AsyncStorage.setItem(`${user.uid}-photo`, photo.uri);
    }
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <TouchableOpacity onPress={snap}>
      <ProfileCamera
        ref={(camera) => (cameraRef.current = camera)}
        type={Camera.Constants.Type.front}
        ratio={"16:9"}
      />
    </TouchableOpacity>
  );
};
