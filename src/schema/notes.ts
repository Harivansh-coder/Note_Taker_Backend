import z from "zod";

export const NoteSchema = z.object({
  content: z.string().min(1).max(1000),
  userId: z.string(),
});
