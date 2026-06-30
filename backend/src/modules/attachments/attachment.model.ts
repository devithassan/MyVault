//src/modules/attachments/attachment.model.ts

import mongoose, {
  Schema,
  InferSchemaType,
} from "mongoose";

const attachmentSchema =
  new Schema(
    {
      vault: {
        type: Schema.Types.ObjectId,
        ref: "Vault",
        required: true,
        index: true,
      },

      owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
        index: true,
      },

      originalName: {
        type: String,
        required: true,
      },

      mimeType: {
        type: String,
        required: true,
      },

      size: {
        type: Number,
        required: true,
      },

      storageKey: {
        type: String,
        required: true,
      },

      storageProvider: {
        type: String,
        enum: [
          "local",
          "s3",
          "cloudinary",
        ],
        default: "local",
      },

      category: {
        type: String,
        enum: [
          "image",
          "video",
          "audio",
          "document",
          "other",
        ],
        default: "other",
      },
    },
    {
      timestamps: true,
    }
  );

export type Attachment =
  InferSchemaType<
    typeof attachmentSchema
  >;

export default mongoose.model(
  "Attachment",
  attachmentSchema
);