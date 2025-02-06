import { model, Schema } from "mongoose";
import mongoose from "mongoose";

export interface INote {
  id?: string;
  title: string;
  content: string;
  userId: string;
  createdAt: number;
  updatedAt: number;
  isAudio?: boolean;
  audioDuration?: number;
  isNew?: boolean;
  isFavorite?: boolean;
  images?: string[];
}

const noteSchema = new Schema<INote>({
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

const Note =
  (mongoose.models.Note as mongoose.Model<INote>) ||
  model<INote>("Note", noteSchema);

export default Note;
