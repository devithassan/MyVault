// src/app/_layout.tsx (root layout for the app)



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
      {/* <Stack
        screenOptions={{
          headerShown: false,

          contentStyle: {
            backgroundColor:
              appTheme.colors.background,
          },
        }}
      />
      <Stack.Screen
        name="image-viewer"
        options={{
          title: "Image",
          headerShown: true,
        }}
      /> */}


      <Stack
        screenOptions={{
          headerShown: true,
          contentStyle: {
            backgroundColor:
              appTheme.colors.background,
          },
        }}
      >
        {/* <Stack.Screen
          name="image-viewer"
          options={{
            headerShown: true,
            title: "Image",
          }}
        /> */}
      </Stack>
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
