import {
  createNote,
  deleteNote,
  getAllNotes,
  getNote,
  updateNote,
} from "@/controllers/notes";
import verifyAccessToken from "@/middleware/auth";
import validateRequestBody from "@/middleware/validate";
import { CreateNoteRequestBodySchema } from "@/schema/request";
import { Router } from "express";

const router = Router();

router.get("/", verifyAccessToken, getAllNotes);

router.get("/:id", verifyAccessToken, getNote);

router.post(
  "/",
  verifyAccessToken,
  validateRequestBody(CreateNoteRequestBodySchema),
  createNote
);

router.put("/:id", verifyAccessToken, updateNote);

router.delete("/:id", verifyAccessToken, deleteNote);
export default router;
