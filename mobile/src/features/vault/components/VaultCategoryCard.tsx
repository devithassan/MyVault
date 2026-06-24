// src/features/vault/components/VaultCategoryCard.tsx

import {
    Pressable,
    View,
} from "react-native";

import Text from "@/components/ui/Text";

import { useTheme } from "@/theme/useTheme";

type Props = {
  title: string;
  count: number;
  onPress?: () => void;
};

export function VaultCategoryCard({
  title,
  count,
  onPress,
}: Props) {
  const theme = useTheme();

  return (
    <Pressable
      onPress={onPress}
      style={{
        flex: 1,
      }}
    >
      <View
        style={{
          backgroundColor:
            theme.colors.card,

          borderRadius: 16,

          padding:
            theme.spacing.md,

          borderWidth: 1,

          borderColor:
            theme.colors.border,
        }}
      >
        <Text variant="subtitle">
          {title}
        </Text>

        <View
          style={{
            marginTop:
              theme.spacing.sm,
          }}
        >
          <Text variant="muted">
            {count} items
          </Text>
        </View>
      </View>
    </Pressable>
  );
}