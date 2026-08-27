import express from "express";
import { getMe, Login, logout, signup } from "../controllers/auth.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", Login);
router.get("/me", authMiddleware, getMe)
router.post("/logout", logout)

export default router;