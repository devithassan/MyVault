import { api } from "@services/api/client";

export const authService = {
  login: async (email: string, password: string) => {
    const res = await api.post("/auth/login", { email, password });
    return res.data;
  },

  verifyEmail: async (token: string) => {
    const res = await api.post("/auth/verify-email", { token });
    return res.data;
  },
};