// src/modules/vaults/vault.model.ts

import mongoose from "mongoose";

const vaultSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    category: {
      type: String,
      required: true,
      enum: [
        "login",
        "bank",
        "card",
        "note",
        "identity",
      ],
    },

    username: String,
    email: String,
    password: String,
    website: String,
    notes: String,
  },
  {
    timestamps: true,
  }
);

export const VaultModel =
  mongoose.model("Vault", vaultSchema);