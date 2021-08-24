import React, { useContext } from "react";
import { Text, Button } from "react-native";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { AuthContext } from "../../../services/auth/auth.context";

export const SettingsScreen = () => {
  const { onLogout } = useContext(AuthContext);

  return (
    <SafeArea>
      <Text>Settings</Text>
      <Button title="Logout" onPress={onLogout} />
    </SafeArea>
  );
};
