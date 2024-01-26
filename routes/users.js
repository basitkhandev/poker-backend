const express = require("express");
const router = express.Router();
const { User } = require("../models");
const authenticateJWT = require("../middleware/middleware");
const jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");

router.post(
  "/register",
  [
    body("username").notEmpty(),
    body("email").isEmail(),
    body("password").notEmpty(),
    body("role").notEmpty(),
  ],
  async (req, res) => {
    try {
      // Validate the request body
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { username, email, password, role } = req.body;

      // Check if the user already exists
      const existingUser = await User.findOne({ where: { username } });
      if (existingUser) {
        return res.status(400).json({ error: "Username already exists" });
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create a new user
      const newUser = await User.create({
        username,
        email,
        password: hashedPassword,
        role,
      });

      res
        .status(201)
        .json({ message: "User registered successfully", user: newUser });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
);

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate the request body
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Check if the user exists
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ error: "Invalid username or password" });
    }

    // Check if the password is correct
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid username or password" });
    }

    // Generate a JWT token
    const token = jwt.sign(
      { id: user.id, username: user.username, role: user.role },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h", // You can adjust the expiration time as needed
      }
    );

    // Send the token in the response
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/", authenticateJWT, async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/forgot-password", async (req, res) => {
  try {
    const { email } = req.body;

    // Check if the user with the provided email exists
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }

    // Generate a password reset token and set expiration time
    const resetToken = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    const resetTokenExpiration = new Date(Date.now() + 3600000); // Token valid for 1 hour

    // Update user with reset token and expiration
    await user.update({ resetToken, resetTokenExpiration });

    // Send email with password reset link
    // const transporter = nodemailer.createTransport({
    // configure your email transport options (e.g., SMTP)
    // });

    // const mailOptions = {
    //   from: 'your-email@example.com',
    //   to: user.email,
    //   subject: 'Password Reset Request',
    //   text: `Click the following link to reset your password: http://your-app/reset-password/${resetToken}`,
    // };

    // await transporter.sendMail(mailOptions);

    // res.json({ message: 'Password reset instructions sent to your email' });
    res.json({ resetToken: resetToken });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/change-password", authenticateJWT, async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the user with the provided email exists
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Update user with reset token and expiration
    await user.update({ password: hashedPassword });
    res.json({ message: "Password Updated" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
