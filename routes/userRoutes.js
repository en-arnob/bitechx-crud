const router = require("express").Router();
const userController = require("../controllers/userController");

// Get all users
router.get("/", userController.getAll);

module.exports = router;
