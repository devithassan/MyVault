// src/features/vault/components/VaultStats.tsx

import { View } from "react-native";

import { Card } from "@/components/ui/Card";
import Text from "@/components/ui/Text";

import { useTheme } from "@/theme/useTheme";

type Props = {
  vaults: number;
  categories: number;
  storage: string;
};

export function VaultStats({
  vaults,
  categories,
  storage,
}: Props) {
  const theme = useTheme();

  const stats = [
    {
      value: vaults,
      title: "Vaults",
      subtitle: "Secure entries",
    },
    {
      value: categories,
      title: "Categories",
      subtitle: "Organized groups",
    },
    {
      value: storage,
      title: "Storage",
      subtitle: "Encrypted data",
    },
  ];

  return (
    <View
      style={{
        flexDirection: "row",
        gap: theme.spacing.md,
      }}
    >
      {stats.map((stat) => (
        <Card
          key={stat.title}
          style={{
            flex: 1,
            paddingVertical:
              theme.spacing.lg,
            alignItems: "center",
          }}
        >
          <Text variant="title">
            {stat.value}
          </Text>

          <Text
            variant="subtitle"
            style={{
              marginTop: 4,
            }}
          >
            {stat.title}
          </Text>

          <Text
            variant="caption"
            style={{
              marginTop: 2,
              textAlign: "center",
            }}
          >
            {stat.subtitle}
          </Text>
        </Card>
      ))}
    </View>
  );
}







// // src/features/vault/components/VaultStats.tsx

// import { View } from "react-native";

// import { Card } from "@/components/ui/Card";
// import Text from "@/components/ui/Text";

// import { useTheme } from "@/theme/useTheme";

// type Props = {
//   vaults: number;
//   items: number;
//   storage: string;
// };

// export function VaultStats({
//   vaults,
//   items,
//   storage,
// }: Props) {
//   const theme = useTheme();

//   const stats = [
//     {
//       label: "Vaults",
//       value: vaults,
//     },
//     {
//       label: "Items",
//       value: items,
//     },
//     {
//       label: "Storage",
//       value: storage,
//     },
//   ];

//   return (
//     <View
//       style={{
//         flexDirection: "row",
//         gap: theme.spacing.md,
//       }}
//     >
//       {stats.map((stat) => (
//         <Card
//           key={stat.label}
//           style={{
//             flex: 1,
//           }}
//         >
//           <Text variant="title">
//             {stat.value}
//           </Text>

//           <Text variant="caption">
//             {stat.label}
//           </Text>
//         </Card>
//       ))}
//     </View>
//   );
// }