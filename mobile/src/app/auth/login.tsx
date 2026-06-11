// src/app/auth/login.tsx

// src/app/auth/login.tsx

import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, View } from "react-native";

import Screen from "@/components/layout/Screen";
import Button from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import Text from "@/components/ui/Text";

import { authPersistence } from "@/features/auth/auth.persistence";
import { authService } from "@/features/auth/auth.service";
import { useAuthStore } from "@/features/auth/auth.store";
import { useTheme } from "@/theme/useTheme";

export default function LoginScreen() {
  const router = useRouter();
  const theme = useTheme();

  const setUser = useAuthStore((s) => s.setUser);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email.trim() || !password.trim()) {
      Alert.alert("Missing Fields", "Email and password are required");
      return;
    }

    try {
      setLoading(true);

      const res = await authService.login(email.trim(), password);

      if (!res?.success) {
        Alert.alert(
          "Login Failed",
          res?.message || "Invalid credentials"
        );
        return;
      }

      const { accessToken, refreshToken, user } = res.data;

      if (!accessToken || !refreshToken) {
        Alert.alert(
          "Auth Error",
          "Server did not return tokens"
        );
        return;
      }

      // persist tokens
      await authPersistence.setAccessToken(accessToken);
      await authPersistence.setRefreshToken(refreshToken);

      // update state
      setUser({
        id: user.id,
        email: user.email,
        fullName: user.fullName,
      });

      // route
      router.replace("/(tabs)");
    } catch (err) {
      console.log("LOGIN ERROR:", err);
      Alert.alert("Error", "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Screen>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          gap: theme.spacing.lg,
        }}
      >
        {/* TITLE */}
        <View style={{ gap: theme.spacing.xs }}>
          <Text variant="title">Welcome Back</Text>

          <Text variant="muted">
            Login to continue to Vault
          </Text>
        </View>

        {/* FORM */}
        <View style={{ gap: theme.spacing.md }}>
          <Input
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <Input
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>

        {/* BUTTON */}
        <Button
          title={loading ? "Signing in..." : "Login"}
          onPress={handleLogin}
          disabled={loading}
        />
      </View>
    </Screen>
  );
}


// import { authPersistence } from "@/features/auth/auth.persistence";
// import { useRouter } from "expo-router";
// import { useState } from "react";
// import { Alert, Button, Text, TextInput, View } from "react-native";

// import { authService } from "@/features/auth/auth.service";
// import { useAuthStore } from "@/features/auth/auth.store";

// export default function LoginScreen() {
//   const router = useRouter();
//   const setUser = useAuthStore((s) => s.setUser);

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleLogin = async () => {
//     console.log("EMAIL:", email);
//     console.log("PASSWORD:", password);

//     if (!email?.trim() || !password?.trim()) {
//       Alert.alert("Error", "Email and password required");
//       return;
//     }

//     try {
//       setLoading(true);

//       const res = await authService.login(email.trim(), password);


//       console.log("LOGIN RESPONSE:", res);

//       if (!res?.success) {
//         Alert.alert("Login Failed", res?.message || "Invalid credentials");
//         return;
//       }

//       const { accessToken, refreshToken, user } = res.data;


//       if (!accessToken || !refreshToken) {
//         Alert.alert("Error", "Authentication tokens mising");
//         return;
//       }



//       await authPersistence.setAccessToken(accessToken);
//       await authPersistence.setRefreshToken(refreshToken);

//       setUser({
//         id: user.id,
//         email: user.email,
//         fullName: user.fullName,
//       });

//       router.replace("/(tabs)");
//     } catch (err) {
//       console.log("Login error:", err);
//       Alert.alert("Error", "Something went wrong");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <View style={{ padding: 20, gap: 12, flex: 1, justifyContent: "center" }}>
//       <Text style={{ fontSize: 24, fontWeight: "600" }}>Login</Text>

//       <TextInput
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//         style={{ borderWidth: 1, padding: 12 }}
//       />

//       <TextInput
//         placeholder="Password"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry
//         style={{ borderWidth: 1, padding: 12 }}
//       />

//       <Button
//         title={loading ? "Logging in..." : "Login"}
//         onPress={handleLogin}
//       />
//     </View>
//   );
// }

