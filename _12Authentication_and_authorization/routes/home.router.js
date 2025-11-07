const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/auth-middleware");

router.get("/home", authMiddleware, (req, res) => {
  const { username, userId, role } = req.userInfo;
  res.json({
    message: "wellcome to home",
    user: {
      _id: userId,
      username,
      role,
    },
  });
});

module.exports = router;
