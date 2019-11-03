const express = require('express');
const router = express.Router();
const artistController = require("../controller/artistController")

router.get("/", artistController.index)
router.post("/login", artistController.login)
router.get("/artist", artistController.artist)
router.post("/artist", artistController.upload)

module.exports = router;
