require("dotenv").config();
const jwt = require("jsonwebtoken");

// createSecretToken function with flexible expiry
module.exports.createSecretToken = (id, expiresIn = "3d") => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn,
    algorithm: "HS256", // explicitly set
  });
};
