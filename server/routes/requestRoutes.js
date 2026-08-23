const express = require("express");
const protect = require("../middlewares/authMiddleware");
const roleMiddleware = require("../middlewares/roleMiddleware");
const {
  requestBorrowBook,
  acceptRejectRequestBorrowBook,
  getRequests,
  getUserBorrowedBooks,
  cancelBorrowRequest,
} = require("../controllers/request.controller");
const verifyAccount = require("../middlewares/accountStatusMiddleware");
const router = express.Router();

router.get("/", protect, roleMiddleware("admin", "student"), getRequests);
router.post(
  `/:bookId`,
  protect,
  verifyAccount,
  roleMiddleware("student"),
  requestBorrowBook,
);
router.patch(
  `/:requestId/status`,
  protect,
  roleMiddleware("admin"),
  acceptRejectRequestBorrowBook,
);
router.get(
  "/borrowed",
  protect,
  roleMiddleware("admin", "student"),
  getUserBorrowedBooks,
);

router.patch("/:requestId/cancel", protect, cancelBorrowRequest);

module.exports = router;
