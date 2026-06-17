import { api } from "@/services/api/client";
import { Vault } from "./vault.types";

type VaultResponse = {
  success: boolean;
  data: Vault[];
};

type SingleVaultResponse = {
  success: boolean;
  data: Vault;
};

export const vaultService = {
  getAll: async (): Promise<Vault[]> => {
    const res = await api.get<VaultResponse>("/vault");

    console.log(    //temp log for vault response
      "VAULT RESPONSE:",
      res.data
    );
    return res.data.data;
  },

  getById: async (id: string): Promise<Vault> => {
    const res = await api.get<SingleVaultResponse>(`/vault/${id}`);
    return res.data.data;
  },

  create: async (payload: Partial<Vault>): Promise<Vault> => {
    const res = await api.post<SingleVaultResponse>("/vault", payload);
    return res.data.data;
  },

  update: async (id: string, payload: Partial<Vault>): Promise<Vault> => {
    const res = await api.patch<SingleVaultResponse>(`/vault/${id}`, payload);
    return res.data.data;
  },

  remove: async (id: string): Promise<void> => {
    await api.delete(`/vault/${id}`);
  },
};




// import { Vault } from "./vault.types";

// export const vaultService = {
//   async getVaults(): Promise<
//     Vault[]
//   > {
//     return [
//       {
//         id: "1",
//         title: "Google",

//         category: "login",

//         email:
//           "user@gmail.com",

//         createdAt:
//           new Date().toISOString(),

//         updatedAt:
//           new Date().toISOString(),
//       },
//     ];
//   },
// };