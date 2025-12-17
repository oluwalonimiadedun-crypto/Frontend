const express = require("express");
const router = express.Router();
const sessionUtil = require("../../utils/session");

router.post("/user/login", (req, res) => {
  sessionUtil.login(req, { email: req.body.email });
  res.json({ success: true });
});

router.post("/user", (req, res) => {
  res.json({ success: true });
});

module.exports = router;
