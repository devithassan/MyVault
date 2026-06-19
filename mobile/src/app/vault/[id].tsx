// src/app/vault/[id].tsx



import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Pressable,
  ScrollView,
  View,
} from "react-native";

import Screen from "@/components/layout/Screen";
import Button from "@/components/ui/Button";
import Text from "@/components/ui/Text";

import { VaultDetails } from "@/features/vault/components/VaultDetails";
import { vaultService } from "@/features/vault/vault.service";
import { useVaultStore } from "@/features/vault/vault.store";
import { Vault } from "@/features/vault/vault.types";

import { useTheme } from "@/theme/useTheme";

export default function VaultDetailsScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const theme = useTheme();

  const removeVault = useVaultStore((s) => s.removeVault);

  const [vault, setVault] = useState<Vault | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadVault();
  }, []);

  const loadVault = async () => {
    try {
      const data = await vaultService.getById(String(id));
      setVault(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = () => {
    Alert.alert("Delete Vault", "Are you sure?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Delete",
        style: "destructive",
        onPress: async () => {
          try {
            await vaultService.remove(vault!.id);
            removeVault(vault!.id);
            router.replace("/(tabs)");
          } catch {
            Alert.alert("Error", "Failed to delete vault");
          }
        },
      },
    ]);
  };

  if (loading) {
    return (
      <Screen>
        <ActivityIndicator />
      </Screen>
    );
  }

  if (!vault) {
    return (
      <Screen>
        <Text>Vault not found</Text>
      </Screen>
    );
  }

  return (
    <Screen>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: theme.spacing.xl,
        }}
      >
        {/* HEADER */}
        <View style={{ marginBottom: theme.spacing.xl }}>
          <Pressable
            onPress={() => router.back()}
            style={{ marginBottom: theme.spacing.md }}
          >
            <Text style={{ color: theme.colors.primary }}>
              ← Back
            </Text>
          </Pressable>

          <Text variant="title">{vault.title}</Text>

          <Text variant="muted">{vault.category}</Text>
        </View>

        {/* DETAILS */}
        <VaultDetails vault={vault} />

        {/* ACTIONS */}
        <View
          style={{
            marginTop: theme.spacing.xl,
            gap: theme.spacing.md,
          }}
        >
          <Button
            title="Edit Vault"
            onPress={() =>
              router.push({
                pathname: "/vault/edit/[id]",
                params: { id: vault.id },
              })
            }
          />

          <Button
            title="Delete Vault"
            onPress={handleDelete}
          />
        </View>
      </ScrollView>
    </Screen>
  );
}






















// import { useLocalSearchParams, useRouter } from "expo-router";
// import { useEffect, useState } from "react";
// import {
//   ActivityIndicator,
//   Alert,
//   Pressable,
//   ScrollView,
//   View,
// } from "react-native";

// import Screen from "@/components/layout/Screen";
// import Text from "@/components/ui/Text";
// import Button from "@/components/ui/Button";

// import { VaultDetails } from "@/features/vault/components/VaultDetails";
// import { vaultService } from "@/features/vault/vault.service";
// import { useVaultStore } from "@/features/vault/vault.store";
// import { Vault } from "@/features/vault/vault.types";

// import { useTheme } from "@/theme/useTheme";

// export default function VaultDetailsScreen() {
//   const router = useRouter();

//   const { id } = useLocalSearchParams();
//   const theme = useTheme();

//   const removeVault = useVaultStore((s) => s.removeVault);

//   const [vault, setVault] = useState<Vault | null>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     loadVault();
//   }, []);

//   const loadVault = async () => {
//     try {
//       const data = await vaultService.getById(String(id));
//       setVault(data);
//     } catch (error) {
//       console.log(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleDelete = () => {
//     Alert.alert("Delete Vault", "Are you sure?", [
//       {
//         text: "Cancel",
//         style: "cancel",
//       },
//       {
//         text: "Delete",
//         style: "destructive",
//         onPress: async () => {
//           try {
//             await vaultService.remove(vault!.id);

//             removeVault(vault!.id);

//             router.replace("/(tabs)");
//           } catch {
//             Alert.alert("Error", "Failed to delete vault");
//           }
//         },
//       },
//     ]);
//   };

//   if (loading) {
//     return (
//       <Screen>
//         <ActivityIndicator />
//       </Screen>
//     );
//   }

//   if (!vault) {
//     return (
//       <Screen>
//         <Text>Vault not found</Text>
//       </Screen>
//     );
//   }

//   return (
//     <Screen>
//       <ScrollView
//         showsVerticalScrollIndicator={false}
//         contentContainerStyle={{
//           paddingBottom: theme.spacing["2xl"],
//         }}
//       >
//         {/* HEADER */}
//         <View style={{ marginBottom: theme.spacing.xl }}>
//           <Pressable
//             onPress={() => router.back()}
//             style={{ marginBottom: theme.spacing.md }}
//           >
//             <Text style={{ color: theme.colors.primary }}>
//               ← Back
//             </Text>
//           </Pressable>

//           <Text variant="title">{vault.title}</Text>

//           <Text variant="muted">{vault.category}</Text>
//         </View>

//         {/* DETAILS */}
//         <VaultDetails vault={vault} />

