// src/features/auth/auth.store.ts

import { getOnboardingStatus } from "@/features/auth/auth.service";
import { getMe } from "@/features/user/user.service";
// import * as SecureStore from "expo-secure-store";
import { authPersistence } from "@/features/auth/auth.persistence";
import { create } from "zustand";

type OnboardingStatus =
  | "PENDING_VERIFICATION"
  | "CREATE_PASSWORD"
  | "LOGIN";


// type User = {            // testing level. after login store! this is for temp testing auth 
//   email: string;
//   token: string;
// };

type User = {          // production level. loading actual user profile
  id: string;
  email: string;
  fullName: string;
}

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

  //testing level. Load token on app start
  // hydrateAuth: async () => {
  //   try{
  //     const token = await SecureStore.getItemAsync("accessToken");

  //     if (token) {
  //       set({
  //         user: {
  //           email: "",
  //           token,
  //         },
  //       });
  //     }
  //   }
  //   finally {
  //     set({ hydrated: true });
  //   }
  // },

  // production level 

  hydrateAuth: async () => {
    try {
      // const token =
      //   await SecureStore.getItemAsync(
      //     "accessToken"
      //   );
      const token =
        await authPersistence.getAccessToken();


      if (!token) {
        return;

      // if (!token) {              //if importing from types
      //   set({
      //     user: null,
      //   });

      //   return;
      // }
      }

      const res = await getMe();

      if (!res?.success) {
        set ({user: null});
        return;
      }

      set({
        user: {
          id: res.data._id,
          email: res.data.email,
          fullName: res.data.fullName,
          // token,
        },
      });
    } catch (error) {
      // await SecureStore.deleteItemAsync(
      //   "accessToken"
      // );
      await authPersistence.deleteAccessToken();

      set({
        user: null,
      });
    } finally {
      set({
        hydrated: true,
      });
    }
  },

  logout: async () => {
    // await SecureStore.deleteItemAsync("accessToken");
    await authPersistence.deleteAccessToken();

    set({
      user: null,
      email: "",
      onboardingStatus: null,
    });
  },
}));