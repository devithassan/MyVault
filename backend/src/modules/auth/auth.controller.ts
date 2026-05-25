// src/modules/auth/auth.controller.ts

import { FastifyReply, FastifyRequest } from "fastify";

import {
  registerSchema,
  RegisterInput,
} from "./auth.schema";

import {
  registerUser,
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