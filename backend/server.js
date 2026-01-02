import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import db from "./db.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json({ limit: "10mb" }));

// API Routes
app.use("/api", authRoutes);

// Default Route
app.get("/", (req, res) => {
  res.send("FundForge API is running...");
});

// Global error handler
app.use((err, req, res, next) => {
  console.error("🔥 Server Error:", err);
  res.status(500).json({ message: "Internal Server Error" });
});

app.listen(5000, () => console.log("🚀 Server running on port 5000"));
