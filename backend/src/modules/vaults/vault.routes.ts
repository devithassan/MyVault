// src/modules/vaults/vault.routes.ts

import {
  FastifyInstance,
} from "fastify";

import { authMiddleware } from "../../plugins/auth.middleware";

import { vaultController } from "./vault.controller";

export default async function vaultRoutes(
  fastify: FastifyInstance
) {
  fastify.addHook(
    "preHandler",
    authMiddleware
  );

  fastify.get(
    "/",
    vaultController.getAll
  );

  fastify.get(
    "/:id",
    vaultController.getById
  );

  fastify.post(
    "/",
    vaultController.create
  );

  fastify.patch(
    "/:id",
    vaultController.update
  );

  fastify.delete(
    "/:id",
    vaultController.remove
  );
}