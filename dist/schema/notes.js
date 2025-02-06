"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoteSchema = void 0;
const zod_1 = __importDefault(require("zod"));
exports.NoteSchema = zod_1.default.object({
    content: zod_1.default.string().min(1).max(1000),
    userId: zod_1.default.string(),
});
