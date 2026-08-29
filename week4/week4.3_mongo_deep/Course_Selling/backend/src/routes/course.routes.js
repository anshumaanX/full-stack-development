import express from 'express';
import { createCourse, getCourseById, getCourses } from '../controllers/course.controller.js';
import authMiddleware from '../middleware/auth.middleware.js';
import requireRole from '../middleware/role.middleware.js';

const router = express.Router();

router.post("/", authMiddleware, requireRole("ADMIN"), createCourse)
router.get("/", getCourses)
router.get("/:id", getCourseById)

export default router;