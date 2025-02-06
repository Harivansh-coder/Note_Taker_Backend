"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateNoteRequestBodySchema = exports.SignUpRequestBodySchema = exports.SignInRequestBodySchema = void 0;
const zod_1 = require("zod");
exports.SignInRequestBodySchema = zod_1.z.object({
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(8).max(100),
});
exports.SignUpRequestBodySchema = zod_1.z.object({
    name: zod_1.z.string().min(1).max(100),
    email: zod_1.z.string().email(),
    dateOfBirth: zod_1.z.string().optional(),
    password: zod_1.z.string().min(8).max(100),
});
exports.CreateNoteRequestBodySchema = zod_1.z.object({
    content: zod_1.z.string().min(1).max(1000),
    title: zod_1.z.string().min(1).max(100),
    isAudio: zod_1.z.boolean().optional(),
    audioDuration: zod_1.z.number().optional(),
    isNew: zod_1.z.boolean().optional(),
    isFavorite: zod_1.z.boolean().optional(),
    images: zod_1.z.array(zod_1.z.string()).optional(),
});
