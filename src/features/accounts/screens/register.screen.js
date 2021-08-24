import React, { useState, useContext } from "react";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";

import { AuthContext } from "../../../services/auth/auth.context";
import {
  AccountBackground,
  BackgroundCover,
  AccountContainer,
  AuthInput,
  AuthButton,
  Title,
  ErrorContainer,
} from "../components/account.styles";

export const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const { onRegister, error, isLoading } = useContext(AuthContext);

  return (
    <AccountBackground>
      <BackgroundCover />
      <Title>Meals To Go</Title>
      <AccountContainer>
        {error && (
          <ErrorContainer>
            <Text variant="error">{error}</Text>
          </ErrorContainer>
        )}
        <AuthInput
          label="E-mail"
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(text) => setEmail(text)}
        />
        <Spacer position="top" size="large">
          <AuthInput
            label="Password"
            value={password}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            onChangeText={(text) => setPassword(text)}
          />
        </Spacer>
        <Spacer position="top" size="large">
          <AuthInput
            label="Repeat Password"
            value={repeatedPassword}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            onChangeText={(text) => setRepeatedPassword(text)}
          />
        </Spacer>
        <Spacer position="top" size="large">
          <AuthButton
            mode="contained"
            icon="account-plus"
            onPress={() => onRegister(email, password, repeatedPassword)}
            loading={isLoading}
            disabled={isLoading}
          >
            Register
          </AuthButton>
        </Spacer>
      </AccountContainer>
      <Spacer position="top" size="large">
        <AuthButton
          mode="contained"
          icon="backup-restore"
          onPress={() => navigation.navigate("Main")}
        >
          Go Back
        </AuthButton>
      </Spacer>
    </AccountBackground>
  );
};
