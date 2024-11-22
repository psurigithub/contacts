// routes/userRoutes.js
const express = require("express");
const router = express.Router();
const userController = require("../controllers/authController");
const { check } = require("express-validator");


router.post(
  "/signup",
  [
    check("username").isEmail().withMessage("Username must be a valid email"),
    check("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
    check("role")
      .optional()  
      .isIn(["Admin", "User"])
      .withMessage("Role must be either 'Admin' or 'User'"),
  ],
  userController.signup
);

// User login route
router.post(
  "/login",
  [
    check("username").isEmail().withMessage("Username must be a valid email"), 
    check("password").notEmpty().withMessage("Password is required"),
  ],
  userController.login
);

module.exports = router;
