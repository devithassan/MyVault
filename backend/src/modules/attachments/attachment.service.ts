//src/modules/attachments/attachment.service.ts

// src/modules/attachments/attachment.service.ts

import Attachment from "./attachment.model";

export const attachmentService = {
  async createAttachment(data: {
    vault: string;
    owner: string;
    originalName: string;
    mimeType: string;
    size: number;
    storageKey: string;
    storageProvider: "local";
    category:
      | "image"
      | "video"
      | "audio"
      | "document"
      | "other";
  }) {
    return Attachment.create(data);
  },

  async getVaultAttachments(
    vault: string,
    owner: string
  ) {
    return Attachment.find({
      vault,
      owner,
    }).sort({
      createdAt: -1,
    });
  },

  async getAttachmentById(
    id: string,
    owner: string
  ) {
    return Attachment.findOne({
      _id: id,
      owner,
    });
  },

  async deleteAttachment(
    id: string,
    owner: string
  ) {
    return Attachment.findOneAndDelete({
      _id: id,
      owner,
    });
  },
};





// import { Attachment } from "./attachment.model";

// export const attachmentService = {
//   async createAttachment(data: {
//     vaultId: string;
//     userId: string;
//     filename: string;
//     originalName: string;
//     mimeType: string;
//     size: number;
//     path: string;
//   }) {
//     return Attachment.create(data);
//   },

//   async getVaultAttachments(
//     vaultId: string,
//     userId: string
//   ) {
//     return Attachment.find({
//       vaultId,
//       userId,
//     }).sort({
//       createdAt: -1,
//     });
//   },

//   async getAttachmentById(
//     id: string,
//     userId: string
//   ) {
//     return Attachment.findOne({
//       _id: id,
//       userId,
//     });
//   },

//   async deleteAttachment(
//     id: string,
//     userId: string
//   ) {
//     return Attachment.findOneAndDelete({
//       _id: id,
//       userId,
//     });
//   },
// };


// import Attachment from "./attachment.model";

// export const attachmentService = {

//   async getVaultAttachments(
//     vaultId: string,
//     ownerId: string
//   ) {
//     return Attachment.find({
//       vault: vaultId,
//       owner: ownerId,
//     }).sort({
//       createdAt: -1,
//     });
//   },

//   async deleteAttachment(
//     id: string,
//     ownerId: string
//   ) {
//     return Attachment.findOneAndDelete({
//       _id: id,
//       owner: ownerId,
//     });
//   },

// };