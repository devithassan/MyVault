// src/components/layout/Screen.tsx

import React from "react";
import {
  StatusBar,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";

import {
  SafeAreaView,
} from "react-native-safe-area-context";

import { useTheme } from "@/theme/useTheme";

type ScreenProps = {
  children: React.ReactNode;
  style?: ViewStyle;
  noPadding?: boolean;
  transparent?: boolean;
};

export default function Screen({
  children,
  style,
  noPadding = false,
  transparent = false,
}: ScreenProps) {
  const theme = useTheme();
  const isDark = theme.colors.background !== "#fff"; // safe fallback logic

  return (
    <SafeAreaView
      style={[
        styles.safeArea,
        {
          backgroundColor: transparent
            ? "transparent"
            : theme.colors.background,
        },
      ]}
    >
      <StatusBar
        barStyle={isDark ? "light-content" : "dark-content"}
      />

      <View
        style={[
          styles.container,
          {
            padding: noPadding ? 0 : theme.spacing.md,
          },
          style,
        ]}
      >
        {children}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
});



