// src/components/ui/Text.tsx

import { useTheme } from "@/theme/useTheme";
import React from "react";
import { Text as RNText, TextStyle } from "react-native";

type TextVariant = "default" | "title" | "muted" | "error";

type Props = {
  children: React.ReactNode;
  variant?: TextVariant;
  style?: TextStyle;
};

export default function Text({
  children,
  variant = "default",
  style,
}: Props) {
  const theme = useTheme();

  const getStyle = (): TextStyle => {
    switch (variant) {
      case "title":
        return {
          fontSize: 24,
          fontWeight: "700",
          color: theme.colors.text,
        };

      case "muted":
        return {
          fontSize: 14,
          color: theme.colors.muted,
        };

      case "error":
        return {
          fontSize: 14,
          color: theme.colors.error,
        };

      default:
        return {
          fontSize: 16,
          color: theme.colors.text,
        };
    }
  };

  return <RNText style={[getStyle(), style]}>{children}</RNText>;
}


// import { useTheme } from "@/theme/useTheme";
// import { Text as RNText, TextProps } from "react-native";

// type Props = TextProps & {
//   variant?: "title" | "body" | "caption" | "label";
//   color?: "primary" | "secondary" | "danger";
// };

// export function Text({
//   variant = "body",
//   color = "primary",
//   style,
//   ...props
// }: Props) {
//   const theme = useTheme();

//   return (
//     <RNText
//       {...props}
//       style={[
//         {
//           color:
//             color === "primary"
//               ? theme.colors.text
//               : color === "secondary"
//               ? theme.colors.muted
//               : theme.colors.error,

//           fontSize:
//             variant === "title"
//               ? 22
//               : variant === "label"
//               ? 14
//               : variant === "caption"
//               ? 12
//               : 16,

//           fontWeight:
//             variant === "title"
//               ? "700"
//               : variant === "label"
//               ? "600"
//               : "400",
//         },
//         style,
//       ]}
//     />
//   );
// }