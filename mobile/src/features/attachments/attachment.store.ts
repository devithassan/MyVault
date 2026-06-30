// src/features/attachments/attachment.store.ts

import { create } from "zustand";

import { attachmentService } from "./attachment.service";
import { Attachment } from "./attachment.types";

type AttachmentState = {
  attachments: Attachment[];

  loading: boolean;

  setAttachments: (
    attachments: Attachment[]
  ) => void;

  fetchAttachments: (
    vaultId: string
  ) => Promise<void>;

  addAttachment: (
    attachment: Attachment
  ) => void;

  removeAttachment: (
    id: string
  ) => void;

//   deleteAttachmentFromState: (
//     attachmentId: string
//   ) => void;
};

export const useAttachmentStore =
  create<AttachmentState>((set) => ({
    attachments: [],

    loading: false,

    setAttachments: (
      attachments
    ) =>
      set({
        attachments,
      }),

    fetchAttachments: async (
      vaultId
    ) => {
      try {
        set({
          loading: true,
        });

        const attachments =
          await attachmentService.getVaultAttachments(
            vaultId
          );

        set({
          attachments,
        });
      } finally {
        set({
          loading: false,
        });
      }
    },

    // deleteAttachmentFromState: (attachmentId: string) => {
    //     set((state) => ({
    //     attachments: state.attachments.filter(
    //         (a) => a._id !== attachmentId
    //     ),
    //     }));
    // },

    addAttachment: (
      attachment
    ) =>
      set((state) => ({
        attachments: [
          attachment,
          ...state.attachments,
        ],
      })),

    removeAttachment: (
      id
    ) =>
      set((state) => ({
        attachments:
          state.attachments.filter(
            (attachment) =>
              attachment._id !== id
          ),
      })),
  }));