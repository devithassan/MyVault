// src/app/vault/create.tsx

import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Alert,
  Keyboard,
  Pressable,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";

import Screen from "@/components/layout/Screen";
import Text from "@/components/ui/Text";

import { VaultForm } from "@/features/vault/components/VaultForm";
import { vaultService } from "@/features/vault/vault.service";
import { useVaultStore } from "@/features/vault/vault.store";

import { Vault } from "@/features/vault/vault.types";

import { useTheme } from "@/theme/useTheme";

export default function CreateVaultScreen() {
  const router = useRouter();
  const theme = useTheme();

  const addVault =
    useVaultStore((s) => s.addVault);

  const [loading, setLoading] =
    useState(false);

  // const handleCreate = async (
  //   payload: any
  // ) => {
  
  

  const handleCreate = async (
      payload: Omit<
        Vault,
        "id" | "createdAt" | "updatedAt"
      >
    ) => {
 
    try {
      setLoading(true);

      const vault =
        await vaultService.create(
          payload
        );

      addVault(vault);

      router.back();
    } catch (error) {
      Alert.alert(
        "Error",
        "Failed to create vault"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Screen>
      <TouchableWithoutFeedback
        onPress={Keyboard.dismiss}
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <Pressable
            onPress={() => router.back()}
            style={{
                marginBottom:
                  theme.spacing.md,
              }}
          >
            <Text variant="muted">
              ← Back
            </Text>
          </Pressable>

          <Text
            variant="title"
            style={{
              marginBottom:
                theme.spacing.lg,
            }}
          >
            Create Vault
          </Text>

          <VaultForm
            loading={loading}
            onSubmit={handleCreate}
          />
        </ScrollView>
      </TouchableWithoutFeedback>
    </Screen>
  );
}

