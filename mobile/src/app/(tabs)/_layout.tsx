// // src/app/(tabs)/_layout.tsx

import { Tabs } from "expo-router";
import { Home, User } from "lucide-react-native";
import { View } from "react-native";

import Text from "@/components/ui/Text";
import { useTheme } from "@/theme/useTheme";

function TabItem({
  icon,
  label,
  focused,
}: {
  icon: React.ReactNode;
  label: string;
  focused: boolean;
}) {
  const theme = useTheme();

  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        transform: [{ scale: focused ? 1.05 : 1 }],
      }}
    >
      <View
        style={{
          marginBottom: 2,
          opacity: focused ? 1 : 0.6,
        }}
      >
        {icon}
      </View>

      <Text
        variant="caption"
        style={{
          color: focused
            ? theme.colors.primary
            : theme.colors.muted,
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

        tabBarShowLabel: false,

        tabBarStyle: {
          backgroundColor: theme.colors.background,
          borderTopColor: theme.colors.border,
          borderTopWidth: 1,
          height: 64,
          paddingTop: 8,
          paddingBottom: 8,
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
            <TabItem
              focused={focused}
              label="Vault"
              icon={
                <Home
                  size={20}
                  color={
                    focused
                      ? theme.colors.primary
                      : theme.colors.muted
                  }
                />
              }
            />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <TabItem
              focused={focused}
              label="Profile"
              icon={
                <User
                  size={20}
                  color={
                    focused
                      ? theme.colors.primary
                      : theme.colors.muted
                  }
                />
              }
            />
          ),
        }}
      />
    </Tabs>
  );
}




// import Text from "@/components/ui/Text";
// import { useTheme } from "@/theme/useTheme";
// import { Tabs } from "expo-router";
// import { View } from "react-native";

// function TabIcon({
//   label,
//   focused,
// }: {
//   label: string;
//   focused: boolean;
// }) {
//   const theme = useTheme();

//   return (
//     <View style={{ alignItems: "center", justifyContent: "center" }}>
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
//         tabBarShowLabel: false,
//         tabBarStyle: {
//           backgroundColor: theme.colors.background,
//           borderTopColor: theme.colors.border,
//           height: 60,
//         },
//         tabBarActiveTintColor: theme.colors.primary,
//         tabBarInactiveTintColor: theme.colors.muted,
//       }}
//     >
//       <Tabs.Screen
//         name="index"
//         options={{
//           title: "Vault",
//           tabBarIcon: ({ focused }) => (
//             <TabIcon label="Vault" focused={focused} />
//           ),
//         }}
//       />

//       <Tabs.Screen
//         name="profile"
//         options={{
//           title: "Profile",
//           tabBarIcon: ({ focused }) => (
//             <TabIcon label="Profile" focused={focused} />
//           ),
//         }}
//       />
//     </Tabs>
//   );
// }
