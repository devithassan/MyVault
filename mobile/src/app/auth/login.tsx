// src/app/auth/login.tsx

import { authPersistence } from "@/features/auth/auth.persistence";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, Button, Text, TextInput, View } from "react-native";

import { authService } from "@/features/auth/auth.service";
import { useAuthStore } from "@/features/auth/auth.store";

export default function LoginScreen() {
  const router = useRouter();
  const setUser = useAuthStore((s) => s.setUser);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    console.log("EMAIL:", email);
    console.log("PASSWORD:", password);

    if (!email?.trim() || !password?.trim()) {
      Alert.alert("Error", "Email and password required");
      return;
    }

    try {
      setLoading(true);

      const res = await authService.login(email.trim(), password);


      console.log("LOGIN RESPONSE:", res);

      if (!res?.success) {
        Alert.alert("Login Failed", res?.message || "Invalid credentials");
        return;
      }

      const { accessToken, refreshToken, user } = res.data;


      if (!accessToken) {
        Alert.alert("Error", "No token returned");
        return;
      }



      await authPersistence.setAccessToken(accessToken);
      await authPersistence.setRefreshToken(refreshToken);

      setUser({
        id: user.id,
        email: user.email,
        fullName: user.fullName,
      });

      router.replace("/(tabs)");
    } catch (err) {
      console.log("Login error:", err);
      Alert.alert("Error", "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={{ padding: 20, gap: 12, flex: 1, justifyContent: "center" }}>
      <Text style={{ fontSize: 24, fontWeight: "600" }}>Login</Text>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={{ borderWidth: 1, padding: 12 }}
      />

      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{ borderWidth: 1, padding: 12 }}
      />

      <Button
        title={loading ? "Logging in..." : "Login"}
        onPress={handleLogin}
      />
    </View>
  );
}

