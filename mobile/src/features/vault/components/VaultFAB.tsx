// src/features/vault/components/VaultFAB.tsx

import { useRouter } from "expo-router";
import { Pressable, View } from "react-native";

import Text from "@/components/ui/Text";
import { useTheme } from "@/theme/useTheme";

export function VaultFAB() {
  const router = useRouter();
  const theme = useTheme();

  return (
    <Pressable
      onPress={() =>
        router.push("/vault/create")
      }
      style={{
        position: "absolute",
        right: 24,
        bottom: 32,
      }}
    >
      <View
        style={{
          width: 64,
          height: 64,

          borderRadius: 999,

          justifyContent: "center",
          alignItems: "center",

          backgroundColor:
            theme.colors.primary,

          shadowOpacity: 0.25,
          shadowRadius: 12,

          elevation: 8,
        }}
      >
        <Text
          style={{
            fontSize: 28,
            fontWeight: "700",
          }}
        >
          +
        </Text>
      </View>
    </Pressable>
  );
}