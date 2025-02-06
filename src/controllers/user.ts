import User from "@/models/user";
import express from "express";

export const getCurrentUserProfile = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const currentUserID = req.user.id;

    // find the user by id
    const user = await User.findById(currentUserID).lean();

    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    res.status(200).json({ ...user, password: undefined });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
