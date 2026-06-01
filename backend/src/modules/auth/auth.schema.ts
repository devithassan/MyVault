// src/modules/auth/auth.schema.ts

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

export const createPasswordSchema =
  z.object({
    email: z.string().email(),

    password: z
      .string()
      .min(8)
      .max(128),
  });

export type CreatePasswordInput =
  z.infer<typeof createPasswordSchema>;

export const onboardingStatusSchema =
  z.object({
    email: z.string().email(),
  });

export type OnboardingStatusInput =
  z.infer<
    typeof onboardingStatusSchema
  >;

  export const loginSchema = z.object({
  email: z.string().email(),

  password: z.string().min(1),
});

export type LoginInput =
  z.infer<typeof loginSchema>;