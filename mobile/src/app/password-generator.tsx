import { useState } from "react";
import {
    Alert,
    View
} from "react-native";

import * as Clipboard from "expo-clipboard";

import Screen from "@/components/layout/Screen";
import Button from "@/components/ui/Button";
import Text from "@/components/ui/Text";

import { useTheme } from "@/theme/useTheme";

function generatePassword(
  length: number
) {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

  let password = "";

  for (
    let i = 0;
    i < length;
    i++
  ) {
    password += chars.charAt(
      Math.floor(
        Math.random() *
          chars.length
      )
    );
  }

  return password;
}

export default function PasswordGeneratorScreen() {
  const theme = useTheme();

  const [password, setPassword] =
    useState(
      generatePassword(16)
    );

  const regenerate = () => {
    setPassword(
      generatePassword(16)
    );
  };

  const copyPassword =
    async () => {
      await Clipboard.setStringAsync(
        password
      );

      Alert.alert(
        "Copied",
        "Password copied to clipboard"
      );
    };

  return (
    <Screen>
      <Text variant="title">
        Password Generator
      </Text>

      <View
        style={{
          marginTop:
            theme.spacing.xl,
          padding:
            theme.spacing.lg,
          borderRadius: 16,
          borderWidth: 1,
          borderColor:
            theme.colors.border,
        }}
      >
        <Text>
          {password}
        </Text>
      </View>

      <View
        style={{
          marginTop:
            theme.spacing.lg,
          gap: theme.spacing.md,
        }}
      >
        <Button
          title="Generate New"
          onPress={regenerate}
        />

        <Button
          title="Copy Password"
          onPress={copyPassword}
        />
      </View>
    </Screen>
  );
}