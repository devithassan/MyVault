// src/components/ui/Card.tsx

import { useTheme } from "@/theme/useTheme";
import { View } from "react-native";

export function Card({ children }: { children: React.ReactNode }) {
  const theme = useTheme();

  return (
    <View
      style={{
        backgroundColor: theme.colors.card,
        padding: theme.spacing.md,
        borderRadius: 12,
      }}
    >
      {children}
    </View>
  );
}