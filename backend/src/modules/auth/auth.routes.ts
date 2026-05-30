import { FastifyInstance } from "fastify";

import {
  registerController,
} from "./auth.controller";

import {
  verifyEmailController,
} from "./auth.controller";

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

}

export default authRoutes;