import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import db from "../db.js";

const router = express.Router();
const SECRET = "FUND_FORGE_SECRET";

// ============================
// 🧾 Register User
// ============================
router.post("/register", async (req, res) => {
  const { name, email, password, role } = req.body;

  if (!name || !email || !password || !role)
    return res.status(400).json({ message: "All fields are required" });

  try {
    // Check if user already exists
    const [existingUser] = await db.promise().query(
      "SELECT * FROM users WHERE email = ?",
      [email]
    );

    if (existingUser.length > 0) {
      return res.status(400).json({ message: "Email already registered" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert new user
    await db
      .promise()
      .query("INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)", [
        name,
        email,
        hashedPassword,
        role,
      ]);

    res.json({ message: "Registered successfully!" });
  } catch (err) {
    console.error("Registration error:", err);
    res.status(500).json({ message: "Error registering user" });
  }
});

// ============================
// 🔐 Login User
// ============================
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(400).json({ message: "Email and password required" });

  try {
    const [results] = await db.promise().query("SELECT * FROM users WHERE email = ?", [email]);

    if (results.length === 0) {
      return res.status(400).json({ message: "User not found" });
    }

    const user = results[0];
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: user.id, role: user.role, name: user.name },
      SECRET,
      { expiresIn: "1d" }
    );

    // 👇 Don’t send password back to frontend
    const safeUser = {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    };

    res.json({
      message: "Login successful",
      token,
      user: safeUser, // ✅ what your frontend expects
    });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Error logging in" });
  }
});

export default router;
