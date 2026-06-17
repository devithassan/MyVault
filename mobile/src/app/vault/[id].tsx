// src/app/vault/[id].tsx

import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import {
    ActivityIndicator,
    View,
} from "react-native";

import Screen from "@/components/layout/Screen";
import Text from "@/components/ui/Text";

import { VaultDetails } from "@/features/vault/components/VaultDetails";
import { vaultService } from "@/features/vault/vault.service";
import { Vault } from "@/features/vault/vault.types";

import { useTheme } from "@/theme/useTheme";

export default function VaultDetailsScreen() {
  const { id } =
    useLocalSearchParams();

  const theme = useTheme();

  const [vault, setVault] =
    useState<Vault | null>(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    loadVault();
  }, []);

  const loadVault = async () => {
    try {
      const data =
        await vaultService.getById(
          String(id)
        );

      setVault(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <Screen>
        <ActivityIndicator />
      </Screen>
    );
  }

  if (!vault) {
    return (
      <Screen>
        <Text>
          Vault not found
        </Text>
      </Screen>
    );
  }

  return (
    <Screen>
      <View
        style={{
          marginBottom:
            theme.spacing.lg,
        }}
      >
        <Text variant="title">
          {vault.title}
        </Text>

        <Text variant="muted">
          Vault Details
        </Text>
      </View>

      <VaultDetails
        vault={vault}
      />
    </Screen>
  );
}