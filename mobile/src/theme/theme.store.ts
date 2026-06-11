// src/theme/theme.store.ts

import * as SecureStore from "expo-secure-store";
import { create } from "zustand";

type ThemeMode = "light" | "dark";

type ThemeState = {
  mode: ThemeMode;
  hydrated: boolean;

  setMode: (mode: ThemeMode) => Promise<void>;
  toggleTheme: () => Promise<void>;
  hydrateTheme: () => Promise<void>;
};

const STORAGE_KEY = "theme_mode";

export const useThemeStore = create<ThemeState>(
  (set, get) => ({
    mode: "dark",
    hydrated: false,

    setMode: async (mode) => {
      await SecureStore.setItemAsync(
        STORAGE_KEY,
        mode
      );

      set({ mode });
    },

    toggleTheme: async () => {
      const current = get().mode;

      const next =
        current === "dark"
          ? "light"
          : "dark";

      await SecureStore.setItemAsync(
        STORAGE_KEY,
        next
      );

      set({ mode: next });
    },

    hydrateTheme: async () => {
      try {
        const saved =
          await SecureStore.getItemAsync(
            STORAGE_KEY
          );

        if (
          saved === "light" ||
          saved === "dark"
        ) {
          set({
            mode: saved,
          });
        }
      } finally {
        set({
          hydrated: true,
        });
      }
    },
  })
);