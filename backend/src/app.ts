// src/app.ts

import Fastify from "fastify";
import cors from "@fastify/cors";

import authRoutes from "./modules/auth/auth.routes";
import userRoutes from "./modules/users/user.routes";


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

app.register(authRoutes, {
  prefix: "/api/auth",
});

app.register(userRoutes, {
  prefix: "/api/users",
});

export default app;