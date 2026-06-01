// src/modules/users/user.routes.ts

import {
  FastifyInstance,
} from "fastify";

import { me } from "./user.controller";

import {
  authMiddleware,
} from "../../plugins/auth.middleware";

async function userRoutes(
  app: FastifyInstance
) {
  app.get(
    "/me",
    {
      preHandler:
        authMiddleware,
    },
    me
  );
}

export default userRoutes;