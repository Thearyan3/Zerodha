const User = require("../models/UserModel");
const { createSecretToken } = require("../util/SecretToken");

module.exports.Signup = async (req, res, next) => {
  try {
    const { email, password, username } = req.body;

    // 1. Validate input
    if (!email || !password || !username) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // 2. Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // 3. Create new user (password will be hashed automatically by pre-save hook)
    const user = await User.create({ email, password, username });

    // 4. Generate JWT
    const token = createSecretToken(user._id);

    // 5. Set cookie
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: true, // safer (JS can't access)
    });

    // 6. Send response
    res.status(201).json({
      message: "User signed up successfully",
      success: true,
      user: {
        id: user._id,
        email: user.email,
        username: user.username,
      },
    });

    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports.Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // 1. Validate input
    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // 2. Find user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Incorrect email or password" });
    }

    // 3. Check password using model method
    const isPasswordCorrect = await user.correctPassword(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Incorrect email or password" });
    }

    // 4. Generate JWT
    const token = createSecretToken(user._id);

    // 5. Set cookie
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: true,
    });

    // 6. Send response
    res.status(200).json({
      message: "User logged in successfully",
      success: true,
      user: {
        id: user._id,
        email: user.email,
        username: user.username,
      },
    });

    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
