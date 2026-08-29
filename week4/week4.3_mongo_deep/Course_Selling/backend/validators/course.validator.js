import { z } from 'zod';

export const createCourseSchema = z.object({
  title: z.string().trim().min(3, "title must be at least 3 charaters"),
  description: z.string().trim().min(10, "Description must be at least 10 characters"),
  price: z.number().min(0, "Price cannot be negative"),
  thumbnail: z.url("Thumbnail must be a valid URL").optional(),
});

export const updateCourseSchema = z.object({
  title: z
    .string()
    .trim()
    .min(3, "Title must be at least 3 characters"),

  description: z
    .string()
    .trim()
    .min(10, "Description must be at least 10 characters"),

  price: z
    .number()
    .min(0, "Price cannot be negative"),

  thumbnail: z
    .url("Thumbnail must be a valid URL")
    .optional(),
});