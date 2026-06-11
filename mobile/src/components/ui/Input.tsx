// src/components/ui/Input.tsx

import { useTheme } from "@/theme/useTheme";
import { TextInput, TextInputProps, View } from "react-native";

export function Input(props: TextInputProps) {
  const theme = useTheme();

  return (
    <View
      style={{
        backgroundColor: theme.colors.card,
        borderRadius: 10,
        padding: theme.spacing.sm,
      }}
    >
      <TextInput
        placeholderTextColor={theme.colors.muted}
        {...props}
        style={{
          color: theme.colors.text,
          padding: theme.spacing.sm,
        }}
      />
    </View>
  );
}