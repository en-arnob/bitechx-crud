const router = require("express").Router();
const userController = require("../controllers/userController");

// Get all users
router.get("/", userController.getAll);

// Create a new user
router.post("/", userController.createNew);

// Update a user
router.put("/:id", userController.update);

// Get a single user
router.get("/:id", userController.getById);

// Delete a user
router.delete("/:id", userController.deleteUser);

module.exports = router;
