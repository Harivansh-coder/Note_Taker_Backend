"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const auth_1 = require("../controllers/auth");
const validate_1 = __importDefault(require("../middleware/validate"));
const request_1 = require("../schema/request");
const express_1 = require("express");
const authRouter = (0, express_1.Router)();
authRouter.post("/signin", (0, validate_1.default)(request_1.SignInRequestBodySchema), auth_1.signInUser);
authRouter.post("/signup", (0, validate_1.default)(request_1.SignUpRequestBodySchema), auth_1.signUpUser);
exports.default = authRouter;
