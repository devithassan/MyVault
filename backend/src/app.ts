// src/app.ts

import Fastify from "fastify";
import cors from "@fastify/cors";
import multipart from "@fastify/multipart";

import fastifyStatic from "@fastify/static";
import path from "path";

import authRoutes from "./modules/auth/auth.routes";
import userRoutes from "./modules/users/user.routes";
import vaultRoutes from "./modules/vaults/vault.routes";

import { attachmentRoutes } from "./modules/attachments/attachment.routes";

const app = Fastify({
  logger: {
    transport: {
      target: "pino-pretty",
      options: {
        colorize: true,
        translateTime: "HH:MM:ss",
        ignore: "pid,hostname",
      },
    },
  },
});

app.register(cors, {
  origin: process.env.CLIENT_URL,
});

app.register(multipart, {
  limits: {
    fileSize: 50 * 1024 * 1024,
  },
});

app.register(fastifyStatic, {
  root: path.join(
    process.cwd(),
    "uploads"
  ),
  prefix: "/uploads/",
});

app.register(authRoutes, {
  prefix: "/api/auth",
});

app.register(userRoutes, {
  prefix: "/api/users",
});

app.register(vaultRoutes, {
  prefix: "/api/vault",
});

app.register(attachmentRoutes, {
  prefix: "/api/attachments",
});

export default app;