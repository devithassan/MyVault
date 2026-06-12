import { useEffect } from "react";
import { useVaultStore } from "../vault.store";

export function useVaults() {
  const vaults = useVaultStore((s) => s.vaults);
  const loading = useVaultStore((s) => s.loading);
  const fetchVaults = useVaultStore((s) => s.fetchVaults);

  useEffect(() => {
    fetchVaults();
  }, []);

  return {
    vaults,
    loading,
  };
}



// import { useEffect } from "react";

// import { vaultService } from "../vault.service";
// import { useVaultStore } from "../vault.store";

// export function useVaults() {
//   const vaults = useVaultStore(
//     (s) => s.vaults
//   );

//   const setVaults =
//     useVaultStore(
//       (s) => s.setVaults
//     );

//   useEffect(() => {
//     const load =
//       async () => {
//         const data =
//           await vaultService.getVaults();

//         setVaults(data);
//       };

//     load();
//   }, [setVaults]);

//   return {
//     vaults,
//   };
// }