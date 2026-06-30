// src/features/attachments/attachment.service.ts

import { api } from "@/services/api/client";

import { Attachment } from "./attachment.types";

export const attachmentService = {
  async getVaultAttachments(
    vaultId: string
  ) {
    const res =
      await api.get(
        `/attachments/vault/${vaultId}`
      );

    return res.data.data as Attachment[];
  },

//   async upload(
//     vaultId: string,
//     file: FormData
//   ): Promise<Attachment> {
//     const res =
//       await api.post(
//         `/attachments/upload/${vaultId}`,
//         file,
//         {
//           headers: {
//             "Content-Type":
//               "multipart/form-data",
//           },
//         }
//       );

//     return res.data.data as Attachment;
//   },


async upload(
  vaultId: string,
  file: FormData
): Promise<Attachment> {
  console.log(
    "UPLOAD BASE URL:",
    api.defaults.baseURL
  );

  console.log(
    "UPLOAD URL:",
    `${api.defaults.baseURL}/attachments/upload/${vaultId}`
  );

  const res = await api.post(
    `/attachments/upload/${vaultId}`,
    file,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return res.data.data as Attachment;
},  
    // deleteAttachment: async (
    // attachmentId: string
    // ) => {
    //     console.log("Deleting attachment:", attachmentId);
    // const res = await api.delete(
    //     `/attachments/${attachmentId}`
    // );

    // return res.data;
    // }, 
    deleteAttachment: async (attachmentId: string) => {
  console.log("BASE URL CALL:", api.defaults.baseURL);
  console.log("DELETE ID:", attachmentId);

  const url = `/attachments/${attachmentId}`;
  console.log("DELETE URL:", url);

  const res = await api.delete(url);

  return res.data;
},
};