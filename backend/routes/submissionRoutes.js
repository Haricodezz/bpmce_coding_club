const express = require("express");
const router = express.Router();

const {
  submitProblem,
} = require("../controllers/submissionController");

router.post("/", submitProblem);

module.exports = router;