//src/modules/attachments/attachment.controller.ts
import fs from "fs";
// import path from "path";
// import { randomUUID } from "crypto";
import { storage } from "../../storage";

import {
  FastifyReply,
  FastifyRequest,
} from "fastify";

import { attachmentService } from "./attachment.service";

export const attachmentController = {
  async list(
    request: FastifyRequest,
    reply: FastifyReply
  ) {
    const user = request.user;

    if (!user) {
      return reply.status(401).send({
        success: false,
        message: "Unauthorized",
      });
    }

    const { vaultId } =
      request.params as {
        vaultId: string;
      };

    const attachments =
      await attachmentService.getVaultAttachments(
        vaultId,
        user.userId
      );

    // return reply.send({
    //   success: true,
    //   data: attachments,
    // });
    // const baseUrl =
    // `${request.protocol}://${request.hostname}`;
    const baseUrl =
  `${request.protocol}://${request.host}`;
  
    const data = attachments.map((attachment) => ({
    ...attachment.toObject(),
    url:
        `${baseUrl}/uploads/` +
        attachment.storageKey.split("uploads\\").pop()?.replace(/\\/g, "/"),
    }));

    console.log(request.hostname);
    console.log(request.host);
    return reply.send({
    success: true,
    data,
    });    

    
  },

    async download(
        request: FastifyRequest,
        reply: FastifyReply
        ) {
        const user = request.user;

        if (!user) {
            return reply.status(401).send({
            success: false,
            message: "Unauthorized",
            });
        }

        const { attachmentId } =
            request.params as {
            attachmentId: string;
            };

        const attachment =
            await attachmentService.getAttachmentById(
            attachmentId,
            user.userId
            );

        if (!attachment) {
            return reply.status(404).send({
            success: false,
            message: "Attachment not found",
            });
        }

        // const file =
        //     await storage.getFile(
        //     attachment.storageKey
        //     );

        reply
            .header(
            "Content-Type",
            attachment.mimeType
            )
            .header(
            "Content-Disposition",
            `inline; filename="${attachment.originalName}"`
            );
            // reply.type(
            //     attachment.mimeType
            // );

        // return reply.send(file);
        // return reply.sendFile(
        //     attachment.storageKey,
        //     attachment.originalName
        // );
        return reply.send(
            fs.createReadStream(
                attachment.storageKey
            )
        );
        },

  async upload(
    request: FastifyRequest,
    reply: FastifyReply
  ) {
    const user = request.user;

    if (!user) {
      return reply.status(401).send({
        success: false,
        message: "Unauthorized",
      });
    }

    const { vaultId } =
      request.params as {
        vaultId: string;
      };

    const file =
      await request.file();

    if (!file) {
      return reply.status(400).send({
        success: false,
        message: "No file uploaded",
      });
    }

  

    const storedFile =
        await storage.upload(
            user.userId,
            vaultId,
            file
        );

    const attachment =
        await attachmentService.createAttachment({
            vault: vaultId,
            owner: user.userId,
            originalName: storedFile.originalName,
            mimeType: storedFile.mimeType,
            size: storedFile.size,
            storageKey: storedFile.path,
            storageProvider: "local",
            category: getCategory(storedFile.mimeType),
        });

    // return reply.send({
    //   success: true,
    //   data: attachment,
    // });
    // const baseUrl =
    //     `${request.protocol}://${request.hostname}`;
        const baseUrl =
          `${request.protocol}://${request.host}`;
        return reply.send({
        success: true,
        data: {
            ...attachment.toObject(),
            // url:
            // `${baseUrl}/uploads/` +
            // attachment.storageKey
            //     .split("uploads\\")
            //     .pop()
            //     ?.replace(/\\/g, "/"),
        url:
         `${baseUrl}/uploads/${attachment.storageKey.replace(/\\/g, "/")}`,    
        },
    });    
    
  },

  async delete(
    request: FastifyRequest,
    reply: FastifyReply
    ) {
    const user = request.user;

    if (!user) {
        return reply.status(401).send({
        success: false,
        message: "Unauthorized",
        });
    }

    const { attachmentId } =
        request.params as {
        attachmentId: string;
        };

    const attachment =
        await attachmentService.getAttachmentById(
        attachmentId,
        user.userId
        );

    if (!attachment) {
        return reply.status(404).send({
        success: false,
        message: "Attachment not found",
        });
    }

    await storage.delete(
        attachment.storageKey
    );

    await attachmentService.deleteAttachment(
        attachmentId,
        user.userId
    );

    return reply.send({
        success: true,
        message: "Attachment deleted",
    });
    }
    
};

function getCategory(
  mimeType: string
):
  | "image"
  | "video"
  | "audio"
  | "document"
  | "other" {

  if (mimeType.startsWith("image/"))
    return "image";

  if (mimeType.startsWith("video/"))
    return "video";

  if (mimeType.startsWith("audio/"))
    return "audio";

  if (
    mimeType.includes("pdf") ||
    mimeType.includes("word") ||
    mimeType.includes("text") ||
    mimeType.includes("sheet")
  )
    return "document";

  return "other";
}