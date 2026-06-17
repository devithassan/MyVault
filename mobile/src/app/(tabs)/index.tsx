// // src/app/(tabs)/index.tsx


import { useState } from "react";
import {
  Keyboard,
  ScrollView,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import Screen from "@/components/layout/Screen";
import Text from "@/components/ui/Text";

import { VaultCategoryCard } from "@/features/vault/components/VaultCategoryCard";
import { VaultFAB } from "@/features/vault/components/VaultFAB";
import { VaultList } from "@/features/vault/components/VaultList";
import { VaultSearchBar } from "@/features/vault/components/VaultSearchBar";
import { VaultStats } from "@/features/vault/components/VaultStats";

import { useVaults } from "@/features/vault/hooks/useVaults";

import { useCurrentUser } from "@/hooks/useCurrentUser";
import { useTheme } from "@/theme/useTheme";

export default function DashboardScreen() {
  const theme = useTheme();
  const user = useCurrentUser();

  const [search, setSearch] = useState("");

  const { vaults, loading } = useVaults();

  return (
    <Screen>
      <TouchableWithoutFeedback
        onPress={Keyboard.dismiss}
      >

      
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          {/* HEADER */}

          <View
            style={{
              marginBottom:
                theme.spacing.lg,
            }}
          >
            <Text variant="title">
              Welcome Back
            </Text>

            <Text variant="muted">
              {user?.fullName}
            </Text>
          </View>

          {/* SEARCH */}

          <VaultSearchBar
            value={search}
            onChangeText={setSearch}
          />

          <View
            style={{
              height:
                theme.spacing.lg,
            }}
          />

          {/* STATS */}

          <VaultStats
            vaults={12}
            items={84}
            storage="128MB"
          />

          <View
            style={{
              height:
                theme.spacing.xl,
            }}
          />

          {/* CATEGORIES */}

          <Text variant="subtitle">
            Categories
          </Text>

          <View
            style={{
              flexDirection: "row",
              gap: theme.spacing.md,
              marginTop:
                theme.spacing.md,
            }}
          >
            <VaultCategoryCard
              title="Personal"
              count={24}
            />

            <VaultCategoryCard
              title="Work"
              count={12}
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              gap: theme.spacing.md,
              marginTop:
                theme.spacing.md,
            }}
          >
            <VaultCategoryCard
              title="Finance"
              count={8}
            />

            <VaultCategoryCard
              title="Passwords"
              count={40}
            />
          </View>

          <View
            style={{
              height:
                theme.spacing.xl,
            }}
          />

          {/* RECENT */}

          <Text variant="subtitle">
            Recent Vaults
          </Text>

          <View
            style={{
              marginTop:
                theme.spacing.md,
            }}
          >
            {loading ? (
              <Text variant="muted">
                Loading vaults...
              </Text>
            ) : (
              <VaultList
                vaults={vaults}
              />
            )}
          </View>

          <View
            style={{
              height: 120,
            }}
          />
        </ScrollView>

      </TouchableWithoutFeedback>      
      <VaultFAB />
    </Screen>
  );
}





// Mock data dashboard

// import { useEffect, useState } from "react";
// import {
//   ScrollView,
//   View,
// } from "react-native";

// import Screen from "@/components/layout/Screen";
// import Text from "@/components/ui/Text";

// import { VaultCategoryCard } from "@/features/vault/components/VaultCategoryCard";
// import { VaultFAB } from "@/features/vault/components/VaultFAB";
// import { VaultList } from "@/features/vault/components/VaultList";
// import { VaultSearchBar } from "@/features/vault/components/VaultSearchBar";
// import { VaultStats } from "@/features/vault/components/VaultStats";

// // import { useVaults } from "@/features/vault/hooks/useVaults"; //real api data layer (not mock data)


// import { useCurrentUser } from "@/hooks/useCurrentUser";
// import { useTheme } from "@/theme/useTheme";

// export default function DashboardScreen() {
//   const theme = useTheme();
//   const user = useCurrentUser();

//   const [search, setSearch] = useState("");

//   // Mock data
//   const [loading, setLoading] =
//     useState(true);

//   const [items, setItems] =
//     useState<any[]>([]);
//   // const { vaults, loading } = useVaults();

//   useEffect(() => {
//     setTimeout(() => {
//       setItems([
//         {
//           id: "1",
//           title: "Google",
//           subtitle: "gmail.com",
//         },
//         {
//           id: "2",
//           title: "Github",
//           subtitle: "github.com",
//         },
//         {
//           id: "3",
//           title: "HBL Banking",
//           subtitle: "bank account",
//         },
//       ]);

//       setLoading(false);
//     }, 800);
//   }, []);

//   return (
//     <Screen>
//       <ScrollView
//         showsVerticalScrollIndicator={false}
//       >
//         {/* HEADER */}

//         <View
//           style={{
//             marginBottom:
//               theme.spacing.lg,
//           }}
//         >
//           <Text variant="title">
//             Welcome Back
//           </Text>

//           <Text variant="muted">
//             {user?.fullName}
//           </Text>
//         </View>

//         {/* SEARCH */}

//         <VaultSearchBar
//           value={search}
//           onChangeText={setSearch}
//         />

//         <View
//           style={{
//             height:
//               theme.spacing.lg,
//           }}
//         />

//         {/* STATS */}

//         <VaultStats
//           vaults={12}
//           items={84}
//           storage="128MB"
//         />

//         <View
//           style={{
//             height:
//               theme.spacing.xl,
//           }}
//         />

//         {/* CATEGORIES */}

//         <Text variant="subtitle">
//           Categories
//         </Text>

//         <View
//           style={{
//             flexDirection: "row",
//             gap: theme.spacing.md,
//             marginTop:
//               theme.spacing.md,
//           }}
//         >
//           <VaultCategoryCard
//             title="Personal"
//             count={24}
//           />

//           <VaultCategoryCard
//             title="Work"
//             count={12}
//           />
//         </View>

//         <View
//           style={{
//             flexDirection: "row",
//             gap: theme.spacing.md,
//             marginTop:
//               theme.spacing.md,
//           }}
//         >
//           <VaultCategoryCard
//             title="Finance"
//             count={8}
//           />

//           <VaultCategoryCard
//             title="Passwords"
//             count={40}
//           />
//         </View>

//         <View
//           style={{
//             height:
//               theme.spacing.xl,
//           }}
//         />

//         {/* RECENT */}

//         <Text variant="subtitle">
//           Recent Vaults
//         </Text>

//         <View
//           style={{
//             marginTop:
//               theme.spacing.md,
//           }}
//         >
//           {/* mock data */}
//           <VaultList
//             items={items}
//             loading={loading}
//           />
//           {/* <VaultList vaults={vaults} /> //real time data fetch */}
//         </View>

//         <View
//           style={{
//             height: 120,
//           }}
//         />
//       </ScrollView>

//       <VaultFAB />
//     </Screen>
//   );
// }

