// src/plugins/auth.middleware.ts

import {
  FastifyReply,
  FastifyRequest,
} from "fastify";
import { AuthUser } from "../types/auth.types";
import jwt from "jsonwebtoken";

declare module "fastify" {
  interface FastifyRequest {
    user?: AuthUser;
   
  }
}


export async function authMiddleware(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const authHeader =
      request.headers.authorization;

    if (!authHeader?.startsWith("Bearer ")) {
      return reply.status(401).send({
        success: false,
        message: "Unauthorized",
      });
    }

    const token =
      authHeader.split(" ")[1];

    const decoded = jwt.verify(
      token,
      process.env.JWT_ACCESS_SECRET!
    ) as {
      userId: string;
      email?: string;
    };

    request.user = decoded;
  } catch {
    return reply.status(401).send({
      success: false,
      message: "Invalid token",
    });
  }
}