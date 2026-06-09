import { api } from "@/services/api/client";

export async function getMe() {
  const res = await api.get("/users/me");
  return res.data;
}