//         {/* ACTIONS */}
//         <View
//           style={{
//             marginTop: theme.spacing.xl,
//             gap: theme.spacing.md,
//           }}
//         >
//           <Button
//             title="Edit Vault"
//             onPress={() =>
//               router.push({
//                 pathname: "/vault/edit/[id]",
//                 params: { id: vault.id },
//               })
//             }
//           />

//           <Button
//             title="Delete Vault"
//             onPress={handleDelete}
//           />
//         </View>
//       </ScrollView>
//     </Screen>
//   );
// }






















// import { useLocalSearchParams, useRouter } from "expo-router";
// import { useEffect, useState, } from "react";
// import {
//   ActivityIndicator,
//   Alert,
//   Pressable,
//   ScrollView,
//   View,
// } from "react-native";

// import Screen from "@/components/layout/Screen";
// import Text from "@/components/ui/Text";

// import Button from "@/components/ui/Button";
// import { VaultDetails } from "@/features/vault/components/VaultDetails";
// import { vaultService } from "@/features/vault/vault.service";
// import { useVaultStore } from "@/features/vault/vault.store";
// import { Vault } from "@/features/vault/vault.types";

// import { useTheme } from "@/theme/useTheme";

// export default function VaultDetailsScreen() {
//   const router = useRouter();
  


//   const { id } =
//     useLocalSearchParams();

//   const theme = useTheme();

//   const removeVault =
//     useVaultStore(
//       (s) => s.removeVault
//     );

//   const [vault, setVault] =
//     useState<Vault | null>(null);

//   const [loading, setLoading] =
//     useState(true);

//   useEffect(() => {
//     loadVault();
//   }, []);

//   // console.log("PARAM ID:", id);

//   const loadVault = async () => {
//     try {
//       const data =
//         await vaultService.getById(
//           String(id)
//         );

//       setVault(data);
//     } catch (error) {
//       console.log(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (loading) {
//     return (
//       <Screen>
//         <ActivityIndicator />
//       </Screen>
//     );
//   }

//   if (!vault) {
//     return (
//       <Screen>
//         <Text>
//           Vault not found
//         </Text>
//       </Screen>
//     );
//   }

  
//   const handleDelete = () => {
//     Alert.alert(
//       "Delete Vault",
//       "Are you sure?",
//       [
//         {
//           text: "Cancel",
//           style: "cancel",
//         },
//         {
//           text: "Delete",
//           style: "destructive",

//           onPress: async () => {
//             try {
//               await vaultService.remove(
//                 vault.id
//               );

//               removeVault(vault.id);

//               router.replace(
//                 "/(tabs)"
//               );
//             } catch {
//               Alert.alert(
//                 "Error",
//                 "Failed to delete vault"
//               );
//             }
//           },
//         },
//       ]
//     );
//   };

//   return (
//     <Screen>
//       <ScrollView
//         showsVerticalScrollIndicator={false}
//         contentContainerStyle={{
//           paddingBottom: theme.spacing["2xl"],
//         }}
//       >
//         {/* Header */}
//         <View
//           style={{
//             marginBottom:
//               theme.spacing.xl,
//           }}
//         >
//           <Pressable
//             onPress={() => router.back()}
//             style={{
//               marginBottom:
//                 theme.spacing.md,
//             }}
//           >
//             <Text
//               style={{
//                 color:
//                   theme.colors.primary,
//               }}
//             >
//               ← Back
//             </Text>
//           </Pressable>

//           <Text variant="title">
//             {vault.title}
//           </Text>

//           <Text variant="muted">
//             {vault.category}
//           </Text>
//         </View>

//         {/* Vault Content */}
//         <VaultDetails
//           vault={vault}
//         />

//         {/* Actions */}
//         <View
//           style={{
//             marginTop:
//               theme.spacing.xl,
//             gap: theme.spacing.md,
//           }}
//         >
//           <Button
//             title="Edit Vault"
//             onPress={() =>
//               router.push({
//                 pathname:
//                   "/vault/edit/[id]",
//                 params: {
//                   id: vault.id,
//                 },
//               })
//             }
//           />

//           <Button
//             title="Delete Vault"
//             onPress={handleDelete}
//           />
//         </View>
//       </ScrollView>
//     </Screen>
//   );
  // return (
  //   <Screen>
  //     <View
  //       style={{
  //         marginBottom:
  //           theme.spacing.lg,
  //       }}
  //     >
  //       <Pressable
  //         onPress={() => router.back()}
  //         style={{
  //           marginBottom: theme.spacing.md,
  //         }}
  //       >
  //         <Text
  //           style={{
  //             color: theme.colors.primary,
  //           }}
  //         >
  //           ← Back
  //         </Text>
  //       </Pressable>
  //       <Text variant="title">
  //         {vault.title}
  //       </Text>

  //       <Text variant="muted">
  //         Vault Details
  //       </Text>
  //     </View>

  //     <VaultDetails
  //       vault={vault}
  //     />

  //     <Button
  //       title="Edit Vault"
  //       onPress={() =>
  //         router.push({
  //           pathname: "/vault/edit/[id]",
  //           params: {
  //             id: vault.id,
  //           },
  //         })
  //       }
  //     />

  //     <Button
  //       title="Delete Vault"
  //       onPress={handleDelete}
  //     />

  //   </Screen>
  // );
  // }