// src/features/vault/components/VaultCategoryPicker.tsx

import { Pressable, View } from "react-native";

import Text from "@/components/ui/Text";
import { useTheme } from "@/theme/useTheme";

import { VaultCategory } from "../vault.types";

type Props = {
  value: VaultCategory;
  onChange: (
    category: VaultCategory
  ) => void;
};

const categories: VaultCategory[] = [
  "login",
  "bank",
  "card",
  "note",
  "identity",
];

export function VaultCategoryPicker({
  value,
  onChange,
}: Props) {
  const theme = useTheme();

  return (
    <View
      style={{
        flexDirection: "row",
        flexWrap: "wrap",
        gap: theme.spacing.sm,
      }}
    >
      {categories.map((category) => {
        const active =
          value === category;

        return (
          <Pressable
            key={category}
            onPress={() =>
              onChange(category)
            }
            style={({ pressed }) => ({
              paddingHorizontal: 16,
              paddingVertical: 12,

              borderRadius: 999,

              borderWidth: 1,

              borderColor: active
                ? theme.colors.primary
                : theme.colors.border,

              backgroundColor: active
                ? theme.colors.primary
                : theme.colors.card,

              opacity: pressed
                ? 0.8
                : 1,
            })}
          >
            <Text
              style={{
                color: active
                  ? "#fff"
                  : theme.colors.text,

                textTransform:
                  "capitalize",
              }}
            >
              {category}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}















// import {
//     Pressable,
//     View,
// } from "react-native";

// import Text from "@/components/ui/Text";
// import { useTheme } from "@/theme/useTheme";

// import {
//     VaultCategory,
// } from "../vault.types";

// type Props = {
//   value: VaultCategory;
//   onChange: (
//     category: VaultCategory
//   ) => void;
// };

// const categories: VaultCategory[] = [
//   "login",
//   "bank",
//   "card",
//   "note",
//   "identity",
// ];

// export function VaultCategoryPicker({
//   value,
//   onChange,
// }: Props) {
//   const theme = useTheme();

//   return (
//     <View
//       style={{
//         flexDirection: "row",
//         flexWrap: "wrap",
//         gap: theme.spacing.sm,
//       }}
//     >
//       {categories.map((category) => {
//         const active =
//           value === category;

//         return (
//           <Pressable
//             key={category}
//             onPress={() =>
//               onChange(category)
//             }
//           >
//             <View
//               style={{
//                 paddingHorizontal: 14,
//                 paddingVertical: 10,

//                 borderRadius: 999,

//                 borderWidth: 1,

//                 borderColor: active
//                   ? theme.colors.primary
//                   : theme.colors.border,

//                 backgroundColor: active
//                   ? theme.colors.primary
//                   : theme.colors.card,
//               }}
//             >
//               <Text
//                 style={{
//                   color: active
//                     ? "#fff"
//                     : theme.colors.text,
//                 }}
//               >
//                 {category}
//               </Text>
//             </View>
//           </Pressable>
//         );
//       })}
//     </View>
//   );
// }