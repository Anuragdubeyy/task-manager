import express from "express";
import { loginUser } from "../controller/auth/login";

const router = express.Router();

// Example route
router.get("/", (req, res) => {
  res.send("Admin route works!");
});

router.post("/login", loginUser);

export default router;
