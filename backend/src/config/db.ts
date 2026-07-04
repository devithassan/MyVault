// import mongoose from "mongoose";

// export async function connectDB() {
//   try {
//     await mongoose.connect(process.env.MONGODB_URI!);

//     console.log("MongoDB connected");
//   } catch (error) {
//     console.error("Database connection failed");

//     process.exit(1);
//   }
// }

import mongoose from "mongoose";

export async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI!);

    console.log("✅ MongoDB connected");
  } catch (error) {
    console.error("❌ Database connection failed:");
    console.error(error);

    process.exit(1);
  }
}