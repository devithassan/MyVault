// src/components/ui/Divider.tsx

import { useTheme } from "@/theme/useTheme";
import { View } from "react-native";

export function Divider() {
  const theme = useTheme();

  return (
    <View
      style={{
        height: 1,
        backgroundColor: theme.colors.border,
        marginVertical: theme.spacing.md,
      }}
    />
  );
}