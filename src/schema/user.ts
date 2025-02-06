import z from "zod";

// Define a zod schema for the user object
export const UserSchema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email(),
  password: z.string().min(8).max(100),
  dateOfBirth: z.date().optional(),
});
