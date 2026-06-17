// src/features/vault/components/VaultDetails.tsx

import { View } from "react-native";

import { Card } from "@/components/ui/Card";
import Text from "@/components/ui/Text";

import { useTheme } from "@/theme/useTheme";

import { Vault } from "../vault.types";

type Props = {
  vault: Vault;
};

export function VaultDetails({
  vault,
}: Props) {
  const theme = useTheme();

  return (
    <View
      style={{
        gap: theme.spacing.md,
      }}
    >
      <Card>
        <Text variant="subtitle">
          Category
        </Text>

        <Text>
          {vault.category}
        </Text>
      </Card>

      {vault.username && (
        <Card>
          <Text variant="subtitle">
            Username
          </Text>

          <Text>
            {vault.username}
          </Text>
        </Card>
      )}

      {vault.email && (
        <Card>
          <Text variant="subtitle">
            Email
          </Text>

          <Text>
            {vault.email}
          </Text>
        </Card>
      )}

      {vault.website && (
        <Card>
          <Text variant="subtitle">
            Website
          </Text>

          <Text>
            {vault.website}
          </Text>
        </Card>
      )}

      {vault.notes && (
        <Card>
          <Text variant="subtitle">
            Notes
          </Text>

          <Text>
            {vault.notes}
          </Text>
        </Card>
      )}
    </View>
  );
}