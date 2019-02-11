const express = require("express");
const router = express.Router();
const staticController = require("../controllers/staticController.js");
const timerController = require("../controllers/timerController.js");

router.get("/", staticController.index);
router.get("/about", staticController.about);
router.get("/timer", timerController.index);


module.exports = router; 