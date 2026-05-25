import { z } from "zod";

export const registerSchema = z.object({
  fullName: z
    .string()
    .min(2)
    .max(100),

  email: z
    .string()
    .email(),
});

export type RegisterInput = z.infer<
  typeof registerSchema
>;