// src/modules/vaults/vault.controller.ts

import {
  FastifyReply,
  FastifyRequest,
} from "fastify";

import { vaultService } from "./vault.service";

export const vaultController = {
  getAll: async (
    request: FastifyRequest,
    reply: FastifyReply
  ) => {
    const userId = request.user!.userId;

    const vaults =
      await vaultService.getAll(userId);

    return reply.send({
      success: true,
      data: vaults,
    });
  },

  getById: async (
    request: FastifyRequest<{
      Params: {
        id: string;
      };
    }>,
    reply: FastifyReply
  ) => {
    const userId = request.user!.userId;

    const vault =
      await vaultService.getById(
        request.params.id,
        userId
      );

    return reply.send({
      success: true,
      data: vault,
    });
  },

  create: async (
    request: FastifyRequest,
    reply: FastifyReply
  ) => {
    const userId = request.user!.userId;

    const vault =
      await vaultService.create(
        userId,
        request.body
      );

    return reply.status(201).send({
      success: true,
      data: vault,
    });
  },

  update: async (
    request: FastifyRequest<{
      Params: {
        id: string;
      };
    }>,
    reply: FastifyReply
  ) => {
    const userId = request.user!.userId;

    const vault =
      await vaultService.update(
        request.params.id,
        userId,
        request.body
      );

    return reply.send({
      success: true,
      data: vault,
    });
  },

  remove: async (
    request: FastifyRequest<{
      Params: {
        id: string;
      };
    }>,
    reply: FastifyReply
  ) => {
    const userId = request.user!.userId;

    await vaultService.remove(
      request.params.id,
      userId
    );

    return reply.send({
      success: true,
    });
  },
};