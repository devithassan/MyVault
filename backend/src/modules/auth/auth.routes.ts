// src/modules/auth/auth.routes.ts

import { FastifyInstance } from "fastify";

import {
  registerController,
} from "./auth.controller";

import {
  verifyEmailController,
} from "./auth.controller";

import { createPasswordController,
} from "./auth.controller";

import { onboardingStatusController,
} from "./auth.controller";

import {
  loginController,
} from "./auth.controller";

// import {
//   refreshController,
// } from "./auth.controller";

async function authRoutes(app: FastifyInstance) {

  // Register User
  app.post(
    "/register",
    registerController
  );

  // Verify email
  app.post(
    "/verify-email",
    verifyEmailController
  );

  // Create Password
  app.post(
    "/create-password",
    createPasswordController
  );

  // Login
  app.post(
    "/login",
    loginController
  );

  // Get Onboarding Status
  app.post(
    "/onboarding-status",
    onboardingStatusController
  );
  
  // app.post(
  //   "/refresh",
  //   refreshController
  // );
}

export default authRoutes;