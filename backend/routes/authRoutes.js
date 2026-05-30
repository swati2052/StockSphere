const { UserModel } = require("../model/UserModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const express = require("express");
const router = express.Router();

const createSecretToken = (id) => {
  return jwt.sign({ id }, process.env.TOKEN_KEY || "YOUR_SECRET_KEY", {
    expiresIn: 3 * 24 * 60 * 60,
  });
};

router.post("/signup", async (req, res, next) => {
  try {
    const { email, password, username } = req.body;
    if (!email || !password || !username) {
      return res.json({ message: "All fields are required" });
    }
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }
    const user = await UserModel.create({ email, password, username });
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      httpOnly: false,
      secure: false, // Set to true if using HTTPS
    });
    res
      .status(201)
      .json({ message: "User signed up successfully", success: true, user });
  } catch (error) {
    console.error(error);
    res.json({ message: "An error occurred during signup", success: false });
  }
});

router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.json({ message: "All fields are required" });
    }
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.json({ message: "Incorrect password or email" });
    }
    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      return res.json({ message: "Incorrect password or email" });
    }
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      httpOnly: false,
      secure: false,
    });
    res
      .status(201)
      .json({ message: "User logged in successfully", success: true });
  } catch (error) {
    console.error(error);
    res.json({ message: "An error occurred during login", success: false });
  }
});

router.post("/logout", (req, res) => {
  res.clearCookie("token");
  res.status(200).json({ message: "User logged out successfully", success: true });
});

module.exports = router;
