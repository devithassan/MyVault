// src/features/user/user.service.ts

import { api } from "@/services/api/client";

export const userService = {
  getMe: async () => {
    const res = await api.get("/users/me");
    return res.data;
  },
};


// import { api } from "@/services/api/client";

// export async function getMe() {
//   const res = await api.get("/users/me");
//   return res.data;
// }
