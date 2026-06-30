//src/features/attachments/attachment.types.ts

export type AttachmentCategory =
  | "image"
  | "video"
  | "audio"
  | "document"
  | "other";

export interface Attachment {
  _id: string;

  vault: string;

  owner: string;

  originalName: string;

  mimeType: string;

  size: number;

  storageKey: string;

  storageProvider: string;

  category: AttachmentCategory;

  url: string;
  
  createdAt: string;

  updatedAt: string;

  
}