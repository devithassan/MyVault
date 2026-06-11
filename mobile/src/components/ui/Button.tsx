// src/components/ui/Button.tsx


import { useTheme } from "@/theme/useTheme";
import React from "react";
import { ActivityIndicator, Text, TouchableOpacity } from "react-native";

type Props = {
  title: string;
  onPress: () => void;
  disabled?: boolean;
};

export default function Button({
  title,
  onPress,
  disabled = false,
}: Props) {
  const theme = useTheme();

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={{
        backgroundColor: disabled
          ? theme.colors.muted
          : theme.colors.primary,

        padding: theme.spacing.md,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {disabled ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <Text
          style={{
            color: "#fff",
            fontWeight: "600",
          }}
        >
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
}
// import { useTheme } from "@/theme/useTheme";
// import {
//     ActivityIndicator,
//     Pressable,
//     Text,
// } from "react-native";

// type Props = {
//   title: string;
//   onPress: () => void;
//   loading?: boolean;
//   variant?: "primary" | "secondary" | "danger";
// };

// export function Button({
//   title,
//   onPress,
//   loading,
//   variant = "primary",
// }: Props) {
//   const theme = useTheme();

//   return (
//     <Pressable
//       onPress={onPress}
//       style={{
//         backgroundColor:
//           variant === "primary"
//             ? theme.colors.primary
//             : variant === "danger"
//             ? theme.colors.error
//             : theme.colors.card,

//         padding: theme.spacing.md,
//         borderRadius: 10,
//         alignItems: "center",
//         opacity: loading ? 0.7 : 1,
//       }}
//     >
//       {loading ? (
//         <ActivityIndicator color="#fff" />
//       ) : (
//         <Text style={{ color: "#fff", fontWeight: "600" }}>
//           {title}
//         </Text>
//       )}
//     </Pressable>
//   );
// }