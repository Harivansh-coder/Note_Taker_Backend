"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../controllers/user");
const auth_1 = __importDefault(require("../middleware/auth"));
const express_1 = require("express");
const userRouter = (0, express_1.Router)();
// get the user profile
userRouter.get("/me", auth_1.default, user_1.getCurrentUserProfile);
exports.default = userRouter;
