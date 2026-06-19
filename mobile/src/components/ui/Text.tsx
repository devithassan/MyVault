import React from "react";
import {
  Text as RNText,
  TextProps,
  TextStyle,
} from "react-native";

import { useTheme } from "@/theme/useTheme";

type TextVariant =
  | "display"
  | "title"
  | "subtitle"
  | "body"
  | "caption"
  | "muted"
  | "error";

type Props = TextProps & {
  children: React.ReactNode;
  variant?: TextVariant;
  style?: TextStyle;
};

export default function Text({
  children,
  variant = "body",
  style,
  ...rest
}: Props) {
  const theme = useTheme();


  const variantStyle: Record<TextVariant, TextStyle> = {
    display: { fontSize: 32, fontWeight: "700", color: theme.colors.text },
    title: { fontSize: 24, fontWeight: "700", color: theme.colors.text },
    subtitle: { fontSize: 18, fontWeight: "600", color: theme.colors.text },
    body: { fontSize: 16, color: theme.colors.text },
    caption: { fontSize: 12, color: theme.colors.muted },
    muted: { fontSize: 14, color: theme.colors.muted },
    error: { fontSize: 14, color: theme.colors.error },
  };

  // const variantStyle: Record<
  //   TextVariant,
  //   TextStyle
  // > = {
  //   display: {
  //     fontSize: 32,
  //     fontWeight: "700",
  //     color: theme.colors.text,
  //   },

  //   title: {
  //     fontSize: 24,
  //     fontWeight: "700",
  //     color: theme.colors.text,
  //   },

  //   subtitle: {
  //     fontSize: 18,
  //     fontWeight: "600",
  //     color: theme.colors.text,
  //   },

  //   body: {
  //     fontSize: 16,
  //     color: theme.colors.text,
  //   },

  //   caption: {
  //     fontSize: 12,
  //     color: theme.colors.muted,
  //   },

  //   muted: {
  //     fontSize: 14,
  //     color: theme.colors.muted,
  //   },

  //   error: {
  //     fontSize: 14,
  //     color: theme.colors.error,
  //   },
  // };

  return (
    <RNText
      {...rest}
      style={[
        variantStyle[variant],
        style,
      ]}
    >
      {children}
    </RNText>
  );
}