const express = require("express");
const Router = express.Router();
const timerController = require("../controllers/timerController");

router.get("/timer", timerController.getTimer);

module.exports = router;