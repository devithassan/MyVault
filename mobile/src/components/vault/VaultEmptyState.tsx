import { Text } from "@/components/ui/Text";
import { View } from "react-native";

export function VaultEmptyState() {
  return (
    <View style={{ alignItems: "center", marginTop: 40 }}>
      <Text variant="title">No Vault Items</Text>
      <Text color="secondary">
        Start by adding your first secure item
      </Text>
    </View>
  );
}