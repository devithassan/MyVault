// src/features/vault/components/VaultList.tsx

import { ActivityIndicator, View } from "react-native";

import Text from "@/components/ui/Text";
import { VaultCard } from "@/components/vault/VaultCard";

import { useTheme } from "@/theme/useTheme";

import { Vault } from "../vault.types";

type VaultListProps = {
  vaults: Vault[];
  loading?: boolean;
};

export function VaultList({
  vaults,
  loading = false,
}: VaultListProps) {
  const theme = useTheme();

  if (loading) {
    return (
      <View
        style={{
          paddingVertical: theme.spacing.lg,
          alignItems: "center",
          gap: theme.spacing.sm,
        }}
      >
        <ActivityIndicator />

        <Text variant="muted">
          Loading vaults...
        </Text>
      </View>
    );
  }

  if (!vaults.length) {
    return (
      <Text variant="muted">
        No vaults found
      </Text>
    );
  }

  return (
    <View
      style={{
        gap: theme.spacing.md,
      }}
    >
      {vaults.map((vault) => (
        <VaultCard
          key={vault.id}
          title={vault.title}
          subtitle={
            vault.email ||
            vault.username ||
            vault.website ||
            vault.category ||
            "Vault Item"
          }
        />
      ))}
    </View>
  );
}


// for Mock data
// import { ActivityIndicator, View } from "react-native";

// import Text from "@/components/ui/Text";
// import { VaultCard } from "@/components/vault/VaultCard";

// import { useTheme } from "@/theme/useTheme";

// export type VaultListItem = {
//   id: string;
//   title: string;
//   subtitle?: string;
//   email?: string;
//   username?: string;
//   website?: string;
//   category?: string;
// };

// type VaultListProps = {
//   items: VaultListItem[];
//   loading?: boolean;
// };

// export function VaultList({
//   items,
//   loading = false,
// }: VaultListProps) {
//   const theme = useTheme();

//   if (loading) {
//     return (
//       <View style={{ paddingVertical: 20 }}>
//         <ActivityIndicator />
//         <Text variant="muted">
//           Loading vaults...
//         </Text>
//       </View>
//     );
//   }

//   if (!items.length) {
//     return (
//       <Text variant="muted">
//         No vault items found
//       </Text>
//     );
//   }

//   return (
//     <View
//       style={{
//         gap: theme.spacing.md,
//       }}
//     >
//       {items.map((item) => (
//         <VaultCard
//           key={item.id}
//           title={item.title}
//           subtitle={
//             item.subtitle ||
//             item.email ||
//             item.username ||
//             item.website ||
//             item.category
//           }
//         />
//       ))}
//     </View>
//   );
// }