import React from "react";
import { Spacer } from "../../../components/spacer/spacer.component";
import {
  AccountBackground,
  AccountContainer,
  AuthButton,
  BackgroundCover,
  Title,
} from "../components/account.styles";

export const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <BackgroundCover />
      <Title>Meals To Go</Title>
      <AccountContainer>
        <AuthButton
          mode="contained"
          icon="lock-open-outline"
          onPress={() => navigation.navigate("Login")}
        >
          Login
        </AuthButton>
        <Spacer position="top" size="large">
          <AuthButton
            mode="contained"
            icon="account-plus"
            onPress={() => navigation.navigate("Register")}
          >
            Register
          </AuthButton>
        </Spacer>
      </AccountContainer>
    </AccountBackground>
  );
};
