import { useEffect, useState } from "react";
import {
  ScrollView,
  View,
} from "react-native";

import Screen from "@/components/layout/Screen";
import Text from "@/components/ui/Text";

import { VaultCategoryCard } from "@/features/vault/components/VaultCategoryCard";
import { VaultFAB } from "@/features/vault/components/VaultFAB";
import { VaultList } from "@/features/vault/components/VaultList";
import { VaultSearchBar } from "@/features/vault/components/VaultSearchBar";
import { VaultStats } from "@/features/vault/components/VaultStats";

// import { useVaults } from "@/features/vault/hooks/useVaults"; //real api data layer (not mock data)


import { useCurrentUser } from "@/hooks/useCurrentUser";
import { useTheme } from "@/theme/useTheme";

export default function DashboardScreen() {
  const theme = useTheme();
  const user = useCurrentUser();

  const [search, setSearch] = useState("");

  // Mock data
  const [loading, setLoading] =
    useState(true);

  const [items, setItems] =
    useState<any[]>([]);
  // const { vaults, loading } = useVaults();

  useEffect(() => {
    setTimeout(() => {
      setItems([
        {
          id: "1",
          title: "Google",
          subtitle: "gmail.com",
        },
        {
          id: "2",
          title: "Github",
          subtitle: "github.com",
        },
        {
          id: "3",
          title: "HBL Banking",
          subtitle: "bank account",
        },
      ]);

      setLoading(false);
    }, 800);
  }, []);

  return (
    <Screen>
      <ScrollView
        showsVerticalScrollIndicator={false}
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
          {/* mock data */}
          <VaultList
            items={items}
            loading={loading}
          />
          {/* <VaultList vaults={vaults} /> //real time data fetch */}
        </View>

        <View
          style={{
            height: 120,
          }}
        />
      </ScrollView>

      <VaultFAB />
    </Screen>
  );
}



// // src/app/(tabs)/index.tsx

// import { ScrollView, View } from "react-native";

// import Screen from "@/components/layout/Screen";
// import Text from "@/components/ui/Text";

// import { VaultEmptyState } from "@/components/vault/VaultEmptyState";
// import { VaultHeader } from "@/components/vault/VaultHeader";

// import { useCurrentUser } from "@/hooks/useCurrentUser";

// import { useVaults } from "@/features/vault/hooks/useVaults";

// import { VaultList } from "@/features/vault/components/VaultList";

// import { useTheme } from "@/theme/useTheme";

// export default function DashboardScreen() {
//   const theme = useTheme();

//   const user = useCurrentUser();

//   const { vaults } = useVaults();

//   return (
//     <Screen>
//       <ScrollView
//         showsVerticalScrollIndicator={false}
//         contentContainerStyle={{
//           paddingBottom: 120,
//         }}
//       >
//         <VaultHeader />

//         {/* WELCOME */}
//         <View
//           style={{
//             marginTop: theme.spacing.lg,
//             gap: theme.spacing.xs,
//           }}
//         >
//           <Text variant="title">
//             Welcome back
//           </Text>

//           <Text variant="subtitle">
//             {user?.fullName}
//           </Text>
//         </View>

//         {/* STATS */}
//         <View
//           style={{
//             flexDirection: "row",
//             marginTop: theme.spacing.lg,
//             gap: theme.spacing.md,
//           }}
//         >
//           <View
//             style={{
//               flex: 1,
//               backgroundColor: theme.colors.card,
//               borderRadius: 16,
//               padding: theme.spacing.md,
//             }}
//           >
//             <Text variant="subtitle">
//               Vaults
//             </Text>

//             <Text variant="title">
//               {vaults.length}
//             </Text>
//           </View>

//           <View
//             style={{
//               flex: 1,
//               backgroundColor: theme.colors.card,
//               borderRadius: 16,
//               padding: theme.spacing.md,
//             }}
//           >
//             <Text variant="subtitle">
//               Categories
//             </Text>

//             <Text variant="title">
//               5
//             </Text>
//           </View>
//         </View>

//         {/* SECTION HEADER */}
//         <View
//           style={{
//             marginTop: theme.spacing.xl,
//             marginBottom: theme.spacing.md,
//           }}
//         >
//           <Text variant="subtitle">
//             Recent Vaults
//           </Text>
//         </View>

//         {/* CONTENT */}
//         {vaults.length === 0 ? (
//           <VaultEmptyState />
//         ) : (
//           <VaultList vaults={vaults} />
//         )}
//       </ScrollView>
//     </Screen>
//   );
// }