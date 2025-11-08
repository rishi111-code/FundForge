import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import db from "./db.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", authRoutes);

app.listen(5000, () => console.log("🚀 Server running on port 5000"));
