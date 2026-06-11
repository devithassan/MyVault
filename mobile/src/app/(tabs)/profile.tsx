// src/app/(tabs)/profile.tsx

import { Button, Text, View } from "react-native";

import { useAuthStore } from "@/features/auth/auth.store";
import { useCurrentUser } from "@/hooks/useCurrentUser";

export default function ProfileScreen() {
  const user = useCurrentUser();

  const logout = useAuthStore(
    (state) => state.logout
  );

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        padding: 24,
        gap: 12,
      }}
    >
      <Text
        style={{
          color: "#853a3a",
          fontSize: 20,
          fontWeight: "600",
        }}
      >
        {user?.fullName}
      </Text>

      <Text
        style={{
          color: "#b47777",
          fontSize: 16,
        }}
      >
        {user?.email}
      </Text>

      <Button
        title="Logout"
        onPress={logout}
      />
    </View>
  );
}