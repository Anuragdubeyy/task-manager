import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import adminRoutes from "./routes/admin.js";
const app = express();

app.use(express.json()); // Parse JSON payloads
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type,Authorization",
    credentials: true,
  })
); 

// Connect to the database
const MONGO = "JDiX2UOAymfVfGV9";

mongoose
  .connect(
    `mongodb+srv://anuragdubey16017:${MONGO}@crm.e6a4o.mongodb.net/CRM`,
    // {
    //   serverSelectionTimeoutMS: 5000,
    //   socketTimeoutMS: 45000, // Increase socket timeout
    // }
  )
  .then(() => {
    console.log("Connected to MongoDB successfully");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

app.use("/api", adminRoutes);
app.get("/", (req, res) => {
  res.json("welcome to my AnuVista backend");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
