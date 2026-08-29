import express from 'express';
import { createCourse, deleteCourse, getCourseById, getCourses, publishCourse, updateCourse } from '../controllers/course.controller.js';
import authMiddleware from '../middleware/auth.middleware.js';
import requireRole from '../middleware/role.middleware.js';
import courseOwnershipMiddleware from "../middleware/course.middleware.js";

const router = express.Router();

router.post("/", authMiddleware, requireRole("ADMIN"), createCourse)
router.get("/", getCourses)
router.get("/:id", getCourseById)
router.put("/:id",authMiddleware,requireRole("ADMIN"),courseOwnershipMiddleware,updateCourse);
router.delete("/:id",authMiddleware,requireRole("ADMIN"),courseOwnershipMiddleware,deleteCourse);
router.patch("/:id/publish",authMiddleware,requireRole("ADMIN"),courseOwnershipMiddleware,publishCourse);

export default router;