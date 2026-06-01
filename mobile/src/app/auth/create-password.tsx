// src/app/auth/create-password.tsx

import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, Button, Text, TextInput, View } from "react-native";

import { createPassword } from "@/features/auth/auth.service";
import { useAuthStore } from "@/features/auth/auth.store";

export default function CreatePasswordScreen() {
  const router = useRouter();

  const email = useAuthStore(
    (state) => state.email
  );

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const handleCreatePassword =
    async () => {
      if (!password.trim()) {
        Alert.alert(
          "Password Required",
          "Please enter a password."
        );
        return;
      }

      try {
        setLoading(true);

        const res =
          await createPassword(
            email,
            password
          );

        if (res.success) {
          Alert.alert(
            "Success",
            "Password created successfully."
          );

          router.replace(
            "/auth/login"
          );
        } else {
          Alert.alert(
            "Error",
            res.message ||
              "Unable to create password."
          );
        }
      } catch (error: any) {
        Alert.alert(
          "Error",
          error?.message ||
            "Something went wrong."
        );
      } finally {
        setLoading(false);
      }
    };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        padding: 24,
        gap: 16,
      }}
    >
      <Text
        style={{
          fontSize: 28,
          fontWeight: "600",
        }}
      >
        Create Password
      </Text>

      <Text>
        {email}
      </Text>

      <TextInput
        placeholder="Enter password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={{
          borderWidth: 1,
          padding: 14,
          borderRadius: 8,
        }}
      />

      <Button
        title={
          loading
            ? "Creating..."
            : "Create Password"
        }
        disabled={loading}
        onPress={
          handleCreatePassword
        }
      />
    </View>
  );
}















// import { Text, View } from "react-native";

// export default function CreatePassword() {
//   return (
//     <View>
//       <Text>Create Password Screen</Text>
//     </View>
//   );
// }