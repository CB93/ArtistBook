const express = require('express');
const router = express.Router();
const artistController = require("../controller/artistController")

router.get("/", artistController.index)
router.get("/login", artistController.login)

module.exports = router;
