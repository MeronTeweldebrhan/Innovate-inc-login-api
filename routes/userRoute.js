import express from 'express'
import { signToken } from "../middlewares/verifyJWT.js";
import User from '../models/User.js';

const router=express.Router()

//User reigister route
router.post("/register", async (req, res) => {
  try {
    const newuser = await User.create(req.body);
    res.status(200).json(newuser);
  } catch (error) {
    console.log("Error creating new user", error);
    res.status(400).json({ message: error.message });
  }
});

/// Login and Token genrate route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email: email });
    console.log("USER", user);
    if (!user) {
      return res.status(400).json({ message: "Incorrect email or password" });
    }
    const correctPw = await user.isCorrectPassword(password);

    if (!correctPw) {
      return res.status(400).json({ message: "Incorrect email or password" });
    }
    const payload = {
      _id: user._id,
      username: user.username,
      email: user.email,
      role: user.role
    };
    // Use the signToken helper function
    const token = signToken(payload);

    res.json({ token, user });
  } catch (error) {
    console.log("Error Login user", error);
    res.status(400).json({ message: error.message });
  }
});


export default router;
