// src/components/vault/VaultHeader.tsx

import Text from "@/components/ui/Text";
import { View } from "react-native";

export function VaultHeader() {
  return (
    <View style={{ paddingVertical: 16 }}>
      <Text variant="title">Vault</Text>
      <Text variant="muted">Your secure dashboard</Text>
    </View>
  );
}