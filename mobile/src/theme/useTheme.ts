// src/theme/useTheme.ts

import { darkTheme, lightTheme } from "./theme";
import { useThemeStore } from "./theme.store";

export function useTheme() {
  const mode = useThemeStore((state) => state.mode);

  const theme = mode === "dark" ? darkTheme : lightTheme;

  return {
    ...theme,

    /**
     * Convenience flags (VERY useful in UI)
     */
    mode,
    isDark: mode === "dark",
    isLight: mode === "light",
  };
}