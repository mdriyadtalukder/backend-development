const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/auth-middleware");
const isAdmin = require("../middlewares/admin-middleware");

router.get("/admin", authMiddleware, isAdmin, (req, res) => {
  res.json({
    message: "wellcome to admin path",
  });
});

module.exports = router;
