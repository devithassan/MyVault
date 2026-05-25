import Fastify from "fastify";
import cors from "@fastify/cors";

import authRoutes from "./modules/auth/auth.routes";

const app = Fastify({
  logger: true,
});

app.register(cors, {
  origin: process.env.CLIENT_URL,
});

app.register(authRoutes, {
  prefix: "/api/auth",
});

export default app;