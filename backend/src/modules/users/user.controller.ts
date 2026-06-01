// src/modules/users/user.controller.ts

import {
  FastifyReply,
  FastifyRequest,
} from "fastify";

import {
  getCurrentUser,
} from "./user.service";

export async function me(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const userId =
      (request.user as any)?.userId;

    const user =
      await getCurrentUser(
        userId
      );

    return reply.send({
      success: true,
      data: user,
    });
  } catch (error: any) {
    return reply.status(404).send({
      success: false,
      message:
        error.message,
    });
  }
}