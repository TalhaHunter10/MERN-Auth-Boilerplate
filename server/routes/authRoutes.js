const express = require("express");
const protect = require("../middlewares/authmiddleware");
const { logOut, loginStatus } = require("../controllers/userController");
const router = express.Router();

router.get("/loggedin-status", loginStatus);
router.get("/logout", protect, logOut);
