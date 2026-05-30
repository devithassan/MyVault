// src/modules/auth/auth.service.ts

import crypto from "crypto";

import User from "../users/user.model";

import {
  RegisterInput,
} from "./auth.schema";

export async function registerUser(
  payload: RegisterInput
) {
  const { fullName, email } = payload;

  // Check existing user
  const existingUser = await User.findOne({
    email,
  });

  if (existingUser) {
    throw new Error(
      "An account with this email already exists"
    );
  }

  // Generate verification token
  const rawVerificationToken =
    crypto.randomBytes(32).toString("hex");

  // Hash token before storing
  const hashedVerificationToken =
    crypto
      .createHash("sha256")
      .update(rawVerificationToken)
      .digest("hex");

  // Token expiry (24 hours)
  const verificationTokenExpiresAt =
    new Date(
      Date.now() + 1000 * 60 * 60 * 24
    );

  // Create user
  const user = await User.create({
    fullName,
    email,

    emailVerified: false,

    passwordHash: null,

    verificationToken:
      hashedVerificationToken,

    verificationTokenExpiresAt,
  });

  // Verification URL
  const verificationUrl = `${process.env.CLIENT_URL}/verify-email?token=${rawVerificationToken}`;

  /**
   * TODO:
   * Send email here using Nodemailer
   */

  console.log(
    "Verification URL:",
    verificationUrl
  );

  return {
    userId: user._id,
    email: user.email,
  };
}

export async function verifyEmail(
  token: string
) {
  const hashedToken = crypto
    .createHash("sha256")
    .update(token)
    .digest("hex");

  const user = await User.findOne({
    verificationToken: hashedToken,
  });

  if (!user) {
    throw new Error(
      "Invalid verification token"
    );
  }

  if (
    !user.verificationTokenExpiresAt ||
    user.verificationTokenExpiresAt <
      new Date()
  ) {
    throw new Error(
      "Verification token expired"
    );
  }

  user.emailVerified = true;

  user.verificationToken = null;
  user.verificationTokenExpiresAt = null;

  await user.save();

  return {
    email: user.email,
  };
}