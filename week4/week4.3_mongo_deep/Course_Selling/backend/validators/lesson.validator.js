import { z } from "zod";

export const createLessonSchema = z.object({
  title: z
    .string()
    .trim()
    .min(3, "Title must be at least 3 characters"),

  description: z
    .string()
    .trim()
    .optional(),

  videoUrl: z
    .url("Video URL must be valid"),

  order: z
    .number()
    .int("Order must be an integer")
    .min(1, "Order must be at least 1"),
});