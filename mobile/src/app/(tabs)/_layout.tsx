// // src/app/(tabs)/_layout.tsx


import Text from "@/components/ui/Text";
import { useTheme } from "@/theme/useTheme";
import { Tabs } from "expo-router";
import { View } from "react-native";

function TabIcon({
  label,
  focused,
}: {
  label: string;
  focused: boolean;
}) {
  const theme = useTheme();

  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <Text
        style={{
          fontSize: 12,
          color: focused
            ? theme.colors.primary
            : theme.colors.muted,
          fontWeight: focused ? "600" : "400",
        }}
      >
        {label}
      </Text>
    </View>
  );
}

export default function TabLayout() {
  const theme = useTheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.colors.background,
          borderTopColor: theme.colors.border,
          height: 60,
        },
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.muted,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Vault",
          tabBarIcon: ({ focused }) => (
            <TabIcon label="Vault" focused={focused} />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <TabIcon label="Profile" focused={focused} />
          ),
        }}
      />
    </Tabs>
  );
}

// import { Tabs } from "expo-router";
// import { View } from "react-native";

// import { Text } from "@/components/ui/Text";
// import { useTheme } from "@/theme/useTheme";

// /**
//  * Simple icon replacement (NO expo template dependency)
//  * You can later upgrade to lucide/react-native or vector-icons
//  */
// function TabIcon({
//   label,
//   focused,
// }: {
//   label: string;
//   focused: boolean;
// }) {
//   const theme = useTheme();

//   return (
//     <View
//       style={{
//         alignItems: "center",
//         justifyContent: "center",
//       }}
//     >
//       <Text
//         style={{
//           fontSize: 12,
//           color: focused
//             ? theme.colors.primary
//             : theme.colors.muted,
//           fontWeight: focused ? "600" : "400",
//         }}
//       >
//         {label}
//       </Text>
//     </View>
//   );
// }

// export default function TabLayout() {
//   const theme = useTheme();

//   return (
//     <Tabs
//       screenOptions={{
//         headerShown: false,

//         tabBarStyle: {
//           backgroundColor: theme.colors.background,
//           borderTopColor: theme.colors.border,
//           height: 60,
//           paddingBottom: 8,
//           paddingTop: 8,
//         },

//         tabBarActiveTintColor: theme.colors.primary,
//         tabBarInactiveTintColor: theme.colors.muted,
//       }}
//     >
//       {/* DASHBOARD */}
//       <Tabs.Screen
//         name="index"
//         options={{
//           title: "Vault",
//           tabBarLabel: ({ focused }) => (
//             <TabIcon label="Vault" focused={focused} />
//           ),
//         }}
//       />

//       {/* PROFILE */}
//       <Tabs.Screen
//         name="profile"
//         options={{
//           title: "Profile",
//           tabBarLabel: ({ focused }) => (
//             <TabIcon label="Profile" focused={focused} />
//           ),
//         }}
//       />
//     </Tabs>
//   );
// }
