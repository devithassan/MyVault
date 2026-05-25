import { FastifyInstance } from "fastify";

import {
  registerController,
} from "./auth.controller";

async function authRoutes(app: FastifyInstance) {

  // Register User
  app.post(
    "/register",
    registerController
  );

}

export default authRoutes;