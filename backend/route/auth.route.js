import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const router = express.Router();


router.post("/register", async(req, res) => {
    const user = req.body;

    if (!user.username || !user.email || !user.password || !user.student_id){
        return res.status(400).json({ success: false, message: "Please provide all fields!" });
    }

    const existingUser = await User.findOne({ student_id: user.student_id });
    if (existingUser) return res.status(400).json({ success: false, message: "User already exists" });

    const hashedPassword = await bcrypt.hash(user.password, 10);

    const newUser = new User({
        username: user.username, 
        email: user.email, 
        student_id: user.student_id,
        roles: user.roles, 
        password: hashedPassword, });

    try {
        await newUser.save();
        res.status(201).json({success: true, data: newUser});
    } catch (error) {
        console.error("Error in Create user: ", error.message);
        res.status(501).json({ success: false, message: error.message });
    }
});

router.post("/login", async (req, res) => {
  try {
    const { student_id, password } = req.body;

    const user = await User.findOne({ student_id });
    if (!user) return res.status(400).json({ success: false, message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ success: false, message: "Invalid credentials" });

    const token = jwt.sign(
      { id: user._id, username: user.username, email: user.email, student_id: user.student_id, roles: user.roles },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({ success: true, token });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

export default router;