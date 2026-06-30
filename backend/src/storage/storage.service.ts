//src/storage/storage.service.ts

import { MultipartFile } from "@fastify/multipart";

export type StoredFile = {
  filename: string;
  originalName: string;
  path: string;
  mimeType: string;
  size: number;
};

// export interface StorageProvider {
//   upload(
//     userId: string,
//     vaultId: string,
//     file: {
//       filename: string;
//       mimetype: string;
//       file: NodeJS.ReadableStream;
//     }
//   ): Promise<StoredFile>;
// }

export interface StorageProvider {
  upload(
    userId: string,
    vaultId: string,
    file: MultipartFile
  ): Promise<StoredFile>;

  delete(
    storageKey: string
  ): Promise<void>;

  getFile(
    storageKey: string
  ): Promise<Buffer>;
}