const express = require("express");
const router = express.Router();
const {
  getUserProfile,
  getUsers,
  updateUserRole,
  deleteUser,
  approveUserProfile,
} = require("../controllers/userController");
const protect = require("../middlewares/authMiddleware");
const roleMiddleware = require("../middlewares/roleMiddleware");

router.get("/my-profile", protect, getUserProfile);
router.get("/", protect, roleMiddleware("admin"), getUsers);
router.put(`/:userId`, protect, roleMiddleware("admin"), updateUserRole);
router.delete(`/:userId`, protect, roleMiddleware("admin"), deleteUser);
router.put(
  `/approveUserProfile/:userId`,
  protect,
  roleMiddleware("admin"),
  approveUserProfile
);

module.exports = router;
