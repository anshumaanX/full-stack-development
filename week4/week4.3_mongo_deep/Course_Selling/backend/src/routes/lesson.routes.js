import express from "express";

import { createLesson } from "../controllers/lesson.controller.js";

import authMiddleware from "../middleware/auth.middleware.js";
import requireRole from "../middleware/role.middleware.js";
import courseOwnershipMiddleware from "../middleware/course.middleware.js";

const router = express.Router();

router.post(
  "/courses/:courseId/lessons",
  authMiddleware,
  requireRole("ADMIN"),
  courseOwnershipMiddleware,
  createLesson
);

export default router;