import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";
import * as SecureStore from "expo-secure-store";
import { useAuthStore } from "@/store/auth.store";

export default function LoginScreen() {
  const router = useRouter();
  const setUser = useAuthStore((s) => s.setUser);

  const handleLogin = async () => {
    // TEMP MOCK LOGIN (we will connect backend next step)
    const fakeToken = "vault-token-123";

    await SecureStore.setItemAsync("accessToken", fakeToken);

    setUser({ token: fakeToken });

    router.replace("/(tabs)");
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Login Screen</Text>

      <Button title="Login (Mock)" onPress={handleLogin} />
    </View>
  );
}