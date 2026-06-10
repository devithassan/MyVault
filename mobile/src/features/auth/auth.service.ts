// src/features/auth/auth.service.ts

import { api } from "@/services/api/client";

export const authService = {

  verifyEmail: async (token: string) => {
    const res = await api.post("/auth/verify-email", { token });
    return res.data;
  },

  //   login: async (email: string, password: string) => {
  //   const res = await api.post("/auth/login", { email, password });
  //   return res.data;
  // },

  login: async (email: string, password: string) => {
    const res = await api.post("/auth/login", {
      email,
      password,
    });

    return res.data; // 👈 CLEAN
  },

};

// const BASE_URL = "http://192.168.100.17:5000/api/auth";

// export async function getOnboardingStatus(email: string) {
//   const res = await api.post("/auth/onboarding-status", { email });
//   return res.data;
// }

// temporary function until we implement the above in the backend
export async function getOnboardingStatus(email: string) {
  console.log("Calling backend...");

  const res = await api.post(
    "/auth/onboarding-status",
    { email }
  );

  console.log("Backend response:", res.data);

  return res.data;
}


export async function createPassword(email: string, password: string) {
  const res = await api.post("/auth/create-password", {
    email,
    password,
  });

  return res.data;
}

// export const refreshSession = async (refreshToken: string) => {
//   const res = await api.post("/auth/refresh", {
//     refreshToken,
//   });

//   return res.data;
// };
