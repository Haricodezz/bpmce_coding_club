const express = require("express");
const router = express.Router();

const {
  updateUserScore,
  getLeaderboard,
} = require("../controllers/scoreController");

router.post("/update", updateUserScore);
router.get("/leaderboard", getLeaderboard);

module.exports = router;