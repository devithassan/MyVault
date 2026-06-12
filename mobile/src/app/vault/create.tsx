// src/app/vault/create.tsx

import { useRouter } from "expo-router";
import { View } from "react-native";

import Screen from "@/components/layout/Screen";
import Button from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import Text from "@/components/ui/Text";
import { useState } from "react";

export default function CreateVaultScreen() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCreate = async () => {
    setLoading(true);

    try {
      // TODO: connect to vault.service later
      console.log("Creating vault:", title);

      router.back();
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Screen>
      <View style={{ gap: 16 }}>
        <Text variant="title">Create Vault</Text>

        <Input
          placeholder="Vault name (e.g. Personal, Work)"
          value={title}
          onChangeText={setTitle}
        />

        <Button
          title={loading ? "Creating..." : "Create Vault"}
          onPress={handleCreate}
          disabled={!title.trim() || loading}
        />
      </View>
    </Screen>
  );
}