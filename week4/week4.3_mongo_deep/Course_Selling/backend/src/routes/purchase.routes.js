import express from "express";

import { purchaseCourse } from "../controllers/purchase.controller.js";

import authMiddleware from "../middleware/auth.middleware.js";
import requireRole from "../middleware/role.middleware.js";

const router = express.Router();

router.post(
  "/",
  authMiddleware,
  requireRole("USER"),
  purchaseCourse
);

export default router;