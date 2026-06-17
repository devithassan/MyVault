// src/components/ui/Button.tsx

import {
  ActivityIndicator,
  Pressable,
} from "react-native";

import Text from "@/components/ui/Text";
import { useTheme } from "@/theme/useTheme";

type Props = {
  title: string;
  onPress: () => void;

  disabled?: boolean;
  loading?: boolean;
};

export default function Button({
  title,
  onPress,
  disabled = false,
  loading = false,
}: Props) {
  const theme = useTheme();

  const isDisabled =
    disabled || loading;

  return (
    <Pressable
      disabled={isDisabled}
      onPress={onPress}
      style={({ pressed }) => ({
        backgroundColor:
          theme.colors.primary,

        paddingVertical:
          theme.spacing.md,

        borderRadius: 12,

        alignItems: "center",
        justifyContent: "center",

        opacity: isDisabled
          ? 0.6
          : pressed
          ? 0.85
          : 1,
      })}
    >
      {loading ? (
        <ActivityIndicator
          color="#fff"
        />
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
    </Pressable>
  );
}













// import { useTheme } from "@/theme/useTheme";
// import React from "react";
// import { ActivityIndicator, Text, TouchableOpacity } from "react-native";

// type Props = {
//   title: string;
//   onPress: () => void;
//   disabled?: boolean;
// };

// export default function Button({
//   title,
//   onPress,
//   disabled = false,
// }: Props) {
//   const theme = useTheme();

//   return (
//     <TouchableOpacity
//       onPress={onPress}
//       disabled={disabled}
//       style={{
//         backgroundColor: disabled
//           ? theme.colors.muted
//           : theme.colors.primary,

//         padding: theme.spacing.md,
//         borderRadius: 10,
//         alignItems: "center",
//         justifyContent: "center",
//       }}
//     >
//       {disabled ? (
//         <ActivityIndicator color="#fff" />
//       ) : (
//         <Text
//           style={{
//             color: "#fff",
//             fontWeight: "600",
//           }}
//         >
//           {title}
//         </Text>
//       )}
//     </TouchableOpacity>
//   );
// }



