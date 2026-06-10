import { rawApi } from "@/services/api/rawClient";

export const refreshSession = async (refreshToken: string) => {
  const res = await rawApi.post("/auth/refresh", {
    refreshToken,
  });

  return res.data;
};