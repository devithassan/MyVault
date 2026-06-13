import { useState } from "react";
import { View } from "react-native";

import Button from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

import { useTheme } from "@/theme/useTheme";
import { VaultCategory } from "../vault.types";

type Props = {
  loading?: boolean;
  onSubmit: (data: {
    title: string;
    category: VaultCategory;
    username?: string;
    email?: string;
    password?: string;
    website?: string;
    notes?: string;
  }) => void;
};

export function VaultForm({
  loading = false,
  onSubmit,
}: Props) {
  const theme = useTheme();

  const [title, setTitle] = useState("");
  const [category, setCategory] =
    useState<VaultCategory>("login");

  const [username, setUsername] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [website, setWebsite] =
    useState("");

  const [notes, setNotes] =
    useState("");

  return (
    <View
      style={{
        gap: theme.spacing.md,
      }}
    >
      <Input
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />

      <Input
        placeholder="Category (login, bank, card...)"
        value={category}
        onChangeText={(value) =>
          setCategory(
            value as VaultCategory
          )
        }
      />

      <Input
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />

      <Input
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />

      <Input
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Input
        placeholder="Website"
        value={website}
        onChangeText={setWebsite}
      />

      <Input
        placeholder="Notes"
        value={notes}
        onChangeText={setNotes}
      />

      <Button
        title={
          loading
            ? "Creating..."
            : "Create Vault"
        }
        onPress={() =>
          onSubmit({
            title,
            category,
            username,
            email,
            password,
            website,
            notes,
          })
        }
      />
    </View>
  );
}