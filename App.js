import React from "react";
import { ThemeProvider } from "styled-components/native";
import {
  useFonts as useOwald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";
import { theme } from "./src/infrastructure/theme";

export default function App() {
  let [oswaldLoaded] = useOwald({ Oswald_400Regular });
  let [latoLoaded] = useLato({ Lato_400Regular });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <RestaurantsScreen />
    </ThemeProvider>
  );
}
