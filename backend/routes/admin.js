import express from "express";

const router = express.Router();

// Example route
router.get("/", (req, res) => {
  res.send("Admin route works!");
});

export default router;
