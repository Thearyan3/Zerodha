const User = require("../models/UserModel");
const jwt = require("jsonwebtoken");
require("dotenv").config();

// Middleware for verifying user token
module.exports.userVerification = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ status: false, message: "No token provided" });
    }

    // Verify token
    jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
      if (err) {
        return res.status(403).json({ status: false, message: "Invalid or expired token" });
      }

      const user = await User.findById(decoded.id);
      if (!user) {
        return res.status(404).json({ status: false, message: "User not found" });
      }

      // Attach user to request for later use
      req.user = user;
      next(); // pass control to next middleware/route handler
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: false, message: "Server error" });
  }
};
