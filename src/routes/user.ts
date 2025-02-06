import { getCurrentUserProfile } from "@/controllers/user";
import verifyAccessToken from "@/middleware/auth";
import { Router } from "express";

const userRouter = Router();

// get the user profile
userRouter.get("/me", verifyAccessToken, getCurrentUserProfile);

export default userRouter;
