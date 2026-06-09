// src/app/auth/login.tsx

import { useRouter } from "expo-router";
import * as SecureStore from "expo-secure-store";
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

      // console.log(
      //   "ACCESS TOKEN:",
      //   res.accessToken
      // );

      console.log("LOGIN RESPONSE:", res);

      if (!res?.success) {
        Alert.alert("Login Failed", res?.message || "Invalid credentials");
        return;
      }

      // const token = 
      //   res?.data?.accessToken ??
      //   res?.data?.token; // depending on backend response structure
      // const token = res?.data?.data?.accessToken; // for nested response structure
      const { accessToken, user } = res.data;
      // if (!token) {
      //   Alert.alert("Error", "No token returned from server");
      //   return;
      // }  

      if (!accessToken) {
        Alert.alert("Error", "No token returned");
        return;
      }

      // await SecureStore.setItemAsync("accessToken", token);
      await SecureStore.setItemAsync("accessToken", accessToken);
      // setUser({
      //   token,
      //   email,
      // });

      // setUser({
      //   token,
      //   email: res?.data?.data?.user?.email,
      // });

      // testing level
      // setUser({
      //   token: accessToken,
      //   email: user.email,
      // });

      // procuction level
      // setUser({
      //   id: res.user.id,
      //   email: res.user.email,
      //   fullName: res.user.fullName,
      //   // token,
      // });
        // OR below
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















// import { useAuthStore } from "@/store/auth.store";
// import { useRouter } from "expo-router";
// import * as SecureStore from "expo-secure-store";
// import { Button, Text, View } from "react-native";

// export default function LoginScreen() {
//   const router = useRouter();
//   const setUser = useAuthStore((s) => s.setUser);

//   const handleLogin = async () => {
//     // TEMP MOCK LOGIN (we will connect backend next step)
//     const fakeToken = "vault-token-123";

//     await SecureStore.setItemAsync("accessToken", fakeToken);

//     setUser({ token: fakeToken });

//     router.replace("/(tabs)");
//   };

//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <Text>Login Screen</Text>

//       <Button title="Login (Mock)" onPress={handleLogin} />
//     </View>
//   );
// }