// src/modules/vaults/vault.schema.ts

import { z } from "zod";

export const createVaultSchema = z.object({
  title: z.string().min(1),

  category: z.enum([
    "login",
    "bank",
    "card",
    "note",
    "identity",
  ]),

  username: z.string().optional(),
  email: z.string().optional(),
  password: z.string().optional(),
  website: z.string().optional(),
  notes: z.string().optional(),
});