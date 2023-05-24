import express from "express";

import { authUser, getUserProfile, registerUser } from "../controllers/userController.js";
import { get } from "mongoose";
import { protect } from "../middleware/authMiddleware.js"; 

const router = express.Router();

router.post("/login", authUser)
router.route("/profile").get(protect, getUserProfile)
router.route("/").post(registerUser)

export default router;