// src/app/_layout.tsx (root layout for the app)


import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import {
  Stack,
  useRouter,
  useSegments,
} from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";

import { useAuthStore } from "@/features/auth/auth.store";
import { useColorScheme } from "@/hooks/use-color-scheme";

export default function RootLayout() {
  const colorScheme = useColorScheme();

  const router = useRouter();
  const segments = useSegments();

  const {
    user,
    hydrated,
    hydrateAuth,
  } = useAuthStore();

  useEffect(() => {
    hydrateAuth();
  }, []);

  useEffect(() => {
    if (!hydrated) return;

    const inAuthGroup =
      segments[0] === "auth";

    if (!user && !inAuthGroup) {
      router.replace("/auth");
      return;
    }

    if (user && inAuthGroup) {
      router.replace("/(tabs)");
      return;
    }
  }, [user, hydrated, segments]);

  if (!hydrated) {
    return null;
  }

  return (
    <ThemeProvider
      value={
        colorScheme === "dark"
          ? DarkTheme
          : DefaultTheme
      }
    >
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}

// import {
//   DarkTheme,
//   DefaultTheme,
//   ThemeProvider,
// } from "@react-navigation/native";

// import {
//   Stack,
//   useRouter,
//   useSegments,
// } from "expo-router";

// import { StatusBar } from "expo-status-bar";
// import { useEffect } from "react";
// import "react-native-reanimated";

// import { useAuthStore } from "@/features/auth/auth.store";
// import { useColorScheme } from "@/hooks/use-color-scheme";

// export default function RootLayout() {
//   const colorScheme =
//     useColorScheme();

//   const router = useRouter();
//   const segments = useSegments();

//   const {
//     user,
//     hydrated,
//     hydrateAuth,
//   } = useAuthStore();

//   // Restore session on app start
//   useEffect(() => {
//     hydrateAuth();
//   }, []);

//   // Route guard
//   useEffect(() => {
//     if (!hydrated) {
//       return;
//     }

//     const inAuthGroup =
//       segments[0] === "auth";

//     // Not logged in
//     if (!user && !inAuthGroup) {
//       router.replace("/auth");
//       return;
//     }

//     // Logged in
//     if (user && inAuthGroup) {
//       router.replace("/(tabs)");
//       return;
//     }
//   }, [
//     user,
//     hydrated,
//     segments,
//   ]);

//   return (
//     <ThemeProvider
//       value={
//         colorScheme === "dark"
//           ? DarkTheme
//           : DefaultTheme
//       }
//     >
//       <Stack
//         screenOptions={{
//           headerShown: false,
//         }}
//       />

//       <StatusBar style="auto" />
//     </ThemeProvider>
//   );
// }

// import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
// import { Stack } from "expo-router";
// import { StatusBar } from "expo-status-bar";
// import { useEffect } from "react";
// import "react-native-reanimated";

// import { useAuthStore } from "@/features/auth/auth.store";
// import { useColorScheme } from "@/hooks/use-color-scheme";

// export default function RootLayout() {
//   const colorScheme = useColorScheme();

//   const { hydrateAuth } = useAuthStore();
//   useEffect(() => {
//     hydrateAuth();
//   }, []);
//   // const router = useRouter();
//   // const segments = useSegments();

//   // const { user, hydrated, hydrateAuth } = useAuthStore();
  

//   // // Load token on app start
//   // useEffect(() => {
//   //   hydrateAuth();
//   // }, []);

//   // // Auth routing guard
//   // useEffect(() => {
//   //   if (!hydrated) return;

//   //   const segment0 = segments[0];
//   //   const inAuthGroup = segment0 === "auth";


//   //   if (!user && !inAuthGroup) {
//   //     router.replace("/auth");
//   //     return;
//   //   }

//   //   if (user && inAuthGroup) {
//   //     router.replace("/(tabs)");
//   //     return;
//   //   }
//   // }, [user, hydrated, segments]);

//   return (
//     <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
//       <Stack screenOptions={{ headerShown: false }} />
//       <StatusBar style="auto" />
//     </ThemeProvider>
//   );
// }














// import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
// import { Stack, useRouter, useSegments } from 'expo-router';
// import {useEffect} from 'react';
// import { useAuthStore } from '@/features/auth/auth.store';
// import { StatusBar } from 'expo-status-bar';
// import 'react-native-reanimated';

// import { useColorScheme } from '@/hooks/use-color-scheme';

// export const unstable_settings = {
//   anchor: '(tabs)',
// };

// export default function RootLayout() {

//   const colorScheme = useColorScheme();
//   const { user, hydrateAuth } = useAuthStore();
//   const segments = useSegments();
//   const router = useRouter();

//   useEffect(() => {
//     hydrateAuth();
//   }, []);

//   useEffect(() => {
//     const inAuthGroup = segments[0] === "auth";

//     if (!user && !inAuthGroup) {
//       router.replace("/auth");
//     }

//     if (user && inAuthGroup) {
//       router.replace("/(tabs)");
//     }
//   }, [user, segments]);


//   return (
//     <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
//       <Stack>
//         <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
//         <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
//       </Stack>
//       <StatusBar style="auto" />
//     </ThemeProvider>
//   );
// }
