

import express from "express";
import { registerUser, loginUser, deactivateUser, allusers, admin, updateUser, logout } from "../Controllers/user.controller.js";

const router = express.Router();

router.post("/signup", registerUser);
router.post("/login", loginUser);
router.get("/all-users", allusers);
router.get("/admin", admin);
router.put("/update/:id", updateUser);
router.put("/deactivate/:id", deactivateUser);
router.post("/logout", logout);

export default router;