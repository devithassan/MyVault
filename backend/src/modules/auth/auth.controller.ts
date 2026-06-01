// src/modules/auth/auth.controller.ts

import { FastifyReply, FastifyRequest } from "fastify";

import {
  registerSchema,
  RegisterInput,
} from "./auth.schema";

import {
  registerUser,
} from "./auth.service";

import {
  verifyEmailSchema,
} from "./auth.schema";

import {
  verifyEmail,
} from "./auth.service";

import {
  createPasswordSchema,
} from "./auth.schema";

import {
  createPassword,
} from "./auth.service";

import {
  onboardingStatusSchema,
} from "./auth.schema";

import {
  getOnboardingStatus,
} from "./auth.service";

import {
  loginSchema,
} from "./auth.schema";

import {
  loginUser,
} from "./auth.service";



export async function registerController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    // Validate request body
    const validatedData =
      registerSchema.parse(request.body);

    // Execute business logic
    const result = await registerUser(
      validatedData as RegisterInput
    );

    return reply.status(201).send({
      success: true,
      message:
        "Registration successful. Verification email sent.",
      data: result,
    });
  } catch (error: any) {
    console.error(error);

    return reply.status(400).send({
      success: false,
      message:
        error.message || "Registration failed",
    });
  }
}

export async function verifyEmailController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const { token } =
      verifyEmailSchema.parse(
        request.body
      );

    const result =
      await verifyEmail(token);

    return reply.send({
      success: true,
      message:
        "Email verified successfully",
      data: result,
    });
  } catch (error: any) {
    if (error.message === "INVALID_OR_ALREADY_USED_TOKEN") {
      return reply.status(400).send({
        success: false,
        code: "ALREADY_VERIFIED",
        message:
          "Email is already verified",
      });
    }
    return reply.status(400).send({
      success: false,
      message:
        error.message ||
        "Verification failed",
    });
  }
}

export async function createPasswordController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const validatedData =
      createPasswordSchema.parse(
        request.body
      );

    const result =
      await createPassword(
        validatedData
      );

    return reply.send({
      success: true,
      message:
        "Password created successfully",
      data: result,
    });
  } catch (error: any) {
    return reply.status(400).send({
      success: false,
      message:
        error.message,
    });
  }
}

export async function onboardingStatusController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const validatedData =
      onboardingStatusSchema.parse(
        request.body
      );

    const result =
      await getOnboardingStatus(
        validatedData
      );

    return reply.send({
      success: true,
      data: result,
    });
  } catch (error: any) {
    return reply.status(400).send({
      success: false,
      message:
        error.message ||
        "Unable to determine onboarding status",
    });
  }
}

export async function loginController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const validatedData =
      loginSchema.parse(
        request.body
      );

    const result =
      await loginUser(
        validatedData
      );

    return reply.send({
      success: true,
      data: result,
    });
  } catch (error: any) {
    return reply.status(400).send({
      success: false,
      message:
        error.message ||
        "Login failed",
    });
  }
}

