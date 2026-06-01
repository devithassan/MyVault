// src/modules/auth/auth.service.ts
import { sendEmail } from "../../utils/sendEmail";
import crypto from "crypto";
import bcrypt from "bcryptjs";

import User from "../users/user.model";
import { CreatePasswordInput } from "./auth.schema";
import { OnboardingStatusInput } from "./auth.schema";
import jwt from "jsonwebtoken";


import {
  LoginInput,
} from "./auth.schema";

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

  // if (existingUser) {
  //   throw new Error(
  //     "  An account with this email already exists"
  //   );
  // }

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

  // Verification URL
  const verificationUrl =
    `${process.env.CLIENT_URL}/verify-email?token=${rawVerificationToken}`;
 
  if (existingUser) {

    // Fully onboarded user
    if (
      existingUser.emailVerified &&
      existingUser.passwordHash
    ) {
      throw new Error(
        "Account already exists. Please sign in."
      );
    }

    // Verified but waiting for password creation
    if (
      existingUser.emailVerified &&
      !existingUser.passwordHash
    ) {
      throw new Error(
        "Email already verified. Continue setup in the mobile app."
      );
    }

    // Not verified yet
    existingUser.verificationToken =
      hashedVerificationToken;

    existingUser.verificationTokenExpiresAt =
      verificationTokenExpiresAt;

    await existingUser.save();

    await sendEmail(
      email,
      "Verify your Vault account",
      `
        <h2>Welcome back to Vault</h2>

        <p>
          Click below to continue verification.
        </p>

        <a
          href="${verificationUrl}"
          style="
            display:inline-block;
            padding:12px 20px;
            background:#000;
            color:#fff;
            text-decoration:none;
            border-radius:8px;
          "
        >
          Verify Email
        </a>
      `
    );

    return {
      userId: existingUser._id,
      email: existingUser.email,
      resent: true,
    };
  } 
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
  // const verificationUrl = `${process.env.CLIENT_URL}/verify-email?token=${rawVerificationToken}`;

  /**
   * TODO:
   * Send email here using Nodemailer
   */

  // console.log(
  //   "Verification URL:",
  //   verificationUrl
  // );
  await sendEmail(
    email,
    "Verify your Vault account",
    `
      <h2>Welcome to Vault</h2>

      <p>
        Click the button below to verify your email address.
      </p>

      <a
        href="${verificationUrl}"
        style="
          display:inline-block;
          padding:12px 20px;
          background:#000;
          color:#fff;
          text-decoration:none;
          border-radius:8px;
        "
      >
        Verify Email
      </a>

      <p>
        This link expires in 24 hours.
      </p>
    `
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
      "INVALID_OR_ALREADY_USED_TOKEN"
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


export async function createPassword(
  payload: CreatePasswordInput
) {
  const { email, password } = payload;

  const user = await User.findOne({
    email,
  });

  if (!user) {
    throw new Error(
      "Account not found"
    );
  }

  if (!user.emailVerified) {
    throw new Error(
      "Email not verified"
    );
  }

  if (user.passwordHash) {
    throw new Error(
      "Password already created"
    );
  }

  const passwordHash =
    await bcrypt.hash(password, 12);

  user.passwordHash =
    passwordHash;

  user.onboardingCompleted =
    true;

  await user.save();

  return {
    email: user.email,
  };
}


export async function getOnboardingStatus(
  payload: OnboardingStatusInput
) {
  const { email } = payload;

  const user = await User.findOne({
    email,
  });

  if (!user) {
    return {
      status: "NOT_FOUND",
    };
  }

  if (!user.emailVerified) {
    return {
      status:
        "PENDING_VERIFICATION",
    };
  }

  if (!user.passwordHash) {
    return {
      status:
        "CREATE_PASSWORD",
    };
  }

  return {
    status: "LOGIN",
  };
}

export async function loginUser(
  payload: LoginInput
) {
  const { email, password } =
    payload;

  const user =
    await User.findOne({
      email,
    });

  if (!user) {
    throw new Error(
      "Invalid email or password"
    );
  }

  if (!user.passwordHash) {
    throw new Error(
      "Password not created"
    );
  }

  const passwordValid =
    await bcrypt.compare(
      password,
      user.passwordHash
    );

  if (!passwordValid) {
    throw new Error(
      "Invalid email or password"
    );
  }

  const accessToken =
    jwt.sign(
      {
        userId: user._id,
        email: user.email,
      },
      process.env.JWT_ACCESS_SECRET!,
      {
        expiresIn: "15m",
      }
    );

  const refreshToken =
    jwt.sign(
      {
        userId: user._id,
        email: user.email,
      },
      process.env.JWT_REFRESH_SECRET!,
      {
        expiresIn: "30d",
      }
    );

  return {
    user: {
      id: user._id,
      email: user.email,
      fullName: user.fullName,
    },

    accessToken,

    refreshToken,
  };
}