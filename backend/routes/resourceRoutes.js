const express = require("express");
const router = express.Router();

const {
  createResource,
  getResources,
} = require("../controllers/resourceController");

router.post("/", createResource);
router.get("/", getResources);

module.exports = router;