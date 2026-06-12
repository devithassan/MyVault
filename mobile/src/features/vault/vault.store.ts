// src/features/vault/vault.store.ts

import { create } from "zustand";
import { vaultService } from "./vault.service";
import { Vault } from "./vault.types";

type VaultState = {
  vaults: Vault[];
  loading: boolean;

  fetchVaults: () => Promise<void>;
  setVaults: (vaults: Vault[]) => void;
  addVault: (vault: Vault) => void;
  removeVault: (id: string) => void;
};

export const useVaultStore = create<VaultState>((set, get) => ({
  vaults: [],
  loading: false,

  setVaults: (vaults) => set({ vaults }),

  addVault: (vault) =>
    set((state) => ({
      vaults: [vault, ...state.vaults],
    })),

  removeVault: (id) =>
    set((state) => ({
      vaults: state.vaults.filter((v) => v.id !== id),
    })),

  fetchVaults: async () => {
    try {
      set({ loading: true });

      const data = await vaultService.getAll();

      set({ vaults: data });
    } catch (e) {
      console.log("Vault fetch error:", e);
    } finally {
      set({ loading: false });
    }
  },
}));




// import { create } from "zustand";
// import { vaultService } from "./vault.service";
// import { Vault } from "./vault.types";

// type VaultState = {
//   vaults: Vault[];
//   loading: boolean;

//   fetchVaults: () => Promise<void>;
//   addVault: (vault: Vault) => void;
//   setVaults: (vaults: Vault[]) => void;
// };

// export const useVaultStore = create<VaultState>((set, get) => ({
//   vaults: [],
//   loading: false,

//   setVaults: (vaults) => set({ vaults }),

//   addVault: (vault) =>
//     set({ vaults: [vault, ...get().vaults] }),

//   fetchVaults: async () => {
//     try {
//       set({ loading: true });

//       const data = await vaultService.getAll();

//       set({ vaults: data });
//     } catch (e) {
//       console.log("Vault fetch error:", e);
//     } finally {
//       set({ loading: false });
//     }
//   },
// }));



// import { create } from "zustand";

// import { Vault } from "./vault.types";

// type VaultState = {
//   vaults: Vault[];

//   loading: boolean;

//   setVaults: (
//     vaults: Vault[]
//   ) => void;

//   addVault: (
//     vault: Vault
//   ) => void;

//   removeVault: (
//     id: string
//   ) => void;
// };

// export const useVaultStore =
//   create<VaultState>((set) => ({
//     vaults: [],

//     loading: false,

//     setVaults: (vaults) =>
//       set({ vaults }),

//     addVault: (vault) =>
//       set((state) => ({
//         vaults: [
//           vault,
//           ...state.vaults,
//         ],
//       })),

//     removeVault: (id) =>
//       set((state) => ({
//         vaults:
//           state.vaults.filter(
//             (v) => v.id !== id
//           ),
//       })),
//   }));