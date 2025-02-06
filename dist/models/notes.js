"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const mongoose_2 = __importDefault(require("mongoose"));
const noteSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    userId: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Number,
        required: true,
    },
    updatedAt: {
        type: Number,
        required: true,
    },
    isAudio: {
        type: Boolean,
    },
    audioDuration: {
        type: Number,
    },
    isNew: {
        type: Boolean,
    },
    isFavorite: {
        type: Boolean,
    },
    images: {
        type: [String],
    },
});
const Note = mongoose_2.default.models.Note ||
    (0, mongoose_1.model)("Note", noteSchema);
exports.default = Note;
