// src/features/auth/auth.persistence.ts

import { STORAGE_KEYS } from "@/constants/storage";
import * as SecureStore from "expo-secure-store";

export const authPersistence = {
  // ACCESS TOKEN
  getAccessToken: () =>
    SecureStore.getItemAsync(STORAGE_KEYS.ACCESS_TOKEN),

  setAccessToken: (token: string) =>
    SecureStore.setItemAsync(STORAGE_KEYS.ACCESS_TOKEN, token),

  deleteAccessToken: () =>
    SecureStore.deleteItemAsync(STORAGE_KEYS.ACCESS_TOKEN),

  // REFRESH TOKEN (NEW)
  getRefreshToken: () =>
    SecureStore.getItemAsync(STORAGE_KEYS.REFRESH_TOKEN),

  setRefreshToken: (token: string) =>
    SecureStore.setItemAsync(STORAGE_KEYS.REFRESH_TOKEN, token),

  deleteRefreshToken: () =>
    SecureStore.deleteItemAsync(STORAGE_KEYS.REFRESH_TOKEN),

  clearAll: async () => {
    await Promise.all([
      SecureStore.deleteItemAsync(STORAGE_KEYS.ACCESS_TOKEN),
      SecureStore.deleteItemAsync(STORAGE_KEYS.REFRESH_TOKEN),
    ]);
  },
};



// import * as SecureStore from "expo-secure-store";

// import { STORAGE_KEYS } from "@/constants/storage";

// export const authPersistence = {
//   // Access Token
//   async getAccessToken() {
//     return SecureStore.getItemAsync(
//       STORAGE_KEYS.ACCESS_TOKEN
//     );
//   },

//   async setAccessToken(token: string) {
//     return SecureStore.setItemAsync(
//       STORAGE_KEYS.ACCESS_TOKEN,
//       token
//     );
//   },

//   async deleteAccessToken() {
//     return SecureStore.deleteItemAsync(
//       STORAGE_KEYS.ACCESS_TOKEN
//     );
//   },

//   // Refresh Token
//   getRefreshToken: () =>
//     SecureStore.getItemAsync(STORAGE_KEYS.REFRESH_TOKEN),

//   setRefreshToken: (token: string) =>
//     SecureStore.setItemAsync(STORAGE_KEYS.REFRESH_TOKEN, token),

//   deleteRefreshToken: () =>
//     SecureStore.deleteItemAsync(STORAGE_KEYS.REFRESH_TOKEN),

//   clearAll: async () => {
//     await Promise.all([
//       SecureStore.deleteItemAsync(STORAGE_KEYS.ACCESS_TOKEN),
//       SecureStore.deleteItemAsync(STORAGE_KEYS.REFRESH_TOKEN),
//     ]);
//   },
// };