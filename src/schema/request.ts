import { z } from "zod";

export const SignInRequestBodySchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(100),
});

export const SignUpRequestBodySchema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email(),
  dateOfBirth: z.string().optional(),
  password: z.string().min(8).max(100),
});

export const CreateNoteRequestBodySchema = z.object({
  content: z.string().min(1).max(1000),
  title: z.string().min(1).max(100),
  isAudio: z.boolean().optional(),
  audioDuration: z.number().optional(),
  isNew: z.boolean().optional(),
  isFavorite: z.boolean().optional(),
  images: z.array(z.string()).optional(),
});

export interface Note {
  _id?: string;
  title: string;
  content: string;
  createdAt: number;
  updatedAt: number;
  isAudio?: boolean;
  audioDuration?: number;
  isNew?: boolean;
  isFavorite?: boolean;
  images?: string[];
}
