const express = require("express");
const router = express.Router();

const {
  createProblem,
  getProblems,
} = require("../controllers/problemController");

router.post("/", createProblem);
router.get("/", getProblems);

module.exports = router;