// src/modules/users/user.service.ts

import User from "./user.model";

export async function getCurrentUser(
  userId: string
) {
  const user = await User.findById(userId)
    .select(
      "_id email fullName emailVerified onboardingCompleted"
    );

  if (!user) {
    throw new Error(
      "User not found"
    );
  }

  return user;
}