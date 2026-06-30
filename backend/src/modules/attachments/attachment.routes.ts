//src/modules/attachments/attachment.routes.ts

import { FastifyInstance } from "fastify";

import { attachmentController } from "./attachment.controller";
import { authMiddleware } from "../../plugins/auth.middleware";

export async function attachmentRoutes(
  app: FastifyInstance
) {
  app.post(
    "/upload/:vaultId",
    {
      preHandler: [authMiddleware],
    },
    attachmentController.upload
  );

  app.get(
    "/:attachmentId",
    {
        preHandler: [authMiddleware],
    },
    attachmentController.download
  );

  app.delete(
    "/:attachmentId",
    {
        preHandler: [authMiddleware],
    },
    attachmentController.delete
    );

  app.get(
    "/vault/:vaultId",
    {
      preHandler: [authMiddleware],
    },
    attachmentController.list
  );
}