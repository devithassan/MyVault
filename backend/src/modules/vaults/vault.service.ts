// src/modules/vaults/vault.service.ts

import { VaultModel } from "./vault.model";

export const vaultService = {
  getAll: async (userId: string) => {
    return VaultModel.find({ userId })
      .sort({ createdAt: -1 });
  },

  getById: async (
    id: string,
    userId: string
  ) => {
    return VaultModel.findOne({
      _id: id,
      userId,
    });
  },

  create: async (
    userId: string,
    data: any
  ) => {
    return VaultModel.create({
      ...data,
      userId,
    });
  },

  update: async (
    id: string,
    userId: string,
    data: any
  ) => {
    return VaultModel.findOneAndUpdate(
      {
        _id: id,
        userId,
      },
      data,
      { new: true }
    );
  },

  remove: async (
    id: string,
    userId: string
  ) => {
    return VaultModel.findOneAndDelete({
      _id: id,
      userId,
    });
  },
};