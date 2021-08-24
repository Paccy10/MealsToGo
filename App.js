import React from "react";
import { ThemeProvider } from "styled-components/native";
import {
  useFonts as useOwald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import * as firebase from "firebase";

import { theme } from "./src/infrastructure/theme";
import { Navigation } from "./src/infrastructure/navigation";
import { AuthContextProvider } from "./src/services/auth/auth.context";

const firebaseConfig = {
  apiKey: "AIzaSyAC6xB9Km_HnGOAzKCTgb-BcMVZwY2tTnk",
  authDomain: "mealstogo-3d5ca.firebaseapp.com",
  projectId: "mealstogo-3d5ca",
  storageBucket: "mealstogo-3d5ca.appspot.com",
  messagingSenderId: "534152487792",
  appId: "1:534152487792:web:f9a868fd554824b8ad25b5",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  const [oswaldLoaded] = useOwald({ Oswald_400Regular });
  const [latoLoaded] = useLato({ Lato_400Regular });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <AuthContextProvider>
        <Navigation />
      </AuthContextProvider>
    </ThemeProvider>
  );
}
