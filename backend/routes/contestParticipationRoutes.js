const express = require("express");
const router = express.Router();

const {
  registerForContest,
  updateContestScore,
} = require("../controllers/contestParticipationController");

router.post("/register", registerForContest);
router.post("/score", updateContestScore);

module.exports = router;