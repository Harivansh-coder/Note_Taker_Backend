import { signInUser, signUpUser } from "@/controllers/auth";
import validateRequestBody from "@/middleware/validate";
import {
  SignInRequestBodySchema,
  SignUpRequestBodySchema,
} from "@/schema/request";
import { Router } from "express";

const authRouter = Router();

authRouter.post(
  "/signin",
  validateRequestBody(SignInRequestBodySchema),
  signInUser
);

authRouter.post(
  "/signup",
  validateRequestBody(SignUpRequestBodySchema),
  signUpUser
);

export default authRouter;
