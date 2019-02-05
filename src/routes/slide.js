const express = require("express");
const router = express.Router();

const slideController = require("../controllers/slideController");

router.get("/slides", slideController.index);

module.exports = router;