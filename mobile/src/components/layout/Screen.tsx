// src/components/layout/Screen.tsx

import React from "react";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";

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





// import React from "react";
// import {
//     SafeAreaView,
//     StatusBar,
//     StyleSheet,
//     View,
//     ViewStyle,
// } from "react-native";

// import { useThemeStore } from "@/theme/theme.store";

// type ScreenProps = {
//   children: React.ReactNode;

//   /**
//    * Optional override if a screen needs custom padding
//    */
//   style?: ViewStyle;

//   /**
//    * If false → removes default padding (rare use)
//    */
//   noPadding?: boolean;

//   /**
//    * If true → removes background (rare use like modals)
//    */
//   transparent?: boolean;
// };

// export default function Screen({
//   children,
//   style,
//   noPadding = false,
//   transparent = false,
// }: ScreenProps) {
//   const mode = useThemeStore((state) => state.mode);

//   const isDark = mode === "dark";

//   return (
//     <SafeAreaView
//       style={[
//         styles.safeArea,
//         {
//           backgroundColor: transparent
//             ? "transparent"
//             : isDark
//             ? "#0B0B0F" // fallback dark (can later map from theme.colors.background)
//             : "#FFFFFF",
//         },
//       ]}
//     >
//       <StatusBar
//         barStyle={isDark ? "light-content" : "dark-content"}
//       />

//       <View
//         style={[
//           styles.container,
//           {
//             padding: noPadding ? 0 : 16,
//           },
//           style,
//         ]}
//       >
//         {children}
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//   },
//   container: {
//     flex: 1,
//   },
// });