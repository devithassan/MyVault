//src/storage/localStorage.storage.ts

import fs from "fs";
import path from "path";
import { pipeline } from "stream/promises";
import { randomUUID } from "crypto";

import { MultipartFile } from "@fastify/multipart";

import {
  StorageProvider,
  StoredFile,
} from "./storage.service";

export class LocalStorage
  implements StorageProvider
{
  async upload(
    userId: string,
    vaultId: string,
    file: MultipartFile
  ): Promise<StoredFile> {
    const uploadsRoot = path.join(
      process.cwd(),
      "uploads",
      "users",
      userId,
      vaultId
    );

    await fs.promises.mkdir(
      uploadsRoot,
      {
        recursive: true,
      }
    );

    const extension = path.extname(
      file.filename
    );

    const filename =
      `${randomUUID()}${extension}`;

    const destination = path.join(
      uploadsRoot,
      filename
    );

    await pipeline(
      file.file,
      fs.createWriteStream(
        destination
      )
    );

    const stats =
      await fs.promises.stat(
        destination
      );

    // return {
    //   filename,
    //   originalName:
    //     file.filename,
    //   path: destination,
    //   mimeType:
    //     file.mimetype,
    //   size: stats.size,
    // };
    const storageKey = path.join(
    "users",
    userId,
    vaultId,
    filename
    );

    return {
    filename,
    originalName: file.filename,
    path: storageKey,
    mimeType: file.mimetype,
    size: stats.size,
    };

  }
    async delete(
        storageKey: string
        ): Promise<void> {
        // await fs.promises.unlink(storageKey);

        const fullPath = path.join(
            process.cwd(),
            "uploads",
            storageKey
        );

        await fs.promises.unlink(fullPath);    
        } 
    

    async getFile(
        storageKey: string
        ): Promise<Buffer> {
        // return fs.promises.readFile(storageKey);

        const fullPath = path.join(
        process.cwd(),
        "uploads",
        storageKey
        );

        return fs.promises.readFile(fullPath);        
        }    
}








// import fs from "fs";
// import path from "path";
// import { pipeline } from "stream/promises";
// import { randomUUID } from "crypto";

// import { MultipartFile } from "@fastify/multipart";

// import {
//   StorageProvider,
//   StoredFile,
// } from "./storage.service";

// export class LocalStorage
//   implements StorageProvider
// {
//   async upload(
//     userId: string,
//     vaultId: string,
//     file: MultipartFile
//   ): Promise<StoredFile> {
//     throw new Error("Not implemented yet");

//   }
// }