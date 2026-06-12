// src/features/vault/components/VaultStats.tsx

import { View } from "react-native";

import { Card } from "@/components/ui/Card";
import Text from "@/components/ui/Text";

import { useTheme } from "@/theme/useTheme";

type Props = {
  vaults: number;
  items: number;
  storage: string;
};

export function VaultStats({
  vaults,
  items,
  storage,
}: Props) {
  const theme = useTheme();

  const stats = [
    {
      label: "Vaults",
      value: vaults,
    },
    {
      label: "Items",
      value: items,
    },
    {
      label: "Storage",
      value: storage,
    },
  ];

  return (
    <View
      style={{
        flexDirection: "row",
        gap: theme.spacing.md,
      }}
    >
      {stats.map((stat) => (
        <Card
          key={stat.label}
          style={{
            flex: 1,
          }}
        >
          <Text variant="title">
            {stat.value}
          </Text>

          <Text variant="caption">
            {stat.label}
          </Text>
        </Card>
      ))}
    </View>
  );
}