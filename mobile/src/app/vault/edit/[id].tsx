// src/app/vault/edit/[id].tsx

import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
    ActivityIndicator,
    Alert,
    ScrollView,
} from "react-native";

import Screen from "@/components/layout/Screen";
import Text from "@/components/ui/Text";

import { VaultForm } from "@/features/vault/components/VaultForm";
import { vaultService } from "@/features/vault/vault.service";
import { useVaultStore } from "@/features/vault/vault.store";
import { Vault } from "@/features/vault/vault.types";

import { useTheme } from "@/theme/useTheme";

export default function EditVaultScreen() {
  const { id } =
    useLocalSearchParams();

  const router = useRouter();
  const theme = useTheme();

  const [vault, setVault] =
    useState<Vault | null>(null);

  const [loading, setLoading] =
    useState(true);

  const updateVault =
    useVaultStore(
      (s) => s.updateVault
    );

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
      Alert.alert(
        "Error",
        "Failed to load vault"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async (
    payload: Partial<Vault>
  ) => {
    try {
      setLoading(true);

      const updated =
        await vaultService.update(
          String(id),
          payload
        );

      updateVault(updated);

      router.back();
    } catch {
      Alert.alert(
        "Error",
        "Failed to update vault"
      );
    } finally {
      setLoading(false);
    }
  };

  if (loading && !vault) {
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
      <ScrollView>
        <Text
          variant="title"
          style={{
            marginBottom:
              theme.spacing.lg,
          }}
        >
          Edit Vault
        </Text>

        <VaultForm
          initialValues={vault}
          submitLabel="Save Changes"
          loading={loading}
          onSubmit={handleUpdate}
        />
      </ScrollView>
    </Screen>
  );
}