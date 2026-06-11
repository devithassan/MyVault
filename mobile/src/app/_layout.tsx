// src/app/_layout.tsx (root layout for the app)



// src/app/_layout.tsx

import { useEffect } from "react";
import {
  ActivityIndicator,
  View,
} from "react-native";

import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationLightTheme,
  ThemeProvider,
} from "@react-navigation/native";

import {
  Stack,
  useRouter,
  useSegments,
} from "expo-router";

import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import { useAuthStore } from "@/features/auth/auth.store";

import {
  darkTheme,
  lightTheme,
} from "@/theme/theme";

import { useThemeStore } from "@/theme/theme.store";

function AppLoader() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ActivityIndicator size="large" />
    </View>
  );
}

export default function RootLayout() {
  const router = useRouter();
  const segments = useSegments();

  /**
   * AUTH
   */
  const user = useAuthStore(
    (state) => state.user
  );

  const hydrated = useAuthStore(
    (state) => state.hydrated
  );

  const hydrateAuth = useAuthStore(
    (state) => state.hydrateAuth
  );

  /**
   * THEME
   */
  const mode = useThemeStore(
    (state) => state.mode
  );

  const themeHydrated = useThemeStore(
    (state) => state.hydrated
  );

  const hydrateTheme = useThemeStore(
    (state) => state.hydrateTheme
  );

  /**
   * ACTIVE THEME
   */
  const appTheme =
    mode === "dark"
      ? darkTheme
      : lightTheme;

  /**
   * APP STARTUP
   */
  useEffect(() => {
    hydrateAuth();
    hydrateTheme();
  }, [hydrateAuth, hydrateTheme]);

  /**
   * ROUTE GUARD
   */
  useEffect(() => {
    if (!hydrated) return;

    const inAuthGroup =
      segments?.[0] === "auth";

    /**
     * Not logged in
     */
    if (!user && !inAuthGroup) {
      router.replace("/auth/login");
      return;
    }

    /**
     * Logged in
     */
    if (user && inAuthGroup) {
      router.replace("/(tabs)");
    }
  }, [
    hydrated,
    user,
    segments,
    router,
  ]);

  /**
   * WAIT FOR STORE HYDRATION
   */
  if (!hydrated || !themeHydrated) {
    return <AppLoader />;
  }

  /**
   * Navigation Theme
   */
  const navigationTheme =
    mode === "dark"
      ? NavigationDarkTheme
      : NavigationLightTheme;

  return (
    <ThemeProvider value={navigationTheme}>
      <Stack
        screenOptions={{
          headerShown: false,

          contentStyle: {
            backgroundColor:
              appTheme.colors.background,
          },
        }}
      />

      <StatusBar
        style={
          mode === "dark"
            ? "light"
            : "dark"
        }
      />
    </ThemeProvider>
  );
}

// import { useEffect } from "react";
// import {
//   ActivityIndicator,
//   View,
// } from "react-native";

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
// import "react-native-reanimated";

// import { useAuthStore } from "@/features/auth/auth.store";
// import { useThemeStore } from "@/theme/theme.store";

// function AppLoader() {
//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <ActivityIndicator size="large" />
//     </View>
//   );
// }

// export default function RootLayout() {
//   const router = useRouter();
//   const segments = useSegments();

//   /**
//    * AUTH
//    */
//   const user = useAuthStore(
//     (state) => state.user
//   );

//   const hydrated = useAuthStore(
//     (state) => state.hydrated
//   );

//   const hydrateAuth = useAuthStore(
//     (state) => state.hydrateAuth
//   );

//   /**
//    * THEME
//    */
//   const mode = useThemeStore(
//     (state) => state.mode
//   );

//   const themeHydrated = useThemeStore(
//     (state) => state.hydrated
//   );

//   const hydrateTheme = useThemeStore(
//     (state) => state.hydrateTheme
//   );

//   /**
//    * APP STARTUP
//    */
//   useEffect(() => {
//     hydrateAuth();
//     hydrateTheme();
//   }, [hydrateAuth, hydrateTheme]);

//   /**
//    * ROUTE GUARD
//    */
//   useEffect(() => {
//     if (!hydrated) return;

//     const inAuthGroup =
//       segments?.[0] === "auth";

//     if (!user && !inAuthGroup) {
//       router.replace("/auth");
//       return;
//     }

//     if (user && inAuthGroup) {
//       router.replace("/(tabs)");
//     }
//   }, [
//     hydrated,
//     user,
//     segments,
//     router,
//   ]);

//   /**
//    * WAIT FOR HYDRATION
//    */
//   if (!hydrated || !themeHydrated) {
//     return <AppLoader />;
//   }

//   return (
//     <ThemeProvider
//       value={
//         mode === "dark"
//           ? DarkTheme
//           : DefaultTheme
//       }
//     >
//       <Stack
//         screenOptions={{
//           headerShown: false,
//         }}
//       />

//       <StatusBar
//         style={
//           mode === "dark"
//             ? "light"
//             : "dark"
//         }
//       />
//     </ThemeProvider>
//   );
// }


// import { useEffect } from "react";
// import { ActivityIndicator, View } from "react-native";

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
// import "react-native-reanimated";

// import { useAuthStore } from "@/features/auth/auth.store";
// import { useColorScheme } from "@/hooks/use-color-scheme";

// function AppLoader() {
//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <ActivityIndicator size="large" />
//     </View>
//   );
// }

// export default function RootLayout() {
//   const colorScheme = useColorScheme();
//   const router = useRouter();
//   const segments = useSegments();

//   const user = useAuthStore((state) => state.user);
//   const hydrated = useAuthStore((state) => state.hydrated);
//   const hydrateAuth = useAuthStore((state) => state.hydrateAuth);

//   useEffect(() => {
//     hydrateAuth();
//   }, [hydrateAuth]);

//   useEffect(() => {
//     if (!hydrated) return;

//     const inAuthGroup = segments?.[0] === "auth"; // FIX: computed inside effect scope safety

//     if (!user && !inAuthGroup) {
//       router.replace("/auth/login");
//       return;
//     }

//     if (user && inAuthGroup) {
//       router.replace("/(tabs)");
//     }
//   }, [hydrated, user, segments, router]);

//   if (!hydrated) {
//     return <AppLoader />;
//   }

//   return (
//     <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
//       <Stack screenOptions={{ headerShown: false }} />
//       <StatusBar style="auto" />
//     </ThemeProvider>
//   );
// }
