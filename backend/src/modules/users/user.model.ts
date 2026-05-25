import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    emailVerified: {
      type: Boolean,
      default: false,
    },

    passwordHash: {
      type: String,
      default: null,
    },

    verificationToken: {
      type: String,
      default: null,
    },

    verificationTokenExpiresAt: {
      type: Date,
      default: null,
    },

    onboardingCompleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;





// {
//   _id: ObjectId,

//   fullName: string,

//   email: string,

//   emailVerified: boolean,

//   passwordHash: string | null,

//   verificationToken: string | null,

//   verificationTokenExpiresAt: Date | null,

//   onboardingCompleted: boolean,

//   createdAt: Date,

//   updatedAt: Date
// }