// src/components/vault/VaulItemRow.tsx

import Text from "@/components/ui/Text";
import { View } from "react-native";

export function VaultItemRow({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 12,
      }}
    >
      <Text>{title}</Text>
      <Text variant ="muted">{value}</Text>
    </View>
  );
}