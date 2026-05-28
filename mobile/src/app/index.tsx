import { useEffect } from "react";
import { View, ActivityIndicator } from "react-native";
import { useRouter } from "expo-router";
import * as SecureStore from "expo-secure-store";
import { useAuthStore } from "@/store/auth.store";

export default function Index() {
  const router = useRouter();
  const { setUser } = useAuthStore();

  useEffect(() => {
    const bootstrap = async () => {
      try {
        const token = await SecureStore.getItemAsync("accessToken");

        if (token) {
          // TEMP: assume valid session (we will validate with backend later)
          setUser({ token });

          router.replace("/(tabs)");
        } else {
          router.replace("/auth");
        }
      } catch (err) {
        router.replace("/auth");
      }
    };

    bootstrap();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size="large" />
    </View>
  );
}