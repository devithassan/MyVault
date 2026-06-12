import { TextInput, View } from "react-native";

import Text from "@/components/ui/Text";

import { useTheme } from "@/theme/useTheme";

type VaultSearchBarProps = {
  value: string;
  onChangeText: (value: string) => void;
};

export function VaultSearchBar({
  value,
  onChangeText,
}: VaultSearchBarProps) {
  const theme = useTheme();

  return (
    <View
      style={{
        gap: theme.spacing.sm,
      }}
    >
      <Text variant="subtitle">
        Search Vault
      </Text>

      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder="Search passwords, notes, cards..."
        placeholderTextColor={
          theme.colors.muted
        }
        style={{
          height: 52,
          borderWidth: 1,
          borderColor: theme.colors.border,
          borderRadius: 14,
          paddingHorizontal: theme.spacing.md,
          backgroundColor:
            theme.colors.card,
          color: theme.colors.text,
        }}
      />
    </View>
  );
}