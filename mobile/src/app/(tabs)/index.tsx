// src/app/(tabs)/index.tsx


import { useEffect, useState } from "react";
import { View } from "react-native";

import Screen from "@/components/layout/Screen";
import { VaultCard } from "@/components/vault/VaultCard";
import { VaultEmptyState } from "@/components/vault/VaultEmptyState";
import { VaultHeader } from "@/components/vault/VaultHeader";

import Text from "@/components/ui/Text";
import { useTheme } from "@/theme/useTheme";

type VaultItem = {
  id: string;
  title: string;
  subtitle: string;
};

export default function DashboardScreen() {
  const theme = useTheme();

  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState<VaultItem[]>([]);

  useEffect(() => {
    /**
     * MOCK FETCH (replace with API later)
     */
    setTimeout(() => {
      setItems([
        {
          id: "1",
          title: "Google Account",
          subtitle: "gmail.com",
        },
        {
          id: "2",
          title: "Bank Login",
          subtitle: "hbl banking",
        },
      ]);

      setLoading(false);
    }, 800);
  }, []);

  return (
    <Screen>
      <VaultHeader />

      {loading ? (
        <View style={{ marginTop: 20 }}>
          <Text variant="muted">Loading vault...</Text>
          {/* <Text color="secondary">Loading vault...</Text> */}
        </View>
      ) : items.length === 0 ? (
        <VaultEmptyState />
      ) : (
        <View style={{ gap: theme.spacing.md, marginTop: 16 }}>
          {items.map((item) => (
            <VaultCard
              key={item.id}
              title={item.title}
              subtitle={item.subtitle}
            />
          ))}
        </View>
      )}
    </Screen>
  );
}


// real production app
// import { Text, View } from "react-native";

// import { useCurrentUser } from "@/hooks/useCurrentUser";

// export default function HomeScreen() {
//   const user = useCurrentUser();
//   const stats = [
//   {
//     title: "Vaults",
//     value: "0",
//   },
//   {
//     title: "Items",
//     value: "0",
//   },
//   {
//     title: "Storage",
//     value: "0 MB",
//   },
// ];

//   return (
//     <View
//       style={{
//         flex: 1,
//         padding: 24,
//         gap: 24,
//       }}
//     >
//       <View>
//         <Text
//           style={{
//             fontSize: 28,
//             fontWeight: "700",
//           }}
//         >
//           Welcome Back
//         </Text>

//         <Text
//           style={{
//             marginTop: 4,
//             fontSize: 16,
//           }}
//         >
//           {user?.fullName}
//         </Text>

//         <Text>
//           {user?.email}
//         </Text>
//       </View>
//     </View>
//   );
// }











// // Testing level
// import { useAuthStore } from "@/features/auth/auth.store";
// import { useRouter } from "expo-router";
// import { Button, View } from "react-native";

// export default function Home() {
//   const router = useRouter();
//   console.log("HOME SCREEN RENDERED");
//   const logout = useAuthStore(
//   (s) => s.logout
// );
  
//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: "center",
//         padding: 20,
//         gap: 12,
//       }}
//     >
//       <Button
//         title="Auth Entry"
//         onPress={() =>
//           router.push("/auth")
//         }
//       />

//       <Button
//         title="Create Password"
//         onPress={() =>
//           router.push("/auth/create-password")
//         }
//       />

//       <Button
//         title="Login"
//         onPress={() => {
//           console.log("GO LOGIN");
//           router.push("/auth/login");
//         }}
//       />

//       <Button
//         title="Logout"
//         onPress={async () => {
//           await logout();

//           router.replace("/auth");
//         }}
//       />
//     </View>
//   );
// }