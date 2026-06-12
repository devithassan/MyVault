// src/components/ui/Card.tsx

import React from "react";

import {
  View,
  ViewStyle,
} from "react-native";

import { useTheme } from "@/theme/useTheme";

type Props = {
  children: React.ReactNode;
  style?: ViewStyle;
};

export function Card({
  children,
  style,
}: Props) {
  const theme = useTheme();

  return (
    <View
      style={[
        {
          backgroundColor:
            theme.colors.card,

          padding:
            theme.spacing.md,

          borderRadius: 16,

          borderWidth: 1,

          borderColor:
            theme.colors.border,
        },

        style,
      ]}
    >
      {children}
    </View>
  );
}