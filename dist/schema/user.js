"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
const zod_1 = __importDefault(require("zod"));
// Define a zod schema for the user object
exports.UserSchema = zod_1.default.object({
    name: zod_1.default.string().min(1).max(100),
    email: zod_1.default.string().email(),
    password: zod_1.default.string().min(8).max(100),
    dateOfBirth: zod_1.default.date().optional(),
});
