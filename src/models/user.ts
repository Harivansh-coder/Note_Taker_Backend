import { model, Schema } from "mongoose";
import mongoose from "mongoose";

export interface IUser {
  name: string;
  email: string;
  dateOfBirth?: string;
  password: string;
}

const userSchema = new Schema<IUser>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
});

const User =
  (mongoose.models.User as mongoose.Model<IUser>) ||
  model<IUser>("User", userSchema);

export default User;
