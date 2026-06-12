export type VaultCategory =
  | "login"
  | "bank"
  | "card"
  | "note"
  | "identity";

export interface Vault {
  id: string;

  title: string;

  category: VaultCategory;

  username?: string;

  email?: string;

  password?: string;

  website?: string;

  notes?: string;

  createdAt: string;

  updatedAt: string;
}