import { z } from "zod";

export const registerSchema = z.object({
  fullName: z.string().min(2).max(100),

  email: z.string().email(),
});

export const verifyEmailSchema = z.object({
  token: z.string().min(1),
});

export type RegisterInput = z.infer<typeof registerSchema>;

export type VerifyEmailInput = z.infer<
  typeof verifyEmailSchema
>;