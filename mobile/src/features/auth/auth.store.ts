// src/features/auth/auth.store.ts

import { getOnboardingStatus } from "@/features/auth/auth.service";
import * as SecureStore from "expo-secure-store";
import { create } from "zustand";

type OnboardingStatus =
  | "PENDING_VERIFICATION"
  | "CREATE_PASSWORD"
  | "LOGIN";

type User = {
  email: string;
  token: string;
};

type AuthState = {
  email: string;
  user: User | null;
  onboardingStatus: OnboardingStatus | null;
  hydrated: boolean;

  setEmail: (email: string) => void;
  setUser: (user: User | null) => void;
  checkOnboarding: (email: string) => Promise<any>;

  hydrateAuth: () => Promise<void>;
  logout: () => Promise<void>;
};

export const useAuthStore = create<AuthState>((set) => ({
  email: "",
  user: null,
  onboardingStatus: null as OnboardingStatus | null,
  hydrated: false,

  setEmail: (email: string) => set({ email }),
  setUser: (user: User | null) => set({ user }),

  checkOnboarding: async (email: string) => {
    const res = await getOnboardingStatus(email);

    if (res?.data?.status) {
      set({ onboardingStatus: res.data.status });
    }

    return res;
  },

  //Load token on app start
  hydrateAuth: async () => {
    try{
      const token = await SecureStore.getItemAsync("accessToken");

      if (token) {
        set({
          user: {
            email: "",
            token,
          },
        });
      }
    }
    finally {
      set({ hydrated: true });
    }
  },

  logout: async () => {
    await SecureStore.deleteItemAsync("accessToken");
    set({ user: null });
  },
}));