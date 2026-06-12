// src/components/vault/VaultEmptyState.tsx

import Text from "@/components/ui/Text";
import { View } from "react-native";

export function VaultEmptyState() {
  return (
    <View style={{ alignItems: "center", marginTop: 40 }}>
      <Text variant="title">No Vault Items</Text>
      <Text variant="muted">
        Start by adding your first secure item
      </Text>
    </View>
  );
}