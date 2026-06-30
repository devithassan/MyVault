// src/features/user/user.service.ts

import { api } from "@/services/api/client";

export const userService = {
  getMe: async () => {
    const res = await api.get("/users/me");
    return res.data;
  },
};

