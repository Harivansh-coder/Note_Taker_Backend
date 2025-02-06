"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const notes_1 = require("../controllers/notes");
const auth_1 = __importDefault(require("../middleware/auth"));
const validate_1 = __importDefault(require("../middleware/validate"));
const request_1 = require("../schema/request");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/", auth_1.default, notes_1.getAllNotes);
router.get("/:id", auth_1.default, notes_1.getNote);
router.post("/", auth_1.default, (0, validate_1.default)(request_1.CreateNoteRequestBodySchema), notes_1.createNote);
router.put("/:id", auth_1.default, notes_1.updateNote);
router.delete("/:id", auth_1.default, notes_1.deleteNote);
exports.default = router;
