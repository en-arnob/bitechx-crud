const router = require("express").Router();
const userController = require("../controllers/userController");

// Get all users
router.get("/", userController.getAll);

// Create a new user
router.post("/", userController.createNew);

module.exports = router;
