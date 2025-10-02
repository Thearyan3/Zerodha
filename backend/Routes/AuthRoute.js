const { Signup, Login } = require("../Controllers/AuthController");
const { userVerification } = require("../Middlewares/AuthMiddleware");
const router = require("express").Router();

router.post("/signup", Signup);
// router.post("/login", Login);

// // Protected routes
router.get("/verify", userVerification, (req, res) => {
  res.json({
    status: true,
    message: "User is authenticated",
    user: {
      id: req.user._id,
      email: req.user.email,
      username: req.user.username
    }
  });
});

router.get("/dashboard", userVerification, (req, res) => {
  res.json({
    message: `Welcome to dashboard, ${req.user.username}`
  });
});

module.exports = router;
