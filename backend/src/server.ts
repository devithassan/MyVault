import "./config/env";


import app from "./app";
import { connectDB } from "./config/db";
import { sendEmail } from "./utils/sendEmail";
const PORT = Number(process.env.PORT) || 5000;

async function startServer() {
  try {
    await connectDB();
    await sendEmail(
      "tahiriqbaloffcl@gmail.com",
      "Backend Test",
      "<h1>Email system works</h1>"
    );

    await app.listen({
      port: PORT,
      host: "0.0.0.0",
    });

    console.log(`Server running on port ${PORT}`);
  } catch (error) {
    app.log.error(error);

    process.exit(1);
  }
}

startServer();