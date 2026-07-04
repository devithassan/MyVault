// // src/app.ts

// src/app.ts

import Fastify from "fastify";
import cors from "@fastify/cors";
import multipart from "@fastify/multipart";
import fastifyStatic from "@fastify/static";

import fs from "fs";
import path from "path";

import authRoutes from "./modules/auth/auth.routes";
import userRoutes from "./modules/users/user.routes";
import vaultRoutes from "./modules/vaults/vault.routes";
import { attachmentRoutes } from "./modules/attachments/attachment.routes";

const app = Fastify({
  logger: {
    transport: {
      target: "pino-pretty",
      options: {
        colorize: true,
        translateTime: "HH:MM:ss",
        ignore: "pid,hostname",
      },
    },
  },
});

app.register(cors, {
  origin: process.env.CLIENT_URL,
});

app.register(multipart, {
  limits: {
    fileSize: 50 * 1024 * 1024,
  },
});

// Root endpoint
app.get("/", async () => {
  return {
    success: true,
    name: "Vault API",
    status: "running",
    environment: process.env.NODE_ENV ?? "development",
    version: "1.0.0",
  };
});

// Health endpoint
app.get("/health", async () => {
  return {
    success: true,
    status: "healthy",
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  };
});

// Ensure uploads directory exists
const uploadsPath = path.join(
  process.cwd(),
  "uploads"
);

if (!fs.existsSync(uploadsPath)) {
  fs.mkdirSync(uploadsPath, {
    recursive: true,
  });
}

// Serve uploaded files
app.register(fastifyStatic, {
  root: uploadsPath,
  prefix: "/uploads/",
});

app.register(authRoutes, {
  prefix: "/api/auth",
});

app.register(userRoutes, {
  prefix: "/api/users",
});

app.register(vaultRoutes, {
  prefix: "/api/vault",
});

app.register(attachmentRoutes, {
  prefix: "/api/attachments",
});

export default app;









// import Fastify from "fastify";
// import cors from "@fastify/cors";
// import multipart from "@fastify/multipart";
// import fs from "fs";
// import fastifyStatic from "@fastify/static";
// import path from "path";

// import authRoutes from "./modules/auth/auth.routes";
// import userRoutes from "./modules/users/user.routes";
// import vaultRoutes from "./modules/vaults/vault.routes";

// import { attachmentRoutes } from "./modules/attachments/attachment.routes";

// const app = Fastify({
//   logger: {
//     transport: {
//       target: "pino-pretty",
//       options: {
//         colorize: true,
//         translateTime: "HH:MM:ss",
//         ignore: "pid,hostname",
//       },
//     },
//   },
// });

// app.register(cors, {
//   origin: process.env.CLIENT_URL,
// });

// app.register(multipart, {
//   limits: {
//     fileSize: 50 * 1024 * 1024,
//   },
// });

// //for railway deployment

// app.register(multipart, {
//   limits: {
//     fileSize: 50 * 1024 * 1024,
//   },
// });

// // Root endpoint
// app.get("/", async () => {
//   return {
//     success: true,
//     name: "Vault API",
//     status: "running",
//     environment: process.env.NODE_ENV ?? "development",
//     version: "1.0.0",
//   };
// });

// // Health endpoint
// app.get("/health", async () => {
//   return {
//     success: true,
//     status: "healthy",
//     uptime: process.uptime(),
//     timestamp: new Date().toISOString(),
//   };
// });

// app.register(fastifyStatic, {
//   root: path.join(
//     process.cwd(),
//     "uploads"
//   ),
//   prefix: "/uploads/",
// });

// //railway deployment

// const uploadsPath = path.join(
//   process.cwd(),
//   "uploads"
// );

// if (!fs.existsSync(uploadsPath)) {
//   fs.mkdirSync(uploadsPath, {
//     recursive: true,
//   });
// }

// app.register(fastifyStatic, {
//   root: path.join(
//     process.cwd(),
//     "uploads"
//   ),
//   prefix: "/uploads/",
// });

// app.register(authRoutes, {
//   prefix: "/api/auth",
// });

// app.register(userRoutes, {
//   prefix: "/api/users",
// });

// app.register(vaultRoutes, {
//   prefix: "/api/vault",
// });

// app.register(attachmentRoutes, {
//   prefix: "/api/attachments",
// });

// export default app;